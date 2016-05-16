<?php

namespace App\Http\Controllers\Admin;

use App\IssueTracker;
use App\Project;
use App\Services\IssueTrackerApiConnectionService;
use App\User;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests;
use Illuminate\Support\Facades\Session;

class ProjectController extends Controller
{
    private $apiService;

    public function __construct(IssueTrackerApiConnectionService $apiService)
    {
        $this->apiService = $apiService;
    }

    public function getProjects()
    {
        $projects = Project::with([
            'users'
        ])->get();

        $users = User::all();

        return view('projects', ['projects' => $projects, 'users' => $users]);
    }

    /**
     * Create a new project
     *
     * @param Request $request
     * @return \Illuminate\Http\Response
     */
    public function createProject(Request $request)
    {
        /** @var AdminController $this */
        $this->validate($request, [
            'name' => 'required|string|max:50',
        ]);

        /** @var array $input */
        $input = $request->all();

        if (isset($input['is_automatic_notification'])) {
            $input['is_automatic_notification'] = true;
        }

        Project::create($input);

        return redirect('admin/projects');
    }

    /**
     * Update an existing project.
     *
     * @param Request $request
     * @param $id
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function updateProject(Request $request, $id)
    {
        /** @var AdminController $this */
        $this->validate($request, [
            'name' => 'string|max:50',
            'issue_tracker_id' => 'numeric'
        ]);

        /** @var array $input */
        $input = $request->all();

        if (isset($input['is_automatic_notification'])) {
            $input['is_automatic_notification'] = true;
        }

        /** @var Project $user */
        $project = Project::query()->find((int)$id);

        $input = $this->unsetEmptyInputFields($input);

        try {
            if (isset($input['users'])){
                foreach ($input['users'] as $user) {
                    $project->users()->attach($user);
                }
            }
        } catch (QueryException $e) {
            redirect('admin/projects')->withErrors(trans('admin/projects.messages.user_already_assigned'));
        }


        $project->update($input);

        return redirect('admin/projects');
    }

    /**
     * Utterly destroy, delete, demolish a user by id.
     *
     * @param array|int $id
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function deleteProject($id)
    {
        Project::destroy($id);

        return redirect('admin/projects');
    }

    /**
     * @param $id
     * @return mixed
     */
    public function getProjectUsers($id)
    {
        return Project::query()->find($id)->users()->get()->toArray();
    }

    public function removeUserFromProject($project_id, $user_id)
    {
        $project = Project::query()->find($project_id);

        $project->users()->detach($user_id);

        return "ok";
    }

    public function getProjectsFromIssueTrackers()
    {
        $this->apiService->syncProjects();
        return redirect("/admin/projects");
    }

}
