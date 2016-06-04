<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class IssueTrackerApiServiceProvider extends ServiceProvider
{
    /**
     * Register the application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind('App\Contracts\ApiClientInterface', 'App\Services\GuzzleApiClient');
    }
}
