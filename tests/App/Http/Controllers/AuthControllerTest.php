<?php

namespace Tests\App\Http\Controllers;

use App\User;
use Illuminate\Http\Response;
use Tests\BaseTestClass;

/**
 * @SuppressWarnings(PHPMD.TooManyPublicMethods)
 */
class AuthControllerTest extends BaseTestClass
{
    private $adminEmail = 'admin@remarker.com';
    private $adminPassword = 'secret';
    private $adminName = 'admin';

    /** @var User $admin */
    private $admin;

    public function setUp()
    {
        parent::setUp();

        $this->admin = $this->createAdmin();
    }

    /**
     * @group auth
     * @group POST
     * @covers \App\Http\Controllers\AuthController::postLogin
     */
    public function testLoginEmptyBody()
    {
        $this->postJson($this->baseUrl . 'api/auth/login')->assertStatus(Response::HTTP_UNPROCESSABLE_ENTITY);
    }

    /**
     * @group auth
     * @group POST
     * @covers \App\Http\Controllers\AuthController::postLogin
     * @covers \App\Http\Controllers\AuthController::__construct
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
     * @group POST
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
     * @group POST
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
     * @group POST
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
     * @group perMe
     * @group GET
     * @covers \App\Http\Controllers\AuthController::getAuthenticatedUser
     */
    public function testGetUserNoToken()
    {
        $this->getJson($this->baseUrl . 'api/users/me')->assertStatus(Response::HTTP_UNAUTHORIZED);
    }

    /**
     * @group auth
     * @group perMe
     * @group GET
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
     * @group perMe
     * @group GET
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

    /**
     * @group auth
     * @group perMe
     * @group PUT
     * @covers \App\Http\Controllers\AuthController::updateAuthenticatedUser
     */
    public function testUpdateUser()
    {
        /** @var User $user */
        $user = $this->admin;
        $token = $this->login($user);

        $this->assertEquals($user->name, $this->adminName);
        $this->assertEquals($user->email, $this->adminEmail);

        $newName = 'new name';
        $newEmail = 'new@email.com';

        $this->putJson($this->baseUrl . 'api/users/me', [
            'id' => $user->id,
            'name' => $newName,
            'email' => $newEmail
        ], [
            'Authorization' => 'Bearer '.$token
        ])->assertStatus(Response::HTTP_NO_CONTENT);

        $user = $user->fresh();

        $this->assertEquals($user->name, $newName);
        $this->assertEquals($user->email, $newEmail);
    }

    /**
     * @group auth
     * @group perMe
     * @group PUT
     * @covers \App\Http\Controllers\AuthController::updateAuthenticatedUser
     */
    public function testUpdateUserInvalidEmail()
    {
        /** @var User $user */
        $user = $this->admin;
        $token = $this->login($user);

        $this->assertEquals($user->name, $this->adminName);
        $this->assertEquals($user->email, $this->adminEmail);

        $newName = 'new name';
        $newEmail = 'newinvalidemailcom';

        $response = $this->putJson($this->baseUrl . 'api/users/me', [
            'id' => $user->id,
            'name' => $newName,
            'email' => $newEmail
        ], [
            'Authorization' => 'Bearer '.$token
        ])->assertStatus(Response::HTTP_UNPROCESSABLE_ENTITY);

        $response->assertJson([
            'email' => [
                __('validation.email', ['attribute' => 'email'])
            ]
        ]);

        $user = $user->fresh();

        $this->assertEquals($user->name, $this->adminName);
        $this->assertEquals($user->email, $this->adminEmail);
    }

    /**
     * @group auth
     * @group perMe
     * @group PUT
     * @covers \App\Http\Controllers\AuthController::updateAuthenticatedUser
     */
    public function testUpdateUserDuplicateEmail()
    {
        /** @var User $user1 */
        $user = $this->createUser();

        $userEmail = $user->email;

        /** @var User $admin */
        $admin = $this->admin;
        $token = $this->login($admin);

        $this->assertEquals($admin->name, $this->adminName);
        $this->assertEquals($admin->email, $this->adminEmail);
        $this->assertNotEquals($admin->email, $userEmail);

        $newName = 'new name';
        $newEmail = $userEmail;

        $response = $this->putJson($this->baseUrl . 'api/users/me', [
            'id' => $admin->id,
            'name' => $newName,
            'email' => $newEmail
        ], [
            'Authorization' => 'Bearer '.$token
        ])->assertStatus(Response::HTTP_UNPROCESSABLE_ENTITY);

        $response->assertJson([
            'email' => [
                __('validation.unique', ['attribute' => 'email'])
            ]
        ]);

        $admin = $admin->fresh();

        $this->assertEquals($admin->name, $this->adminName);
        $this->assertEquals($admin->email, $this->adminEmail);
    }

    /**
     * @group auth
     * @group perMe
     * @group PUT
     * @covers \App\Http\Controllers\AuthController::updateAuthenticatedUser
     */
    public function testUpdateUserNoEmail()
    {
        /** @var User $user */
        $user = $this->admin;
        $token = $this->login($user);

        $this->assertEquals($user->name, $this->adminName);
        $this->assertEquals($user->email, $this->adminEmail);

        $newName = 'new name';

        $response = $this->putJson($this->baseUrl . 'api/users/me', [
            'id' => $user->id,
            'name' => $newName
        ], [
            'Authorization' => 'Bearer '.$token
        ])->assertStatus(Response::HTTP_UNPROCESSABLE_ENTITY);

        $response->assertJson([
            'email' => [
                __('validation.required', ['attribute' => 'email'])
            ]
        ]);

        $user = $user->fresh();

        $this->assertEquals($user->name, $this->adminName);
        $this->assertEquals($user->email, $this->adminEmail);
    }

    /**
     * @group auth
     * @group perMe
     * @group PUT
     * @covers \App\Http\Controllers\AuthController::updateAuthenticatedUser
     */
    public function testUpdateUserNoName()
    {
        /** @var User $user */
        $user = $this->admin;
        $token = $this->login($user);

        $this->assertEquals($user->name, $this->adminName);
        $this->assertEquals($user->email, $this->adminEmail);

        $newEmail = 'new@email.com';

        $response = $this->putJson($this->baseUrl . 'api/users/me', [
            'id' => $user->id,
            'email' => $newEmail
        ], [
            'Authorization' => 'Bearer '.$token
        ])->assertStatus(Response::HTTP_UNPROCESSABLE_ENTITY);

        $response->assertJson([
            'name' => [
                __('validation.required', ['attribute' => 'name'])
            ]
        ]);

        $user = $user->fresh();

        $this->assertEquals($user->name, $this->adminName);
        $this->assertEquals($user->email, $this->adminEmail);
    }

    /**
     * @group auth
     * @group perMe
     * @group PUT
     * @covers \App\Http\Controllers\AuthController::updateAuthenticatedUser
     * @covers \App\Http\Controllers\AuthController::changePassword
     */
    public function testChangePassword()
    {
        /** @var User $user */
        $user = $this->admin;
        $token = $this->login($user);
        $oldPassword = $this->adminPassword;
        $oldPasswordHash = $user->password;

        $newPassword = 'newpassword';

        $this->putJson($this->baseUrl . 'api/users/me', [
            'oldpassword'  => $oldPassword,
            'newpassword1' => $newPassword,
            'newpassword2' => $newPassword,
        ], [
            'Authorization' => 'Bearer '.$token
        ])->assertStatus(Response::HTTP_NO_CONTENT);

        $user = $user->fresh();

        $this->assertNotEquals($oldPasswordHash, $user->password);
    }

    /**
     * @group auth
     * @group perMe
     * @group PUT
     * @covers \App\Http\Controllers\AuthController::updateAuthenticatedUser
     * @covers \App\Http\Controllers\AuthController::changePassword
     */
    public function testChangePasswordInvalidOldPassword()
    {
        /** @var User $user */
        $user = $this->admin;
        $token = $this->login($user);
        $oldPasswordHash = $user->password;

        $newPassword = 'newpassword';

        $response = $this->putJson($this->baseUrl . 'api/users/me', [
            'oldpassword'  => 'invalid',
            'newpassword1' => $newPassword,
            'newpassword2' => $newPassword,
        ], [
            'Authorization' => 'Bearer '.$token
        ])->assertStatus(Response::HTTP_UNPROCESSABLE_ENTITY);

        $response->assertJson([
            'error' => __('passwords.invalid_old')
        ]);

        $user = $user->fresh();

        $this->assertEquals($oldPasswordHash, $user->password);
    }

    /**
     * @group auth
     * @group perMe
     * @group PUT
     * @covers \App\Http\Controllers\AuthController::updateAuthenticatedUser
     * @covers \App\Http\Controllers\AuthController::changePassword
     */
    public function testChangePasswordDistinctNewPasswords()
    {
        /** @var User $user */
        $user = $this->admin;
        $token = $this->login($user);
        $oldPassword = $this->adminPassword;
        $oldPasswordHash = $user->password;

        $newPassword = 'newpassword';

        $response = $this->putJson($this->baseUrl . 'api/users/me', [
            'oldpassword'  => $oldPassword,
            'newpassword1' => $newPassword,
            'newpassword2' => $newPassword . '1',
        ], [
            'Authorization' => 'Bearer '.$token
        ])->assertStatus(Response::HTTP_UNPROCESSABLE_ENTITY);

        $response->assertJson([
            'newpassword2' => [
                __('validation.same', ['attribute' => 'newpassword2', 'other' => 'newpassword1'])
            ]
        ]);
        $user = $user->fresh();

        $this->assertEquals($oldPasswordHash, $user->password);
    }
}
