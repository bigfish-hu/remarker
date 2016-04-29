<?php
namespace Src\Feedback\Exception;

use WoohooLabs\Yin\JsonApi\Exception\JsonApiException;
use WoohooLabs\Yin\JsonApi\Schema\Error;

class RedmineIssueCantBeCreated extends JsonApiException
{
    /**
     * @var string
     */
    protected $detail;

    /**
     * @param string $detail
     */
    public function __construct($detail)
    {
        parent::__construct("Redmine issue cannot be created!");
        $this->detail = $detail;
    }

    protected function getErrors()
    {
        return [
            Error::create()
                ->setStatus(500)
                ->setCode("REDMINE_ISSUE_CREATION_ERROR")
                ->setTitle("Redmine issue cannot be created")
                ->setDetail($this->detail)
        ];
    }
}
