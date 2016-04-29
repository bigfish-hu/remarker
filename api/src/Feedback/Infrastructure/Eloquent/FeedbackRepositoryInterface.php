<?php
namespace Src\Feedback\Infrastructure\Eloquent;

use Src\Feedback\Domain\Feedback;

class EloquentFeedbackRepository implements FeedbackRepositoryInterface
{
    public function createFeedback(Feedback $feedback)
    {
        FeedbackModel::create(
            [
                "title" => $feedback->getTitle(),
                "description" => $feedback->getDescription(),
                "reporter_name" => $feedback->getName(),
                "reporter_email" => $feedback->getEmail(),
                "url" => $feedback->getUrl(),
                "browser_name" => $feedback->getBrowser()->getName(),
                "browser_is_cookie_enabled" => $feedback->getBrowser()->isCookieEnabled(),
                "platform" =>$feedback->getBrowser()->getPlatform(),
                "screenshot" => $feedback->getScreenshot(),
                "created" => $feedback->getCreated()->format("Y-m-d H:i:s")
            ]
        );
    }
}
