<?php

namespace Tests\App\Http\Controllers;

use Illuminate\Http\Response;
use Tests\BaseTestClass;

class AuthControllerTest extends BaseTestClass
{

    private $adminEmail = 'admin@remarker.com';
    private $adminPassword = 'secret';

    /**
     * @group auth
     * @covers \App\Http\Controllers\AuthController::postLogin
     */
    public function testLogin_emptyBody()
    {
        $response = $this->postJson($this->baseUrl . 'api/auth/login');

        $this->assertEquals(Response::HTTP_UNPROCESSABLE_ENTITY, $response->getStatusCode());
    }

    /**
     * @group auth
     * @covers \App\Http\Controllers\AuthController::postLogin
     */
    public function testLogin_InvalidEmail()
    {
        $response = $this->postJson($this->baseUrl . 'api/auth/login', [
            'email' => 'dsgfdg',
            'password' => 'sdg34fd'
        ]);

        $this->assertEquals(Response::HTTP_UNPROCESSABLE_ENTITY, $response->getStatusCode());
    }

    /**
     * @group auth
     * @covers \App\Http\Controllers\AuthController::postLogin
     */
    public function testLogin_badEmail_badPassword()
    {
        $response = $this->postJson($this->baseUrl . 'api/auth/login', [
            'email' => 'not@existing.email',
            'password' => 'sdg34fd'
        ]);

        $this->assertEquals(Response::HTTP_UNAUTHORIZED, $response->getStatusCode());
    }

    /**
     * @group auth
     * @covers \App\Http\Controllers\AuthController::postLogin
     */
    public function testLogin_goodEmail_badPassword()
    {
        $response = $this->postJson($this->baseUrl . 'api/auth/login', [
            'email' => $this->adminEmail,
            'password' => 'asfdsgdg'
        ]);

        $this->assertEquals(Response::HTTP_UNAUTHORIZED, $response->getStatusCode());
    }

    /**
     * @group auth
     * @covers \App\Http\Controllers\AuthController::postLogin
     */
    public function testLogin_goodEmail_goodPassword()
    {
        $response = $this->postJson($this->baseUrl . 'api/auth/login', [
            'email' => $this->adminEmail,
            'password' => $this->adminPassword
        ]);

        $this->assertEquals(Response::HTTP_OK, $response->getStatusCode());
    }
}