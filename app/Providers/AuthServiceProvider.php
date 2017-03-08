<?php

namespace App\Providers;

use Illuminate\Http\Request;
use Illuminate\Contracts\Auth\Access\Gate as GateContract;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    public function boot(GateContract $gate)
    {
        $this->registerPolicies($gate);

        $this->app['auth']->viaRequest('api', function (Request $request) {
            return \App\User::where('email', $request->input('email'))->first();
        });
    }
}
