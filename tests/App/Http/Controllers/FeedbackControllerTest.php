<?php

namespace Tests\App\Http\Controllers;

use App\Feedback;
use App\Project;
use App\User;
use Illuminate\Http\Response;
use Tests\BaseTestClass;

/**
 * @SuppressWarnings(PHPMD.TooManyPublicMethods)
 * @SuppressWarnings(PHPMD.StaticAccess)
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

        $response->assertJsonFragment([
            ["feedbacks" => []]
        ]);
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

        $response->assertJsonFragment([
            ["feedbacks" => []]
        ]);
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
        $feedback1->save();

        $response = $this->getJson($this->baseUrl . 'api/feedbacks', [
            'Authorization' => 'Bearer '.$this->userToken
        ])->assertStatus(Response::HTTP_OK);

        $response = json_decode($response->getContent(), true);

        $this->assertArrayHasKey('feedbacks', $response);
        $this->assertNotEmpty($response['feedbacks'][0]);
        $this->assertEquals($feedback1->id, $response['feedbacks'][0]['id']);
    }

    /**
     * @group feedback
     * @group GET
     * @covers \App\Http\Controllers\FeedbackController::getFeedbacks()
     */
    public function testGetFeedbacksWithFields()
    {
        /** @var Project $project1 */
        $project1 = factory(Project::class, 'project1')->create();
        /** @var Feedback $feedback1 */
        $feedback1 = factory(Feedback::class)->create();

        $project1->users()->attach($this->user->id);
        $feedback1->project_id = $project1->id;
        $feedback1->save();

        $response = $this->getJson($this->baseUrl . 'api/feedbacks?fields=id,title,description', [
            'Authorization' => 'Bearer '.$this->userToken
        ])->assertStatus(Response::HTTP_OK);

        $response = json_decode($response->getContent(), true);

        $this->assertArrayHasKey('feedbacks', $response);
        $this->assertNotEmpty($response['feedbacks'][0]);
        $this->assertArrayHasKey('id', $response['feedbacks'][0]);
        $this->assertEquals($feedback1->id, $response['feedbacks'][0]['id']);
        $this->assertArrayHasKey('title', $response['feedbacks'][0]);
        $this->assertArrayNotHasKey('url', $response['feedbacks'][0]);
    }

    /**
     * @group feedback
     * @group GET
     * @covers \App\Http\Controllers\FeedbackController::getFeedbacks()
     */
    public function testGetFeedbacksWithFieldsNotExisting()
    {
        /** @var Project $project1 */
        $project1 = factory(Project::class, 'project1')->create();
        /** @var Feedback $feedback1 */
        $feedback1 = factory(Feedback::class)->create();

        $project1->users()->attach($this->user->id);
        $feedback1->project_id = $project1->id;
        $feedback1->save();

        $response = $this->getJson($this->baseUrl . 'api/feedbacks?fields=id,asdf,ghjkl', [
            'Authorization' => 'Bearer '.$this->userToken
        ])->assertStatus(Response::HTTP_OK);

        $response = json_decode($response->getContent(), true);

        $this->assertArrayHasKey('feedbacks', $response);
        $this->assertNotEmpty($response['feedbacks'][0]);
        $this->assertArrayHasKey('id', $response['feedbacks'][0]);
        $this->assertEquals($feedback1->id, $response['feedbacks'][0]['id']);
        $this->assertArrayNotHasKey('title', $response['feedbacks'][0]);
    }

    /**
     * @group feedback
     * @group DELETE
     * @covers \App\Http\Controllers\FeedbackController::deleteFeedback()
     */
    public function testDeleteFeedback()
    {
        /** @var Project $project1 */
        $project1 = factory(Project::class, 'project1')->create();
        /** @var Feedback $feedback1 */
        $feedback1 = factory(Feedback::class)->create();

        $project1->users()->attach($this->user->id);
        $feedback1->project_id = $project1->id;
        $feedback1->save();

        $this->deleteJson($this->baseUrl . 'api/feedbacks/' . $feedback1->id, [], [
            'Authorization' => 'Bearer '.$this->userToken
        ])->assertStatus(Response::HTTP_NO_CONTENT);

        $feedbacks = Feedback::all();

        $this->assertTrue($feedbacks->isEmpty());
    }

    /**
     * @group feedback
     * @group GET
     * @covers \App\Http\Controllers\FeedbackController::getFeedback()
     */
    public function testGetFeedback()
    {
        /** @var Project $project1 */
        $project1 = factory(Project::class, 'project1')->create();
        /** @var Feedback $feedback1 */
        $feedback1 = factory(Feedback::class)->create();

        $project1->users()->attach($this->user->id);
        $feedback1->project_id = $project1->id;
        $feedback1->save();

        $response = $this->getJson($this->baseUrl . 'api/feedbacks/' . $feedback1->id, [
            'Authorization' => 'Bearer '.$this->userToken
        ])->assertStatus(Response::HTTP_OK);

        $response = json_decode($response->getContent(), true);

        $this->assertEquals($feedback1->id, $response['feedback']['id']);
    }

    /**
     * @group feedback
     * @group GET
     * @covers \App\Http\Controllers\FeedbackController::getFeedback()
     */
    public function testGetFeedbackNotExists()
    {
        /** @var Project $project1 */
        $project1 = factory(Project::class, 'project1')->create();
        /** @var Feedback $feedback1 */
        $feedback1 = factory(Feedback::class)->create();

        $project1->users()->attach($this->user->id);
        $feedback1->project_id = $project1->id;
        $feedback1->save();

        $this->getJson($this->baseUrl . 'api/feedbacks/' . 42, [
            'Authorization' => 'Bearer '.$this->userToken
        ])->assertStatus(Response::HTTP_NOT_FOUND);
    }

    /**
     * @group feedback
     * @group PUT
     * @covers \App\Http\Controllers\FeedbackController::updateFeedback()
     */
    public function testUpdateFeedback()
    {
        /** @var Project $project1 */
        $project1 = factory(Project::class, 'project1')->create();
        /** @var Feedback $feedback1 */
        $feedback1 = factory(Feedback::class)->create();

        $project1->users()->attach($this->user->id);
        $feedback1->project_id = $project1->id;
        $feedback1->save();

        $newAttributes = [
            'title' => 'new title',
            'description' => 'new description'
        ];

        $this->putJson($this->baseUrl . 'api/feedbacks/' . $feedback1->id, $newAttributes, [
            'Authorization' => 'Bearer '.$this->userToken
        ])->assertStatus(Response::HTTP_NO_CONTENT);

        $feedback = Feedback::query()->find($feedback1->id);

        $this->assertEquals($feedback1->title, $feedback->title);
        $this->assertNotEquals($feedback1->description, $feedback->description);
        $this->assertEquals($newAttributes['description'], $feedback->description);
    }

    /**
     * @group feedback
     * @group POST
     * @covers \App\Http\Controllers\FeedbackController::createFeedback()
     */
    public function testCreateFeedback()
    {
        /** @var Project $project1 */
        $project1 = factory(Project::class, 'project1')->create();

        $data = [
            'data' => [
                    'title' => 'feedback title',
                    'description' => 'feedback description',
                    'url' => 'feedback url',
                    'reporter_name' => 'feedback reporter name',
                    'reporter_email' => 'feedback reporter email',
                    'screenshot' => 'feedback screenshot in base64',
                    'project_id' => $project1->id,
                    'browser' => [
                        'browser' => 'Chrome',
                        'platform' => 'GNU/Linux',
                        'user_agent' => 'Chrome-on-linux',
                        'screen_resolution' => '1024x768',
                        'cookie_enabled' => true,
                    ]

            ]
        ];

        $this->postJson($this->baseUrl . 'createFeedback', $data, [
            'Authorization' => 'Bearer '.$this->userToken
        ])->assertStatus(Response::HTTP_NO_CONTENT);

        $feedback = Feedback::first();

        $this->assertEquals($data['data']['title'], $feedback->title);
        $this->assertEquals($data['data']['description'], $feedback->description);
        $this->assertEquals($data['data']['url'], $feedback->url);
        $this->assertEquals($data['data']['reporter_name'], $feedback->reporter_name);
        $this->assertEquals($data['data']['reporter_email'], $feedback->reporter_email);
    }
}
