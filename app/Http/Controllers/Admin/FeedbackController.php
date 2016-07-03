<?php

namespace App\Http\Controllers\Admin;

use App\Feedback;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Input;
use Symfony\Component\HttpFoundation\Response;

class FeedbackController extends Controller
{

    public function getFeedbacks()
    {
        $params = Input::all();

        $fields = ['*'];

        if (array_key_exists('fields', $params) && $params['fields']) {
            $fields = explode(',', $params['fields']);
        }

        Auth::user()->load(['projects.feedbacks' => function ($q) use (&$feedbacks, $fields) {
            $feedbacks = $q->get($fields);
        }]);
//        ['id', 'title', 'project_id', 'created_at']
        return response()->success(compact('feedbacks'));
    }

    public function deleteFeedback($id)
    {
        Feedback::destroy($id);

        return response('', Response::HTTP_NO_CONTENT);
    }

    public function getFeedback($id)
    {
        $feedback = Feedback::find($id);

        return response()->success(compact('feedback'));
    }

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

        return response('', Response::HTTP_CREATED);
    }
}
