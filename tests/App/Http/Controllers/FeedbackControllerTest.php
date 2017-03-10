<?php

namespace Tests\App\Http\Controllers;

use App\Feedback;
use App\Project;
use App\User;
use Illuminate\Http\Response;
use Tests\BaseTestClass;

/**
 * @SuppressWarnings(PHPMD.TooManyPublicMethods)
 */
class FeedbackControllerTest extends BaseTestClass
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
     * @group feedback
     * @group GET
     * @covers \App\Http\Controllers\FeedbackController::getFeedbacks()
     */
    public function testGetFeedbacksUserHasNoProjects()
    {
        factory(Project::class, 'project1')->create();
        factory(Feedback::class)->create();

        $response = $this->getJson($this->baseUrl . 'api/feedbacks', [
            'Authorization' => 'Bearer '.$this->userToken
        ])->assertStatus(Response::HTTP_OK);

        $response->assertJsonFragment([[
            "data" => ["feedbacks" => []],
            "errors" => false
        ]]);
    }

    /**
     * @group feedback
     * @group GET
     * @covers \App\Http\Controllers\FeedbackController::getFeedbacks()
     */
    public function testGetFeedbacksUserHasProjectButNoFeedback()
    {
        /** @var Project $project1 */
        $project1 = factory(Project::class, 'project1')->create();
        $feedback1 = factory(Feedback::class)->create();
        $feedback1->project_id = 35;
        $feedback1->save();

        $project1->users()->attach($this->user->id);

        $response = $this->getJson($this->baseUrl . 'api/feedbacks', [
            'Authorization' => 'Bearer '.$this->userToken
        ])->assertStatus(Response::HTTP_OK);

        $response->assertJsonFragment([[
            "data" => ["feedbacks" => []],
            "errors" => false
        ]]);
    }


    /**
     * @group feedback
     * @group GET
     * @covers \App\Http\Controllers\FeedbackController::getFeedbacks()
     */
    public function testGetFeedbacks()
    {
        /** @var Project $project1 */
        $project1 = factory(Project::class, 'project1')->create();
        /** @var Feedback $feedback1 */
        $feedback1 = factory(Feedback::class)->create();

        $project1->users()->attach($this->user->id);
        $feedback1->project_id = $project1->id;
        $feedback1->screenshot = 'dgfdgfdsgfd';
        $feedback1->save();

        $response = $this->getJson($this->baseUrl . 'api/feedbacks', [
            'Authorization' => 'Bearer '.$this->userToken
        ])->assertStatus(Response::HTTP_OK);

        $response = json_decode($response->getContent(), true);

        $this->assertArrayHasKey('data', $response);
        $this->assertArrayHasKey('feedbacks', $response['data']);
        $this->assertNotEmpty($response['data']['feedbacks'][0]);
        $this->assertEquals($feedback1->id, $response['data']['feedbacks'][0]['id']);
    }
}
