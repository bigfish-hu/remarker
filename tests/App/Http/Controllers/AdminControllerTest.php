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
}
