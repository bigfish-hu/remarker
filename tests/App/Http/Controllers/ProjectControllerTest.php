<?php

namespace Tests\App\Http\Controllers;

use App\Project;
use Tests\BaseTestClass;
use Illuminate\Http\Response;

/**
 * @SuppressWarnings(PHPMD.TooManyPublicMethods)
 * @SuppressWarnings(PHPMD.StaticAccess)
 */
class ProjectControllerTest extends BaseTestClass
{
    /** @var User $user */
    private $user;
    private $userToken;

    public function setUp()
    {
        parent::setUp();

        $this->user = $this->createUser();
        $this->userToken = $this->login($this->user);
    }

    /**
     * @group project
     * @group GET
     * @covers \App\Http\Controllers\ProjectController::getProjects()
     */
    public function testGetProjects()
    {
        $project = factory(Project::class, 'project1')->create();

        $response = $this->getJson($this->baseUrl . 'api/projects', [
            'Authorization' => 'Bearer '.$this->userToken
        ])->assertStatus(Response::HTTP_OK);

        $response->assertJsonFragment([
            ["projects" => [$project->toArray()]]
        ]);
    }
}
