<?php
namespace Src\Feedback\Domain;

use Interop\Container\ContainerInterface;
use Src\Feedback\Infrastructure\Notification\GuzzleJiraNotificationService;
use Src\Feedback\Infrastructure\Notification\GuzzleRedmineNotificationService;
use Src\Feedback\Infrastructure\Notification\PhpMailerEmailNotificationService;

class NotificationServiceFactory
{
    /**
     * @var \Interop\Container\ContainerInterface
     */
    protected $container;

    /**
     * @param \Interop\Container\ContainerInterface $container
     */
    public function __construct(ContainerInterface $container)
    {
        $this->container = $container;
    }
    
    public function createNotificationService($name)
    {
        if ($name === "redmine") {
            return $this->container->get(GuzzleRedmineNotificationService::class);
        }

        if ($name === "jira") {
            return $this->container->get(GuzzleJiraNotificationService::class);
        }

        return $this->container->get(PhpMailerEmailNotificationService::class);
    }
}
