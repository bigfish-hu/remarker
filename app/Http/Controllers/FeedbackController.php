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
    private $tableName = 'feedbacks';

    public function getFeedbacks() : Response
    {
        $params = Input::all();

        $fields = ['*'];

        if (array_key_exists('fields', $params) && $params['fields']) {
            $fields = explode(',', $params['fields']);
            $tableFields = Schema::getColumnListing($this->tableName);

            $fields = array_map(function ($item) use ($tableFields) {
                if (in_array($item, $tableFields)) {
                    return $this->tableName.'.'.$item;
                }
            }, $fields);
        }

        $fields[] = 'projects.name as project_name';

        /** @var $user \App\User */
        $user = Auth::user();
        $feedbacks = $user->feedbacks($fields);

        return response(json_encode(compact('feedbacks')));
    }

    /**
     * @param $feedbackId
     * @return Response
     * @internal param int $id
     */
    public function deleteFeedback($feedbackId)
    {
        Feedback::destroy($feedbackId);

        return response('', Response::HTTP_NO_CONTENT);
    }

    /**
     * @param $feedbackId
     * @return Response
     * @internal param int $id
     */
    public function getFeedback($feedbackId)
    {
        $feedback = Feedback::find($feedbackId);

        return response()->success(compact('feedback'));
    }

    /**
     * @param Request $request
     * @param $feedbackId
     * @return Response
     * @internal param int $id
     */
    public function updateFeedback(Request $request, $feedbackId)
    {
        $feedback = Feedback::find($feedbackId);

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
