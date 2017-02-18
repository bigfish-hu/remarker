<?php

namespace App\Http\Controllers;

use Illuminate\Http\Response;
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

    /**
     * AuthController constructor.
     *
     * @param JWTAuth $jwt
     */
    public function __construct(JWTAuth $jwt)
    {
        $this->jwt = $jwt;
    }

    /**
     * Authorize user.
     *
     * @param Request $request
     *
     * @return \Illuminate\Http\Response
     *
     * @internal param Request $Instance instance
     */
    public function postLogin(Request $request)
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

    /**
     * Get authenticated user details and auth credentials.
     *
     * @return \Illuminate\Http\Response
     */
    public function getAuthenticatedUser()
    {
        if (! $user = $this->getCurrentUser()) {
            return response('', Response::HTTP_UNAUTHORIZED);
        }

        return response(compact('user'));
    }

    /**
     * @param Request $request
     *
     * @return Response
     */
    public function updateAuthenticatedUser(Request $request)
    {
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
     * @return bool|User
     */
    private function getCurrentUser()
    {
        if (! $user = $this->jwt->parseToken()->authenticate()) {
            return false;
        }

        return $user;
    }

    /**
     * @param Request $request
     *
     * @return Response
     *
     * @SuppressWarnings(PHPMD.StaticAccess)
     */
    private function changePassword(Request $request)
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
