<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Support\Facades\Auth;
use Tymon\JWTAuth\JWTAuth;
use App\Http\Controllers\Controller;
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
     * @param Instance Request instance
     *
     * @return JSON user details and auth credentials
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
        $user = Auth::user();

        return response()->success(compact('user'));
    }

    public function registration(Request $request)
    {

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
}
