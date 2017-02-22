<?php

namespace App\Http\Controllers;

use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;
use Tymon\JWTAuth\JWTAuth;
use App\User;
use Illuminate\Http\Request;

class AuthController extends Controller
{

    protected $jwt;

    public function __construct(JWTAuth $jwt)
    {
        $this->jwt = $jwt;
    }

    /**
     * @internal param Request $Instance instance
     */
    public function postLogin(Request $request) : Response
    {
        $this->validate($request, [
            'email'    => 'required|email',
            'password' => 'required|min:6',
        ]);

        $credentials = $request->only('email', 'password');

        if (! $token = $this->jwt->attempt($credentials)) {
            return response(['error' => 'Invalid Credentials'], Response::HTTP_UNAUTHORIZED);
        }

        return response(['token' => $token]);
    }

    public function getAuthenticatedUser() : Response
    {
        $user = $this->jwt->parseToken()->authenticate();

        return response(compact('user'));
    }

    public function updateAuthenticatedUser(Request $request) : Response
    {
        $this->validate($request, [
            'email' => 'required|email|unique:users',
            'name' => 'required|max:255',
        ]);

        /** @var User $user */
        $user = $request->user();

        if (!$request->has('id')) {
            return $this->changePassword($request);
        }

        $user->update([
            'name' => $request->input('name'),
            'email' => $request->input('email')
        ]);

        return response('', Response::HTTP_NO_CONTENT);
    }

    /**
     * @SuppressWarnings(PHPMD.StaticAccess)
     */
    private function changePassword(Request $request) : Response
    {
        /** @var User $user */
        $user = $request->user();

        $this->validate($request, [
            'oldpassword'  => 'required|min:6',
            'newpassword1' => 'required|min:6',
            'newpassword2' => 'required|min:6|same:newpassword1',
        ]);

        $oldpassword = $request->input('oldpassword');
        $newpassword = $request->input('newpassword1');

        if (!Hash::check($oldpassword, $user->password)) {
            return response(['error' => 'Invalid Old Password'], Response::HTTP_BAD_REQUEST);
        }

        $user->password = $newpassword;
        $user->save();

        return response('', Response::HTTP_NO_CONTENT);
    }
}
