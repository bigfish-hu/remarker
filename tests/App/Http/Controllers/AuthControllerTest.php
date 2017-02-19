<?php

namespace Tests\App\Http\Controllers;

use App\User;
use Illuminate\Http\Response;
use Tests\BaseTestClass;

class AuthControllerTest extends BaseTestClass
{

    private $adminEmail = 'admin@remarker.com';
    private $adminPassword = 'secret';

    /** @var User $admin */
    private $admin;

    public function setUp()
    {
        parent::setUp();

        $this->admin = $this->createAdmin();
    }

    /**
     * @group auth
     * @covers \App\Http\Controllers\AuthController::postLogin
     */
    public function testLoginEmptyBody()
    {
        $this->postJson($this->baseUrl . 'api/auth/login')->assertStatus(Response::HTTP_UNPROCESSABLE_ENTITY);
    }

    /**
     * @group auth
     * @covers \App\Http\Controllers\AuthController::postLogin
     */
    public function testLoginInvalidEmail()
    {
        $this->postJson($this->baseUrl . 'api/auth/login', [
            'email' => 'dsgfdg',
            'password' => 'sdg34fd'
        ])->assertStatus(Response::HTTP_UNPROCESSABLE_ENTITY);
    }

    /**
     * @group auth
     * @covers \App\Http\Controllers\AuthController::postLogin
     */
    public function testLoginBadEmailBadPassword()
    {
        $this->postJson($this->baseUrl . 'api/auth/login', [
            'email' => 'not@existing.email',
            'password' => 'sdg34fd'
        ])->assertStatus(Response::HTTP_UNAUTHORIZED);
    }

    /**
     * @group auth
     * @covers \App\Http\Controllers\AuthController::postLogin
     */
    public function testLoginGoodEmailBadPassword()
    {
        $this->postJson($this->baseUrl . 'api/auth/login', [
            'email' => $this->adminEmail,
            'password' => 'asfdsgdg'
        ])->assertStatus(Response::HTTP_UNAUTHORIZED);
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
        ])->assertStatus(Response::HTTP_OK);
        $this->assertNotEmpty(json_decode($response->getContent(), true)['token']);
    }

    /**
     * @group auth
     * @covers \App\Http\Controllers\AuthController::getAuthenticatedUser
     */
    public function testGetUserNoToken()
    {
        $this->getJson($this->baseUrl . 'api/users/me')->assertStatus(Response::HTTP_UNAUTHORIZED);
    }

    /**
     * @group auth
     * @covers \App\Http\Controllers\AuthController::getAuthenticatedUser
     */
    public function testGetUserInvalidToken()
    {
        $this->getJson($this->baseUrl . 'api/users/me', [
            'Authorization' => 'Bearer fdgdhdsfhfsdhgd'
        ])->assertStatus(Response::HTTP_UNAUTHORIZED);
    }

    /**
     * @group auth
     * @covers \App\Http\Controllers\AuthController::getAuthenticatedUser
     */
    public function testGetUserValidToken()
    {
        /** @var User $user */
        $user = $this->admin;
        $token = $this->login($user);

        $response = $this->getJson($this->baseUrl . 'api/users/me', [
            'Authorization' => 'Bearer '.$token
        ])->assertStatus(Response::HTTP_OK);

        $response = json_decode($response->getContent(), true);

        $this->assertArrayHasKey('user', $response);
        $this->assertArrayHasKey('id', $response['user']);
        $this->assertArrayHasKey('name', $response['user']);
        $this->assertArrayHasKey('email', $response['user']);

        $this->assertEquals($user->id, $response['user']['id']);
        $this->assertEquals($user->name, $response['user']['name']);
        $this->assertEquals($user->email, $response['user']['email']);
    }
}
