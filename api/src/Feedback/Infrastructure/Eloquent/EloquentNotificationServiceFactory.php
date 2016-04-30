<?php
namespace Src\Feedback\Infrastructure\Eloquent;

use Interop\Container\ContainerInterface;
use Src\Base\Config\Config;
use Src\Feedback\Infrastructure\Notification\GuzzleJiraNotification;
use Src\Feedback\Infrastructure\Notification\GuzzleRedmineNotification;
use Src\Feedback\Infrastructure\Notification\PhpMailerEmailNotification;

class EloquentNotificationServiceFactory
{
    /**
     * @var \Src\Base\Config\Config
     */
    protected $config;

    /**
     * @var \Interop\Container\ContainerInterface
     */
    protected $container;

    /**
     * @param \Src\Base\Config\Config $config
     * @param \Interop\Container\ContainerInterface $container
     */
    public function __construct(Config $config, ContainerInterface $container)
    {
        $this->config = $config;
        $this->container = $container;
    }
    
    public function createNotifications(array $project)
    {
        $notifications = [];

        foreach ($project["emails"] as $email) {
            $notifications[] = new PhpMailerEmailNotification($this->config);
        }

        foreach ($project["issueTrackers"] as $notificationService) {
            $notifications[] = new PhpMailerEmailNotification($this->config);
        }

        if ($name === "redmine") {
            return $this->container->get(GuzzleRedmineNotification::class);
        }

        if ($name === "jira") {
            return $this->container->get(GuzzleJiraNotification::class);
        }

        return $this->container->get();
    }
}
