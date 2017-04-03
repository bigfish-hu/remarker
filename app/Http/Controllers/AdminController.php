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
        return response(compact('users'));
    }

    public function getUser(int $user_id) : Response
    {
        $user = User::query()->find($user_id);

        return response(compact('user'));
    }

    public function createUser(Request $request) : Response
    {
        $input = $request->all();

        $this->validate($request, [
            'email' => 'required|email|unique:users,email|max:50',
            'name' => 'required|min:3|max:50',
            'password' => 'required|string|min:6'
        ]);

        $userData = [
            'name' => $input['name'],
            'email' => $input['email'],
            'password' => $input['password'],
        ];

        if (isset($input['is_superadmin'])) {
            $userData['is_superadmin'] = $input['is_superadmin'];
        }

        User::create($userData);

        return response('', Response::HTTP_CREATED);
    }

    public function updateUser(Request $request, int $user_id) : Response
    {
        $user = User::find($user_id);

        $this->validate($request, [
            'name' => 'min:3',
            'email' => 'email|unique:users,email,'.$user->id,
            'is_superadmin' => 'boolean'
        ]);

        $user->update(array_filter($request->all()));

        return response('', Response::HTTP_NO_CONTENT);
    }

    public function deleteUser(int $user_id) : Response
    {
        User::destroy($user_id);

        return response('', Response::HTTP_NO_CONTENT);
    }
}
