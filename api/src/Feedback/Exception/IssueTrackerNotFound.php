<?php
namespace Src\Feedback\Exception;

use WoohooLabs\Yin\JsonApi\Exception\JsonApiException;
use WoohooLabs\Yin\JsonApi\Schema\Error;

class IssueTrackerNotFound extends JsonApiException
{
    public function __construct()
    {
        parent::__construct("The issue tracker was not found!");
    }

    protected function getErrors()
    {
        return [
            Error::create()
                ->setStatus(404)
                ->setCode("ISSUE_TRACKER_NOT_FOUND")
                ->setTitle("The issue tracker was not found")
                ->setDetail("The issue tracker you specified was not found!")
        ];
    }
}
