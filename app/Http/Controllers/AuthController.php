<?php

namespace App\Http\Controllers;

use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Tymon\JWTAuth\JWTAuth;
use App\User;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    /**
     * @var \Tymon\JWTAuth\JWTAuth
     */
    protected $jwt;

    public function __construct(JWTAuth $jwt)
    {
        $this->jwt = $jwt;
    }

    /**
     * Authorize user.
     *
     * @param Request $request
     * @return JSON user details and auth credentials
     * @internal param Request $Instance instance
     *
     */
    public function postLogin(Request $request)
    {
        $this->validate($request, [
            'email'    => 'required|email',
            'password' => 'required|min:6',
        ]);

        $credentials = $request->only('email', 'password');

        $user = User::whereEmail($credentials['email'])->first();

        if (! $token = $this->jwt->attempt($credentials)) {
            return response()->json(['error' => 'Invalid Credentials'], 401);
        }

        return response()->success(['token' => $token]);
    }

    /**
     * Get authenticated user details and auth credentials.
     *
     * @return JSON
     */
    public function getAuthenticatedUser()
    {
        if (! $user = $this->getCurrentUser()) {
            return response()->json('unauthenticated', 401);
        }

        return response()->success(compact('user'));
    }

    public function updateAuthenticatedUser(Request $request)
    {
        /** @var User $user */
        $user = Auth::user();

        if (!$request->has('id')) {
            return $this->changePassword($request);
        }

        $user->update([
            'name' => $request->input('name'),
            'email' => $request->input('email')
        ]);

        return response()->success(compact('user'));
    }

    public function registration(Request $request)
    {
        // @todo
    }

    /**
     * @return bool|false|User
     */
    private function getCurrentUser()
    {
        if (! $user = $this->jwt->parseToken()->authenticate()) {
            return false;
        }

        return $user;
    }

    private function changePassword(Request $request)
    {
        /** @var User $user */
        $user = Auth::user();

        $this->validate($request, [
            'oldpassword'  => 'required|min:6',
            'newpassword1' => 'required|min:6',
            'newpassword2' => 'required|min:6|same:newpassword1',
        ]);

        $oldpassword = $request->input('oldpassword');
        $newpassword = $request->input('newpassword');

        if (!Hash::check($oldpassword, $user->password)) {
            return response(['error' => 'Invalid Old Password'], Response::HTTP_BAD_REQUEST);
        }

        $user->password = Hash::make($newpassword);

        return response('', Response::HTTP_NO_CONTENT);
    }
}
