<?php
namespace App\Repositories;

use App\Feedback;
use App\IssueTracker;
use App\Repositories\Contracts\IssueTrackerApiInterface;


class RedmineApiRepository implements IssueTrackerApiInterface
{
    /**
     */
    protected $client;

    protected $type = 'redmine';

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
     * @param Project $project
     * @param Feedback $feedback

     */
    public function notify(Project $project, Feedback $feedback)
    {
        $issueTrackerConfig = $this->config->getRedmineSettings();
        if (empty($issueTrackerConfig)) {
            throw new IssueTrackerNotFound();
        }

        if (isset($issueTrackerConfig["projects"][$project->getCode()]) === false) {
            throw new ProjectNotFound();
        }
        $projectConfig = $issueTrackerConfig["projects"][$project->getCode()];

        $token = "";
        $this->uploadImage($feedback, $issueTrackerConfig, $token);
        $this->createIssue($feedback, $issueTrackerConfig, $projectConfig, $token);
    }

    /**
     * @param Feedback $feedback
     * @param array $issueTrackerConfig
     * @param string $token
     */
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

    /**
     * @param Feedback $feedback
     * @param array $issueTrackerConfig
     * @param array $projectConfig
     * @param string $token
     */
    public function createIssue(IssueTracker $issueTracker, Feedback $feedback) {
        $description = "*Bejelentés leírása:* " . $feedback->description . "\n" .
            "*Url:* " . $feedback->url . "\n\n" .
            "*Operációs rendszer:* " . $feedback->platform . "\n" .
            "*Böngésző:* " . $feedback->browser . "\n" .
            "*Sütik:* " . ($feedback->getBrowser()->isCookieEnabled() ? "engedélyezve" : "letiltva") . "\n" .
            "*Képernyőméret:* " . $feedback->getBrowser()->getScreen() . "\n" .
            "*User Agent:* " . $feedback->getBrowser()->getUserAgent();

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

    /**
     * @param \GuzzleHttp\Psr7\Request $request
     * @param array $issueTrackerConfig
     * @return \Psr\Http\Message\ResponseInterface
     */
    protected function sendRequest(Request $request, array $issueTrackerConfig)
    {
        return $this->client->request(
            $request,
            [
                "auth" => [$issueTrackerConfig["username"], $issueTrackerConfig["password"]],
                "verify" => false
            ]
        );
    }
}
