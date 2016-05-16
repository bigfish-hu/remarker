<?php
namespace App\Repositories;

use App\Feedback;
use App\IssueTracker;
use App\Project;
use App\Repositories\Contracts\IssueTrackerApiInterface;
use GuzzleHttp\Psr7\Request;


class RedmineApiRepository extends IssueTrackerApiBaseRepository implements IssueTrackerApiInterface
{
    protected $type = 'Redmine';


    public function __construct(array $config)
    {
        $this->config = $config;
    }

    public function getUsers()
    {


    }

    public function getProjects()
    {
        return $this->config;
    }

    public function notify(Project $project, Feedback $feedback)
    {
        if (isset($issueTrackerConfig["projects"][$project->getCode()]) === false) {
            throw new ProjectNotFound();
        }
        $projectConfig = $issueTrackerConfig["projects"][$project->getCode()];

        $token = "";
        $this->uploadImage($feedback, $issueTrackerConfig, $token);
        $this->createIssue($feedback, $issueTrackerConfig, $projectConfig, $token);
    }


    protected function uploadImage(
        Feedback $feedback,
        array $issueTrackerConfig,
        &$token
    ) {
        $headers = [
            "Content-Type" => "application/octet-stream"
        ];
        $body = $feedback->getScreenshot();

        $response = $this->sendRequest(
            new Request("POST", $issueTrackerConfig["url"] . "/uploads.json", $headers, $body),
            $issueTrackerConfig
        );

        if ($response->getStatusCode() !== 201) {
            throw new RedmineIssueCantBeCreated("");
        }

        $body = json_decode($response->getBody()->getContents(), true);
        if (empty($body["upload"]["token"])) {
            throw new RedmineIssueCantBeCreated("");
        }

        $token = $body["upload"]["token"];
    }


    public function createIssue(Feedback $feedback) {

        $description = $this->createIssueDescription($feedback);

        $headers = [
            "Content-Type" => "application/json"
        ];
        $body = [
            "issue" => [
                "project_id" => $projectConfig["id"],
                "priority_id" => 1,
                "status_id" => 2,
                "assigned_to_id" => $projectConfig["assignee"],
                "watcher_user_ids" => $projectConfig["watchers"],
                "subject" => $feedback->getTitle(),
                "description" => $description,
                "uploads" => [
                    [
                        "token" => $token,
                        "filename" => "screenshot.jpg",
                        "content_type" => "image/jpg"
                    ]
                ]
            ]
        ];

        $response = $this->sendRequest(
            new Request("POST", $issueTrackerConfig["url"] . "/issues.json", $headers, json_encode($body)),
            $issueTrackerConfig
        );

        if ($response->getStatusCode() !== 201) {
            throw new RedmineIssueCantBeCreated("");
        }
    }


    protected function sendRequest(Request $request)
    {
        return $this->client->request(
            $request,
            [
                "auth" => $this->config['username'], $this->config["password"],
                "verify" => false
            ]
        );
    }
}
