<?php
namespace Src\Feedback\Infrastructure\Eloquent;

use Src\Feedback\Domain\Feedback;

interface FeedbackRepositoryInterface
{
    public function createFeedback(Feedback $feedback);
}
