<?php

namespace Tests\App\Http\Controllers;

use App\User;
use Illuminate\Http\Response;
use Tests\BaseTestClass;

/**
 * @SuppressWarnings(PHPMD.TooManyPublicMethods)
 */
class AdminControllerTest extends BaseTestClass
{
    /** @var User $admin */
    private $admin;

    /** @var User $user */
    private $user;
    private $adminToken;

    public function setUp()
    {
        parent::setUp();

        $this->admin = $this->createAdmin();
        $this->user = $this->createUser();
        $this->adminToken = $this->login($this->admin);
    }

    public function testGetAllUser()
    {
        $response = $this->getJson($this->baseUrl . 'api/users', [
            'Authorization' => 'Bearer '.$this->adminToken
        ])->assertStatus(Response::HTTP_OK);

        $response->assertJson([
            'data' => [
                'users' => [
                    [
                        'id' => $this->admin->id,
                        'name' => $this->admin->name,
                        'email' => $this->admin->email,
                        'is_superadmin' => $this->admin->is_superadmin,
                        'created_at' => $this->admin->created_at,
                        'updated_at' => $this->admin->updated_at
                    ],
                    [
                        'id' => $this->user->id,
                        'name' => $this->user->name,
                        'email' => $this->user->email,
                        'is_superadmin' => $this->user->is_superadmin,
                        'created_at' => $this->user->created_at,
                        'updated_at' => $this->user->updated_at
                    ]
                ]
            ]
        ]);
    }

    public function testGetAllUserNotAdmin()
    {
        $userToken = $this->login($this->user);

        $this->getJson($this->baseUrl . 'api/users', [
            'Authorization' => 'Bearer '.$userToken
        ])->assertStatus(Response::HTTP_UNAUTHORIZED);
    }

    public function testGetUser()
    {
        $response = $this->getJson($this->baseUrl . 'api/users/2', [
            'Authorization' => 'Bearer '.$this->adminToken
        ])->assertStatus(Response::HTTP_OK);

        $response->assertJson([
            'data' => [
                'user' => [
                        'id' => $this->user->id,
                        'name' => $this->user->name,
                        'email' => $this->user->email,
                        'is_superadmin' => $this->user->is_superadmin,
                        'created_at' => $this->user->created_at,
                        'updated_at' => $this->user->updated_at
                ]
            ]
        ]);
    }

    public function testCreateUser()
    {
        $newUserAttributes = [
            'name' => 'new user',
            'email' => 'new@user.com',
            'password' => 'newuser'
        ];

        $this->postJson($this->baseUrl . 'api/users', $newUserAttributes, [
            'Authorization' => 'Bearer '.$this->adminToken
        ])->assertStatus(Response::HTTP_CREATED);

        $user = User::query()->where('email', $newUserAttributes['email'])->first();

        $this->assertNotNull($user);
        $this->assertInstanceOf(User::class, $user);
    }

    public function testCreateUserAdmin()
    {
        $newUserAttributes = [
            'name' => 'new user',
            'email' => 'new@user.com',
            'password' => 'newuser',
            'is_superadmin' => 1
        ];

        $this->postJson($this->baseUrl . 'api/users', $newUserAttributes, [
            'Authorization' => 'Bearer '.$this->adminToken
        ])->assertStatus(Response::HTTP_CREATED);

        $user = User::query()->where('email', $newUserAttributes['email'])->first();

        $this->assertNotNull($user);
        $this->assertInstanceOf(User::class, $user);
        $this->assertEquals(1, $user->is_superadmin);
    }

    public function testModifyUser()
    {
        $userNewAttributes = [
            'name' => 'new username',
        ];

        $this->putJson($this->baseUrl . 'api/users/' . $this->user->id, $userNewAttributes, [
            'Authorization' => 'Bearer '.$this->adminToken
        ])->assertStatus(Response::HTTP_NO_CONTENT);

        $user = $this->user->fresh();

        $this->assertNotNull($user);
        $this->assertInstanceOf(User::class, $user);
        $this->assertEquals($userNewAttributes['name'], $user->name);
        $this->assertNotEquals($this->user->name, $user->name);
        $this->assertEquals($this->user->email, $user->email);
    }

    public function testDeleteUser()
    {
        $this->deleteJson($this->baseUrl . 'api/users/' . $this->user->id, [], [
            'Authorization' => 'Bearer '.$this->adminToken
        ])->assertStatus(Response::HTTP_NO_CONTENT);

        $user = User::query()->find($this->user->id);

        $this->assertNull($user);
    }
}
