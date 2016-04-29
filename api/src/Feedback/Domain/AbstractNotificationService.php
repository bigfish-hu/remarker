<?php
namespace Src\Feedback\Domain;

use Src\Base\Config\Config;

abstract class AbstractNotificationService implements NotificationService
{
    /**
     * @var \Src\Base\Config\Config
     */
    protected $config;

    public function __construct(Config $config)
    {
        $this->config = $config;
    }
}
