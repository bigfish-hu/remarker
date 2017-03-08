<?php
namespace App\Repositories;

use App\Feedback;
use App\Contracts\IssueTrackerApiInterface;
use App\Contracts\ApiClientInterface;
use GuzzleHttp\Psr7\Request;

class RedmineApiRepository extends IssueTrackerApiBaseRepository implements IssueTrackerApiInterface
{
    protected $type = 'Redmine';
    protected $client;
    protected $config;

    public function __construct(array $config, ApiClientInterface $client)
    {
        $this->client = $client;
        $this->config = $config;
    }

    public function getUsers()
    {
    }

    /**
     * @return array
     */
    public function getProjects()
    {
        $response = $this->sendRequest(
            new Request("GET", $this->config["url"] . "/projects.json?limit=100")
        );

        return json_decode($response->getBody(), true)['projects'];
    }

    public function createIssue(Feedback $feedback)
    {
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
                        "token" => '',
                        "filename" => "screenshot.jpg",
                        "content_type" => "image/jpg"
                    ]
                ]
            ]
        ];

        $this->sendRequest(new Request("POST", $this->config["url"] . "/issues.json", $headers, json_encode($body)));
    }


    /**
     * @param Request $request
     * @return \Psr\Http\Message\ResponseInterface
     */
    protected function sendRequest(Request $request)
    {
        return $this->client->request(
            $request,
            [
                "auth" => [$this->config['username'], $this->config["password"]],
            ]
        );
    }
}
