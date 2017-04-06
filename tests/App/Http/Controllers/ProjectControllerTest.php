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

    /**
     * @group project
     * @group GET
     * @covers \App\Http\Controllers\ProjectController::getProjects()
     */
    public function testGetProjectsFields()
    {
        $project = factory(Project::class, 'project1')->create();

        $response = $this->getJson($this->baseUrl . 'api/projects?fields=name,ext_id', [
            'Authorization' => 'Bearer '.$this->userToken
        ])->assertStatus(Response::HTTP_OK);

        $response->assertJsonFragment([
            ["projects" => [[
                'name' => $project->name,
                'ext_id' => $project->ext_id,
            ]]]
        ]);
    }

    /**
     * @group project
     * @group GET
     * @covers \App\Http\Controllers\ProjectController::getProjects()
     */
    public function testGetProjectsNotExistingFields()
    {
        $project = factory(Project::class, 'project1')->create();

        $response = $this->getJson($this->baseUrl . 'api/projects?fields=name,something', [
            'Authorization' => 'Bearer '.$this->userToken
        ])->assertStatus(Response::HTTP_OK);

        $response->assertJsonFragment([
            ["projects" => [[
                'name' => $project->name,
            ]]]
        ]);
    }

    /**
     * @group project
     * @group GET
     * @covers \App\Http\Controllers\ProjectController::getProjects()
     */
    public function testGetProjectsOnlyNotExistingFields()
    {
        $project = factory(Project::class, 'project1')->create();

        $response = $this->getJson($this->baseUrl . 'api/projects?fields=dfhfgjhgj,something', [
            'Authorization' => 'Bearer '.$this->userToken
        ])->assertStatus(Response::HTTP_OK);

        $response->assertJsonFragment([
            ["projects" => [$project->toArray()]]
        ]);
    }
}
