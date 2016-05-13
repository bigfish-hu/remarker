<?php
namespace App\Repositories;

use App\Feedback;
use App\IssueTracker;
use App\Repositories\Contracts\IssueTrackerApiInterface;


class JiraApiRepository implements IssueTrackerApiInterface
{
    /**
     */
    protected $client;

    public $type = 'jira';

    public function getUsers(IssueTracker $issueTracker)
    {

    }

    public function getProjects(IssueTracker $issueTracker)
    {

    }

    /**
     */
    public function __construct(ApiClient $client, Config $config)
    {
        $this->client = $client;
        parent::__construct($config);
    }

    /**
     *
     */
    public function notify(Project $project, Feedback $feedback)
    {
        $issueTrackerConfig = $this->config->getJiraSettings();
        if (empty($issueTrackerConfig)) {
            throw new IssueTrackerNotFound();
        }

        if (isset($issueTrackerConfig["projects"][$project->getCode()]) === false) {
            throw new ProjectNotFound();
        }
        $projectConfig = $issueTrackerConfig["projects"][$project->getCode()];

        $issueLink = "";
        $this->createIssue($feedback, $issueTrackerConfig, $projectConfig, $issueLink);
        $this->addWatchers($issueTrackerConfig, $projectConfig, $issueLink);
        $this->uploadImage($feedback, $issueTrackerConfig, $projectConfig, $issueLink);
    }


    public function createIssue(IssueTracker $issueTracker, Feedback $feedback) {
        $headers = [
            "Content-Type" => "application/json"
        ];

        $watchers = [];
        foreach ($projectConfig["watchers"] as $watcher) {
            $watchers[] = ["name" => $watcher];
        }

        $description = "*Bejelentés leírása:* " . $feedback->getDescription() . "\n" .
            "*Url:* " . $feedback->getUrl() . "\n\n" .
            "*Operációs rendszer:* " . $feedback->getBrowser()->getPlatform() . "\n" .
            "*Böngésző:* " . $feedback->getBrowser()->getName() . "\n" .
            "*Sütik:* " . ($feedback->getBrowser()->isCookieEnabled() ? "engedélyezve" : "letiltva") . "\n" .
            "*Képernyőméret:* " . $feedback->getBrowser()->getScreen() . "\n" .
            "*User Agent:* " . $feedback->getBrowser()->getUserAgent();

        $body = [
            "fields" => [
                "project" => [
                    "key" => $projectConfig["id"]
                ],
                "priority" => [
                    "name" => "Lowest"
                ],
                "issuetype" => [
                    "name" => "Bug"
                ],
                "assignee" => [
                    "name" => $projectConfig["assignee"]
                ],
                "summary" => $feedback->getTitle(),
                "description" => $description,
            ]
        ];

        $response = $this->sendRequest(
            new Request("POST", $issueTrackerConfig["url"] . "/rest/api/2/issue", $headers, json_encode($body)),
            $issueTrackerConfig
        );

        if ($response->getStatusCode() !== 201) {
            throw new JiraIssueCantBeCreated("");
        }

        $body = json_decode($response->getBody()->getContents(), true);
        if (empty($body["self"])) {
            throw new JiraIssueCantBeCreated("");
        }

        $issueLink = $body["self"];
    }

    /**
     *
     */
    protected function addWatchers(array $issueTrackerConfig, array $projectConfig, $issueLink)
    {
        foreach ($projectConfig["watchers"] as $watcher) {
            $headers = [
                "Accept" => "application/json",
                "Content-Type" => "application/json"
            ];
            $body = '"' .$watcher . '"';
            $response = $this->sendRequest(
                new Request("POST", $issueLink . "/watchers", $headers, $body),
                $issueTrackerConfig
            );

            if ($response->getStatusCode() !== 204) {
                throw new JiraIssueCantBeCreated("");
            }
        }
    }

    protected function uploadImage(
        Feedback $feedback,
        array $issueTrackerConfig,
        array $projectConfig,
        $issueLink
    ) {
        $headers = [
            "X-Atlassian-Token" => "no-check"
        ];
        $body = null;
        $multipart = [
            [
                "name"     => "file",
                "contents" => $feedback->getScreenshot(),
                "filename" => "screenshot.jpg"
            ]
        ];

        $response = $this->sendRequest(
            new Request("POST", $issueLink . "/attachments", $headers, $body),
            $issueTrackerConfig,
            $multipart
        );

        if ($response->getStatusCode() !== 200) {
            throw new JiraIssueCantBeCreated($response->getBody()->getContents());
        }
    }


    protected function sendRequest(Request $request, array $issueTrackerConfig, $multipart = [])
    {
        $config = [
            "auth" => [$issueTrackerConfig["username"], $issueTrackerConfig["password"]],
            "verify" => false,
            "http_errors" => false
        ];

        if (empty($multipart) === false) {
            $config["multipart"] = $multipart;
        }

        return $this->client->request($request, $config);
    }
}
