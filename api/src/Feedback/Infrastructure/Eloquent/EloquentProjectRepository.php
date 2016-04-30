<?php
namespace Src\Feedback\Infrastructure\Eloquent;

use Src\Base\Config\Config;
use Src\Feedback\Infrastructure\Eloquent\EloquentNotificationServiceFactory;
use Src\Feedback\Domain\Project;
use Src\Feedback\Domain\ProjectRepositoryInterface;
use Src\Feedback\Exception\ProjectNotFound;

class EloquentProjectRepository implements ProjectRepositoryInterface
{
    /**
     * @var \Src\Base\Config\Config
     */
    protected $config;

    /**
     * @var \Src\Feedback\Infrastructure\Eloquent\EloquentNotificationServiceFactory
     */
    protected $notificationServiceFactory;

    public function __construct(Config $config, EloquentNotificationServiceFactory $notificationServiceFactory)
    {
        $this->config = $config;
        $this->notificationServiceFactory = $notificationServiceFactory;
    }

    /**
     * @param string $code
     * @return \Src\Feedback\Domain\Project
     * @throws \Src\Feedback\Exception\ProjectNotFound
     */
    public function getProject($code)
    {
        $project = EloquentProjectModel::query()
            ->with(
                [
                    "allowedUrls",
                    "emails",
                    "issueTrackers",
                    "issueTrackers.issueTracker",
                    "issueTrackers.watchers"
                ]
            )
            ->where("name", "=", $code)
            ->get()
            ->first();

        if (empty($project)) {
            throw new ProjectNotFound();
        }
        
        $notificationServices = $this->notificationServiceFactory->createNotifications($project->toArray());
                
        return new Project($code, $notificationServices);
    }
}
