<?php
namespace Src\Feedback\Infrastructure\Eloquent;

use Src\Feedback\Domain\Feedback;

class EloquentFeedbackRepository implements FeedbackRepositoryInterface
{
    public function createFeedback(Feedback $feedback)
    {
        EloquentFeedbackModel::create(
            [
                "title" => $feedback->getTitle(),
                "description" => $feedback->getDescription(),
                "url" => $feedback->getUrl(),
                "reporter_name" => $feedback->getName(),
                "reporter_email" => $feedback->getEmail(),
                "created" => $feedback->getCreated()->format("Y-m-d H:i:s"),
                "screenshot" => $feedback->getScreenshot(),
                "browser_name" => $feedback->getBrowser()->getName(),
                "browser_is_cookie_enabled" => $feedback->getBrowser()->isCookieEnabled(),
                "platform" => $feedback->getBrowser()->getPlatform(),
                "screen_resolution" => $feedback->getBrowser()->getScreen()
            ]
        );
    }
}
