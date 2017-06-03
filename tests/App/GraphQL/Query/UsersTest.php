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

    public function testGetAllUsersWithProjects()
    {
        ini_set('xdebug.var_display_max_depth', 5);
        ini_set('xdebug.var_display_max_children', 256);
        ini_set('xdebug.var_display_max_data', 1024);

        $project = $this->createProject('project1');
        $this->user1->projects()->save($project, ['is_admin' => true]);

        $query = "{
                      users {
                        edges {
                          id
                          name
                          projects {
                            edges {
                              id
                              name
                            
                            }
                          }
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

        $this->assertNotEmpty($response);
        $this->assertCount(2, $response);
        $this->assertArrayHasKey('id', $response[0]);
        $this->assertArrayHasKey('name', $response[0]);

        $projects = $this->assertArrayHasProjects($response[0]);
        $projects = $this->assertArrayHasEdges($projects);

        $this->assertArrayHasKey('projects', $response[1]);

        $this->assertArrayHasKey('edges', $response[1]['projects']);
        $this->assertEmpty($response[1]['projects']['edges']);

        $this->assertNotEmpty($projects);
        $this->assertCount(1, $projects);
        $this->assertNotEmpty($projects[0]);

        $this->assertEquals([
            'id' => 1,
            'name' =>  'project1'
        ], $projects[0]);
    }
}
