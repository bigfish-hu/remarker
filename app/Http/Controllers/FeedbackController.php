<?php

namespace App\Http\Controllers;

use App\Feedback;
use App\Notifications\NewFeedback;
use App\Project;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Schema;
use Illuminate\Http\Response;

/**
 * @SuppressWarnings(PHPMD.StaticAccess)
 */
class FeedbackController extends Controller
{
    public function getFeedbacks(Request $request) : Response
    {
        $fields = $this->extractExistingFieldsFromRequest($request, Feedback::TABLE);

        $fields[] = 'projects.name as project_name';

        /** @var $user \App\User */
        $user = Auth::user();
        $feedbacks = $user->feedbacks($fields);

        return response(compact('feedbacks'));
    }

    public function deleteFeedback(int $feedbackId) : Response
    {
        Feedback::destroy($feedbackId);

        return response('', Response::HTTP_NO_CONTENT);
    }

    public function getFeedback(int $feedbackId) : Response
    {
        $feedback = Feedback::find($feedbackId);

        if (empty($feedback)) {
            return response('', Response::HTTP_NOT_FOUND);
        }

        return response(compact('feedback'), Response::HTTP_OK);
    }

    public function updateFeedback(Request $request, int $feedbackId) : Response
    {
        $feedback = Feedback::find($feedbackId);

        $description = $request->get('description');

        $feedback->update(['description' => $description]);

        return response('', Response::HTTP_NO_CONTENT);
    }

    /**
     * @param Request $request
     * @return Response
     */
    public function createFeedback(Request $request)
    {
        $data = $request->input('data');

        $browser = $data['browser'];

        Feedback::create([
            'title' => $data['title'],
            'description' => $data['description'],
            'url' => $data['url'],
            'reporter_name' => $data['reporter_name'],
            'reporter_email' => $data['reporter_email'],
            'screenshot' => $data['screenshot'],

            'browser' => $browser['browser'],
            'platform' => $browser['platform'],
            'user_agent' => $browser['user_agent'],
            'screen_resolution' => $browser['screen_resolution'],
            'cookie_enabled' => $browser['cookie_enabled'],
            'project_id' => $data['project_id'],
            'ext_user_id' => null,
        ]);

        $project = Project::query()->find($data['project_id'])->first();
        $users = $project->users()->get();

        /**
         * @var User $user
         */
        foreach ($users as $user) {
            $user->notify(new NewFeedback());
        }

        return response('', Response::HTTP_CREATED);
    }
}
