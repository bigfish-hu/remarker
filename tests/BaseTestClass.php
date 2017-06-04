<?php

namespace Tests;

use App\Feedback;
use App\Project;
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

    protected function createProject(string $type) : Project
    {
        return factory(Project::class, $type)->create();
    }

    protected function createFeedback() : Feedback
    {
        return factory(Feedback::class)->create();
    }

    /**
     * @SuppressWarnings(PHPMD.StaticAccess)
     * @param User $user
     * @return string
     */
    protected function login(User $user) : string
    {
        $token = JWTAuth::fromUser($user);
        JWTAuth::setToken($token);

        return $token;
    }

    /**
     * @param array $array
     * @return mixed
     */
    protected function assertArrayHasData(array $array)
    {
        $this->assertArrayHasKey('data', $array);
        return $array['data'];
    }

    /**
     * @param array $response
     * @return array|mixed
     */
    protected function assertArrayHasUsers(array $response)
    {
        $this->assertArrayHasKey('users', $response);
        $this->assertNotEmpty($response['users']);
        $response = $response['users'];
        return $response;
    }

    /**
     * @param array $response
     * @return array|mixed
     */
    protected function assertArrayHasEdges(array $response)
    {
        $this->assertArrayHasKey('edges', $response);
        $this->assertNotEmpty($response['edges']);
        $response = $response['edges'];
        return $response;
    }

    /**
     * @param array $response
     * @return array|mixed
     */
    protected function assertArrayHasProjects(array $response)
    {
        $this->assertArrayHasKey('projects', $response);
        $this->assertNotEmpty($response['projects']);
        return $response['projects'];
    }

    /**
     * @param array $response
     * @return array|mixed
     */
    protected function assertArrayHasFeedbacks(array $response)
    {
        $this->assertArrayHasKey('feedbacks', $response);
        $this->assertNotEmpty($response['feedbacks']);
        return $response['feedbacks'];
    }
}
