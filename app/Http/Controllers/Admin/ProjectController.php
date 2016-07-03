<?php

namespace App\Http\Controllers\Admin;

use App\Project;
use App\Services\IssueTrackerApiConnectionService;
use GuzzleHttp\Exception\ClientException;
use App\Http\Controllers\Controller;
use App\Http\Requests;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Input;
use Symfony\Component\HttpFoundation\Response;

class ProjectController extends Controller
{

    public function getProjects()
    {
        $params = Input::all();

        if (array_key_exists('fields', $params) && $params['fields']) {
            $fields = explode(',', $params['fields']);
            $projects = Project::all($fields);
        } else {
            $projects = Project::all();
        }

        return response()->success(compact('projects'));
    }

//    /**
//     * Create a new project
//     *
//     * @param Request $request
//     * @return \Illuminate\Http\Response
//     */
//    public function createProject(Request $request)
//    {
//        /** @var AdminController $this */
//        $this->validate($request, [
//            'name' => 'required|string|max:50',
//        ]);
//
//        /** @var array $input */
//        $input = $request->all();
//
//        if (isset($input['is_automatic_notification'])) {
//            $input['is_automatic_notification'] = true;
//        }
//
//        Project::create($input);
//
//        return redirect('admin/projects');
//    }
//
//    /**
//     * Update an existing project.
//     *
//     * @param Request $request
//     * @param $id
//     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
//     */
//    public function updateProject(Request $request, $id)
//    {
//        /** @var AdminController $this */
//        $this->validate($request, [
//            'name' => 'string|max:50',
//            'issue_tracker_id' => 'numeric'
//        ]);
//
//        /** @var array $input */
//        $input = $request->all();
//
//        if (isset($input['is_automatic_notification'])) {
//            $input['is_automatic_notification'] = true;
//        }
//
//        /** @var Project $project */
//        $project = Project::query()->find((int)$id);
//
//        $input = $this->unsetEmptyInputFields($input);
//
//        try {
//            if (isset($input['users'])) {
//                foreach ($input['users'] as $user) {
//                    $project->users()->attach($user);
//                }
//            }
//        } catch (QueryException $e) {
//            redirect('admin/projects')->withErrors(trans('admin/projects.messages.user_already_assigned'));
//        }
//
//        $project->update($input);
//
//        return redirect('admin/projects');
//    }
//
//    /**
//     * Utterly destroy, delete, demolish a user by id.
//     *
//     * @param array|int $id
//     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
//     */
//    public function deleteProject($id)
//    {
//        Project::destroy($id);
//
//        return redirect('admin/projects');
//    }
//
//    /**
//     * @param $id
//     * @return mixed
//     */
//    public function getProjectUsers($id)
//    {
//        return Project::query()->find($id)->users()->get()->toArray();
//    }
//
//    public function removeUserFromProject($project_id, $user_id)
//    {
//        $project = Project::query()->find($project_id);
//
//        $project->users()->detach($user_id);
//
//        return "ok";
//    }

    public function getProjectsFromIssueTrackers(IssueTrackerApiConnectionService $apiService)
    {
        try {
            $allProjects = $apiService->syncProjects();

            DB::transaction(function () use ($allProjects) {
                foreach ($allProjects as $tracker => $projects) {
                    foreach ($projects as $project) {
                        Project::query()->updateOrCreate([
                            'ext_id' => $project['id'],
                            'issue_tracker' => $tracker
                        ], [
                            'name' => $project['name'],
                            'ext_id' => $project['id'],
                            'issue_tracker' => $tracker,
                            'is_automatic_notification' => false
                        ]);
                    }
                }
            });
        } catch (ClientException $e) {
            return response($e->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
        return response('', Response::HTTP_NO_CONTENT);
    }
}
