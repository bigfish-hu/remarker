<?php

namespace Tests;

use App\User;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Artisan;
use Tymon\JWTAuth\Facades\JWTAuth;

abstract class BaseTestClass extends \Illuminate\Foundation\Testing\TestCase
{
    protected $baseUrl = 'http://localhost:8080/';

    public function createApplication(): Application
    {
        $app = require __DIR__.'/../bootstrap/app.php';

        $app->make(\Illuminate\Contracts\Console\Kernel::class)->bootstrap();

        return $app;
    }

    public function setUp()
    {
        parent::setUp();
        $this->setupDatabase();
    }

    public function setupDatabase()
    {
        $this->artisan('migrate');
    }

    protected function createAdmin() : User
    {
        return factory(User::class, 'admin')->create();
    }

    protected function createUser() : User
    {
        return factory(User::class, 'user')->create();
    }

    /**
     * @SuppressWarnings(PHPMD.StaticAccess)
     */
    protected function login(User $user) : string
    {
        $token = JWTAuth::fromUser($user);
        JWTAuth::setToken($token);

        return $token;
    }
}
