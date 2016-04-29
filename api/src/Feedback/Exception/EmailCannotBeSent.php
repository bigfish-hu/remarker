<?php
namespace Src\Feedback\Exception;

use WoohooLabs\Yin\JsonApi\Exception\JsonApiException;
use WoohooLabs\Yin\JsonApi\Schema\Error;

class EmailCannotBeSent extends JsonApiException
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
        parent::__construct("Notification email cannot be sent!");
        $this->detail = $detail;
    }

    protected function getErrors()
    {
        return [
            Error::create()
                ->setStatus(500)
                ->setCode("EMAIL_ERROR")
                ->setTitle("Notification email cannot be sent")
                ->setDetail($this->detail)
        ];
    }
}
