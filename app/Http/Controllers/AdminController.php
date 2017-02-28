<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

/**
 * @SuppressWarnings(PHPMD.StaticAccess)
 */
class AdminController extends Controller
{
    public function getUsers() : Response
    {
        $users = User::get();
        return response()->success(compact('users'));
    }

    public function getUser(int $user_id) : Response
    {
        $user = User::with(array('projects' => function ($query) {
            $query->select('id', 'name');
        }))->find($user_id);

        return response()->success(compact('user'));
    }

    public function createUser(Request $request) : Response
    {
        $input = $request->all();

        $this->validate($request, [
            'data.user.email' => 'required|email|unique:users,email|max:50',
            'data.user.name' => 'required|min:3|max:50',
            'data.user.password' => 'required|string|min:6'
        ]);

        $userData = [
            'name' => $input['data']['user']['name'],
            'email' => $input['data']['user']['email'],
            'password' => $input['data']['user']['password'],
        ];

        if (isset($input['data']['user']['is_superadmin'])) {
            $userData['is_superadmin'] = $input['data']['user']['is_superadmin'];
        }

        $user = User::create($userData);

        return response()->success(compact('user'));
    }

    public function updateUser(Request $request, int $user_id) : Response
    {
        $user = User::find($user_id);

        $this->validate($request, [
            'data.user.id' => 'required|integer',
            'data.user.name' => 'required|min:3',
            'data.user.email' => 'required|email|unique:users,email,'.$user->id,
            'data.user.projects.*.id' => 'required|integer'
        ]);

        $request = $request->all();
        $userData = $request['data']['user'];

        $projectIds = array_map(function ($project) {
            return $project['id'];
        }, $userData['projects']);

        $user->update($userData);
        $user->projects()->sync($projectIds);

        return response('', Response::HTTP_NO_CONTENT);
    }

    public function deleteUser(int $user_id) : Response
    {
        User::destroy($user_id);

        return response('', Response::HTTP_NO_CONTENT);
    }
}
