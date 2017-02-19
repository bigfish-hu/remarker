<?php

namespace Tests;

use App\User;
use Illuminate\Support\Facades\Artisan;

abstract class BaseTestClass extends \Illuminate\Foundation\Testing\TestCase
{
    /**
     * The base URL to use while testing the application.
     *
     * @var string
     */
    protected $baseUrl = 'http://localhost:8080/';

    /** @var User $admin */
    protected $admin;

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

    protected function createAdmin()
    {
        $this->admin = factory(User::class, 'admin')->create();
    }
}
