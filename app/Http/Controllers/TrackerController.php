<?php

namespace App\Http\Controllers;

use App\IssueTracker;
use Illuminate\Http\Request;

class TrackerController extends Controller
{
    public function getTrackers()
    {
        $trackers = \App\IssueTracker::All();

        return view('trackers', ['trackers' => $trackers]);
    }

    /**
     * Create a new tracker
     *
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function createTracker(Request $request)
    {
        /** @var AdminController $this */
        $this->validate($request, [
            'name' => 'required|unique:issue_trackers|max:50',
            'user_name' => 'required|string|max:50',
            'password' => 'required|string|min:6'
        ]);

        /** @var array $input */
        $input = $request->all();

        IssueTracker::create($input);

        return redirect('admin/trackers');
    }

    /**
     * Update an existing tracker.
     *
     * @param Request $request
     * @param $id
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function updateTracker(Request $request, $id)
    {
        /** @var AdminController $this */
        $this->validate($request, [
            'name' => 'unique:issue_trackers|max:50',
            'user_name' => 'string|max:50',
            'password' => 'string|min:6'
        ]);

        /** @var array $input */
        $input = $request->all();

        /** @var IssueTracker $user */
        $tracker = IssueTracker::query()->find((int)$id);

        $input = $this->unsetEmptyInputFields($input);

        $tracker->update($input);

        return redirect('admin/trackers');
    }

    /**
     * Utterly destroy, delete, exterminate a user by id.
     *
     * @param array|int $id
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function deleteTracker($id)
    {
        IssueTracker::destroy($id);

        return redirect('admin/trackers');
    }
}
