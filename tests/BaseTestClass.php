<?php

namespace Tests;

use App\User;
use Illuminate\Support\Facades\Artisan;
use Tymon\JWTAuth\Facades\JWTAuth;

abstract class BaseTestClass extends \Illuminate\Foundation\Testing\TestCase
{
    /**
     * The base URL to use while testing the application.
     *
     * @var string
     */
    protected $baseUrl = 'http://localhost:8080/';

    /**
     * Creates the application.
     *
     * @return \Illuminate\Foundation\Application
     */
    public function createApplication()
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

    /**
     * @return User
     */
    protected function createAdmin()
    {
        return factory(User::class, 'admin')->create();
    }

    /**
     * @param User $user
     *
     * @return string
     */
    protected function login(User $user)
    {
        $token = JWTAuth::fromUser($user);
        JWTAuth::setToken($token);

        return $token;
    }
}
