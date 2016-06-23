<?php

namespace App\Http\Controllers\Admin;

use Gate;
use App\User;
use Illuminate\Http\Request;
use App\Http\Requests;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Controller;

class AdminController extends Controller
{
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('home');
    }

    /**
     * Show all users
     *
     * @return \Illuminate\Http\Response
     */
    public function getUsers()
    {
        $users = \App\User::with('projects')->get();

        return view('users', ['users' => $users]);
    }

    /**
     * Create a new user
     *
     * @param Request $request
     * @return \Illuminate\Http\Response
     */
    public function createUser(Request $request)
    {
        /** @var AdminController $this */
        $this->validate($request, [
            'email' => 'required|email|unique:users|max:50',
            'name' => 'required|string|max:50',
            'password' => 'required|string|min:6'
        ]);

        /** @var array $input */
        $input = $request->all();

        if (isset($input['is_superadmin'])) {
            $input['is_superadmin'] = true;
        }

        User::create($input);

        return redirect('admin/users');
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
        /** @var AdminController $this */
        $this->validate($request, [
            'email' => 'email|unique:users|max:50',
            'name' => 'string|max:50',
            'password' => 'string|min:6'
        ]);

        /** @var array $input */
        $input = $request->all();

        if (isset($input['is_superadmin'])) {
            $input['is_superadmin'] = true;
        }

        /** @var User $user */
        $user = User::query()->find((int)$id);

        $input = $this->unsetEmptyInputFields($input);

        $user->update($input);

        return redirect('admin/users');
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

        return redirect('admin/users');
    }
}
