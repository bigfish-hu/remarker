<?php
namespace Src\Feedback\Domain;

class Project
{
    /**
     * @var string
     */
    protected $code;

    /**
     * @var \Src\Feedback\Domain\NotificationInterface[]
     */
    protected $notificationServices;

    /**
     * @param string $code
     * @param \Src\Feedback\Domain\NotificationInterface[] $notificationServices
     */
    public function __construct($code, array $notificationServices)
    {
        $this->code = $code;
        $this->notificationServices = $notificationServices;
    }

    /**
     * @return string
     */
    public function getCode()
    {
        return $this->code;
    }

    public function sendNotifications(Feedback $feedback)
    {
        foreach ($this->notificationServices as $notificationService) {
            $notificationService->notify($this, $feedback);
        }
    }
}
