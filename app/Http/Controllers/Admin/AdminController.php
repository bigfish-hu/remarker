<?php

namespace App\Http\Controllers\Admin;

use App\User;
use Illuminate\Http\Request;
use App\Http\Requests;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Controller;
use Symfony\Component\HttpFoundation\Response;
use Tymon\JWTAuth\Facades\JWTAuth;

class AdminController extends Controller
{
    /**
     * Show all users
     *
     * @return \Illuminate\Http\Response
     */
    public function getUsers()
    {
        $users = User::with('projects')->get();
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
        $user = User::find($id);

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
        $userForm = array_dot(
            app('request')->only(
                'data.user.name',
                'data.user.email',
                'data.user.id',
                'data.user.is_superadmin'
            )
        );

        $userId = intval($userForm['data.user.id']);

        $user = User::find($userId);

        $this->validate($request, [
            'data.user.id' => 'required|integer',
            'data.user.name' => 'required|min:3',
            'data.user.email' => 'required|email|unique:users,email,'.$user->id,
        ]);

        $userData = [
            'name' => $userForm['data.user.name'],
            'email' => $userForm['data.user.email'],
            'is_superadmin' => $userForm['data.user.is_superadmin'],
        ];

        $affectedRows = User::where('id', '=', $userId)->update($userData);

        return response()->success(compact('affectedRows'));
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
