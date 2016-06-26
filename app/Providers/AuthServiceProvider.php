<?php

namespace App\Providers;

use App\Feedback;
use App\IssueTracker;
use App\Policies\FeedbackPolicy;
use App\Policies\IssueTrackerPolicy;
use App\Policies\ProjectPolicy;
use App\Policies\UserPolicy;
use App\Project;
use App\User;
use Illuminate\Contracts\Auth\Access\Gate as GateContract;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * Register any application authentication / authorization services.
     *
     * @param  \Illuminate\Contracts\Auth\Access\Gate  $gate
     * @return void
     */
    public function boot(GateContract $gate)
    {
        $this->registerPolicies($gate);

        $this->app['auth']->viaRequest('api', function ($request) {
            return \App\User::where('email', $request->input('email'))->first();
        });

//        $gate->define('admin', function ($user) {
//            return $user->is_superadmin === 1;
//        });
    }
}
