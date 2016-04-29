<?php
namespace Src\Feedback\Infrastructure\Eloquent;

use Src\Base\Config\Config;
use Src\Feedback\Domain\NotificationServiceFactory;
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
     * @var \Src\Feedback\Domain\NotificationServiceFactory
     */
    protected $notificationServiceFactory;

    public function __construct(Config $config, NotificationServiceFactory $notificationServiceFactory)
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
        $project = $this->config->getProject($code);
        if (empty($project) === true) {
            throw new ProjectNotFound();
        }
        
        $notificationServices = [];
        foreach ($project as $notificationServiceName) {
            $notificationServices[] = $this->notificationServiceFactory->createNotificationService($notificationServiceName);
        }
        
        return new Project($code, $notificationServices);
    }
}
