<?php
namespace Src\Feedback\Domain;

interface NotificationInterface
{
    public function notify(Project $project, Feedback $feedback);
}
