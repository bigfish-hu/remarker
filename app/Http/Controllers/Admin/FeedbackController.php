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
}
