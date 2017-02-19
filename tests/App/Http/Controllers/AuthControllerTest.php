<?php

namespace Tests\App\Http\Controllers;

use Illuminate\Http\Response;
use Tests\BaseTestClass;

class AuthControllerTest extends BaseTestClass
{

    private $adminEmail = 'admin@remarker.com';
    private $adminPassword = 'secret';

    public function setUp()
    {
        parent::setUp();

        $this->createAdmin();
    }

    /**
     * @group auth
     * @covers \App\Http\Controllers\AuthController::postLogin
     */
    public function testLoginEmptyBody()
    {
        $response = $this->postJson($this->baseUrl . 'api/auth/login');

        $this->assertEquals(Response::HTTP_UNPROCESSABLE_ENTITY, $response->getStatusCode());
    }

    /**
     * @group auth
     * @covers \App\Http\Controllers\AuthController::postLogin
     */
    public function testLoginInvalidEmail()
    {
        $response = $this->postJson($this->baseUrl . 'api/auth/login', [
            'email' => 'dsgfdg',
            'password' => 'sdg34fd'
        ]);

        $response->assertStatus(Response::HTTP_UNPROCESSABLE_ENTITY);
    }

    /**
     * @group auth
     * @covers \App\Http\Controllers\AuthController::postLogin
     */
    public function testLoginBadEmailBadPassword()
    {
        $response = $this->postJson($this->baseUrl . 'api/auth/login', [
            'email' => 'not@existing.email',
            'password' => 'sdg34fd'
        ]);

        $response->assertStatus(Response::HTTP_UNAUTHORIZED);
    }

    /**
     * @group auth
     * @covers \App\Http\Controllers\AuthController::postLogin
     */
    public function testLoginGoodEmailBadPassword()
    {
        $response = $this->postJson($this->baseUrl . 'api/auth/login', [
            'email' => $this->adminEmail,
            'password' => 'asfdsgdg'
        ]);

        $response->assertStatus(Response::HTTP_UNAUTHORIZED);
    }

    /**
     * @group auth
     * @covers \App\Http\Controllers\AuthController::postLogin
     */
    public function testLoginGoodEmailGoodPassword()
    {
        $response = $this->postJson($this->baseUrl . 'api/auth/login', [
            'email' => $this->adminEmail,
            'password' => $this->adminPassword
        ]);

        $response->assertStatus(Response::HTTP_OK);
        $this->assertNotEmpty(json_decode($response->getContent(), true)['token']);
    }

    /**
     * @group auth
     * @covers \App\Http\Controllers\AuthController::getAuthenticatedUser
     */
    public function testGetUserNoToken()
    {
        $response = $this->getJson($this->baseUrl . 'api/users/me');

        $response->assertStatus(Response::HTTP_UNAUTHORIZED);
    }

    /**
     * @group auth
     * @covers \App\Http\Controllers\AuthController::getAuthenticatedUser
     */
    public function testGetUserInvalidToken()
    {
        $response = $this->getJson($this->baseUrl . 'api/users/me', [
            'Authorization' => 'Bearer fdgdhdsfhfsdhgd'
        ]);

        $response->assertStatus(Response::HTTP_UNAUTHORIZED);
    }

    /**
     * @group auth
     * @covers \App\Http\Controllers\AuthController::getAuthenticatedUser
     */
    public function testGetUserValidToken()
    {
    }
}
