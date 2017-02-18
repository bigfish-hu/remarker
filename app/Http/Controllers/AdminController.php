<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class AdminController extends Controller
{
    /**
     * Show all users
     *
     * @return \Illuminate\Http\Response
     */
    public function getUsers()
    {
        $users = User::get();
        return response()->success(compact('users'));
    }

    /**
     * Get a user by id.
     *
     * @param $id
     * @return \Illuminate\Http\Response
     */
    public function getUser($id)
    {
        $user = User::with(array('projects' => function ($query) {
            $query->select('id', 'name');
        }))->find($id);

        return response()->success(compact('user'));
    }

    /**
     * Create a new user
     *
     * @param Request $request
     * @return \Illuminate\Http\Response
     */
    public function createUser(Request $request)
    {
        $input = $request->all();

        /** @var AdminController $this */
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

    /**
     * Update an existing user.
     *
     * @param Request $request
     * @param $id
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function updateUser(Request $request, $id)
    {
        $user = User::find($id);

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

    /**
     * Utterly destroy, delete, exterminate a user by id.
     *
     * @param array|int $id
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function deleteUser($id)
    {
        User::destroy($id);

        return response('', Response::HTTP_NO_CONTENT);
    }
}
