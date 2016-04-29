<?php
namespace Src\Base\Config;

use Src\Feedback\Domain\Project;

class Config
{
    /**
     * @var array
     */
    protected $data;

    public function __construct()
    {
        $this->data = require(__DIR__ . "/../../../app/config/config.php");
    }

    /**
     * @return array
     */
    public function getBaseUrl()
    {
        return $this->data["system"]["base_url"];
    }

    /**
     * @return array
     */
    public function getNoReplyEmailAddress()
    {
        return $this->data["system"]["noreply_email_address"];
    }

    /**
     * @return array
     */
    public function getSupportEmailAddress()
    {
        return $this->data["system"]["support_email_address"];
    }

    /**
     * @return array
     */
    public function getText()
    {
        return $this->data["text"];
    }

    /**
     * @param string $code
     * @return array
     */
    public function getProject($code)
    {
        return isset($this->data["projects"][$code]) ? $this->data["projects"][$code] : [];
    }

    /**
     * @return array
     */
    public function getRedmineSettings()
    {
        return $this->getIssueTracker("redmine");
    }

    /**
     * @return array
     */
    public function getJiraSettings()
    {
        return $this->getIssueTracker("jira");
    }

    /**
     * @param string $code
     * @return array
     */
    protected function getIssueTracker($code)
    {
        return isset($this->data["issue-trackers"][$code]) ? $this->data["issue-trackers"][$code] : [];
    }

    public function getEmailNotificationRecipients(Project $project)
    {
        if (isset($this->data["emails"]["projects"][$project->getCode()]["recipients"]) === false) {
            return [];
        }

        return $this->data["emails"]["projects"][$project->getCode()]["recipients"];
    }
}
