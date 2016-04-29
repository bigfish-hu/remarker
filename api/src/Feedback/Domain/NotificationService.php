<?php
namespace Src\Feedback\Domain;

interface NotificationService
{
    public function notify(Project $projectConfig, Feedback $feedback);
}
