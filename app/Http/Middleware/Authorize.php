<?php

namespace App\Http\Middleware;

use Closure;
use Tymon\JWTAuth\Facades\JWTAuth;

class Authorize
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param  string|null  $guard
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if ((int)JWTAuth::parseToken()->authenticate()->is_superadmin !== 1) {
            return response('Unauthorized.', 401);
        }
        return $next($request);
    }
}
