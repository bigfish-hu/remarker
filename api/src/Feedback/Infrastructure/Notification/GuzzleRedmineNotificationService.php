<?php
namespace Src\Feedback\Infrastructure\Notification;

use GuzzleHttp\Psr7\Request;
use Src\Base\Config\Config;
use Src\Feedback\Domain\AbstractNotificationService;
use Src\Feedback\Domain\Feedback;
use Src\Feedback\Domain\Project;
use Src\Feedback\Exception\IssueTrackerNotFound;
use Src\Feedback\Exception\ProjectNotFound;
use Src\Feedback\Exception\RedmineIssueCantBeCreated;
use Src\Feedback\Utils\ApiClient;

class GuzzleRedmineNotificationService extends AbstractNotificationService
{
    /**
     * @var \Src\Feedback\Utils\ApiClient
     */
    protected $client;

    /**
     * @param \Src\Feedback\Utils\ApiClient $client
     * @param \Src\Base\Config\Config $config
     */
    public function __construct(ApiClient $client, Config $config)
    {
        $this->client = $client;
        parent::__construct($config);
    }

    /**
     * @param Project $project
     * @param Feedback $feedback
     * @throws \Src\Feedback\Exception\IssueTrackerNotFound
     * @throws \Src\Feedback\Exception\ProjectNotFound
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
     * @throws \Src\Feedback\Exception\RedmineIssueCantBeCreated
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
     * @throws \Src\Feedback\Exception\RedmineIssueCantBeCreated
     */
    protected function createIssue(
        Feedback $feedback,
        array $issueTrackerConfig,
        array $projectConfig,
        $token
    ) {
        $description = "*Bejelentés leírása:* " . $feedback->getDescription() . "\n" .
            "*Url:* " . $feedback->getUrl() . "\n\n" .
            "*Operációs rendszer:* " . $feedback->getBrowser()->getPlatform() . "\n" .
            "*Böngésző:* " . $feedback->getBrowser()->getName() . "\n" .
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
