<?php

namespace App\Http\Controllers;

use App\Project;
use App\Services\IssueTrackerApiConnectionService;
use GuzzleHttp\Exception\ClientException;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Input;
use Illuminate\Http\Response;

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
