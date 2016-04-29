<?php
namespace Src\Feedback\Exception;

use WoohooLabs\Yin\JsonApi\Exception\JsonApiException;
use WoohooLabs\Yin\JsonApi\Schema\Error;

class ProjectNotFound extends JsonApiException
{
    public function __construct()
    {
        parent::__construct("The project was not found!");
    }

    protected function getErrors()
    {
        return [
            Error::create()
                ->setStatus(404)
                ->setCode("PROJECT_NOT_FOUND")
                ->setTitle("The project was not found")
                ->setDetail("The project you specified was not found!")
        ];
    }
}
