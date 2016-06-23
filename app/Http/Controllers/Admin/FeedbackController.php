<?php

namespace App\Http\Controllers\Admin;

use App\Feedback;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests;
use Illuminate\Support\Facades\Auth;

class FeedbackController extends Controller
{

    public function getFeedbacks()
    {
        $projects = Auth::user()->projects()->with('feedbacks')->get();

        return view('feedbacks', ['projects' => $projects]);
    }

    public function deleteFeedback($id)
    {
        Feedback::destroy($id);

        return redirect('admin/feedbacks');
    }

    /**
     * @param Request $request
     * @param $id
     * @return \Symfony\Component\HttpFoundation\Response
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

        return $this->response->created();
    }
}
