<?php

namespace App\Http\Controllers\Admin;

use App\Feedback;
use App\Notifications\NewFeedback;
use App\Project;
use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Input;
use Symfony\Component\HttpFoundation\Response;

class FeedbackController extends Controller
{

    /**
     * @return Response
     */
    public function getFeedbacks()
    {
        $params = Input::all();

        $fields = ['*'];

        if (array_key_exists('fields', $params) && $params['fields']) {
            $fields = explode(',', $params['fields']);
        }

        $allFields = array_map(function ($item) {
            return 'feedbacks.'.$item;
        }, $fields);

        $allFields[] = 'projects.name as project_name';

        /**
         * @var $user \App\User
         */
        $user = Auth::user();

        $feedbacks = $user->feedbacks($allFields);

        return response()->success(compact('feedbacks'));
    }

    /**
     * @param int $id
     * @return Response
     */
    public function deleteFeedback($id)
    {
        Feedback::destroy($id);

        return response('', Response::HTTP_NO_CONTENT);
    }

    /**
     * @param int $id
     * @return Response
     */
    public function getFeedback($id)
    {
        $feedback = Feedback::find($id);

        return response()->success(compact('feedback'));
    }

    /**
     * @param Request $request
     * @param int $id
     * @return Response
     */
    public function updateFeedback(Request $request, $id)
    {
        $feedback = Feedback::find($id);

        $request = $request->all();
        $description = $request['data']['feedback']['description'];

        $feedback->update(['description' => $description]);

        return response('', Response::HTTP_NO_CONTENT);
    }

    /**
     * @param Request $request
     * @return Response
     */
    public function createFeedback(Request $request)
    {
        $data = $request->input('data')['attributes'];

        $browser = $data['browser'];

        Feedback::create([
            'title' => $data['title'],
            'description' => $data['description'],
            'url' => $data['url'],
            'reporter_name' => $data['name'],
            'reporter_email' => $data['email'],
            'screenshot' => $data['screenshot'],

            'browser' => $browser['appName'],
            'platform' => $browser['platform'],
            'user_agent' => $browser['userAgent'],
            'screen_resolution' => $browser['screen'],
            'cookie_enabled' => $browser['cookieEnabled'],
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
