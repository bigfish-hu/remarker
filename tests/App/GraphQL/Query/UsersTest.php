<?php

namespace Tests\App\GraphQL\Query;

use App\User;
use Illuminate\Http\Response;
use Tests\BaseTestClass;

/**
 * @SuppressWarnings(PHPMD.TooManyPublicMethods)
 * @SuppressWarnings(PHPMD.StaticAccess)
 */
class UsersTest extends BaseTestClass
{
    /** @var User $user1 */
    private $user1;
    /** @var User $user1 */
    private $user2;
    private $userToken;

    public function setUp()
    {
        parent::setUp();

        $this->user1 = $this->createAdmin();
        $this->user2 = $this->createUser();

        $this->userToken = $this->login($this->user1);
    }

    public function testGetAllUsers()
    {
        $query = "{
                      users {
                        edges {
                          id
                          name
                        }
                      }
                    }
                    ";

        $response = $this->postJson($this->baseUrl . 'graphql', [
            'query' => $query
        ], [
            'Authorization' => 'Bearer '.$this->userToken
        ])->assertStatus(Response::HTTP_OK);

        $response = json_decode($response->getContent(), true);

        $response = $this->assertArrayHasData($response);
        $response = $this->assertArrayHasUsers($response);
        $response = $this->assertArrayHasEdges($response);

        $this->assertCount(2, $response);
        $this->assertNotEmpty($response[0]);
        $this->assertNotEmpty($response[1]);

        $this->assertEquals([
            'id' => $this->user1->id,
            'name' => $this->user1->name
        ], $response[0]);

        $this->assertEquals([
            'id' => $this->user2->id,
            'name' => $this->user2->name
        ], $response[1]);
    }
}
