<?php
namespace Src\Feedback\Action;

use WoohooLabs\Yin\JsonApi\JsonApi;

class GetFeedbacks
{
    /**
     * @param \WoohooLabs\Yin\JsonApi\JsonApi $jsonApi
     * @return \Psr\Http\Message\ResponseInterface
     */
    public function __invoke(JsonApi $jsonApi)
    {
        // Checking the "id" of the currently requested book
        $id = $jsonApi->getRequest()->getAttribute("id");

        // Responding with "200 Ok" status code along with the book document
        return $jsonApi->respond()->genericSuccess(200);
    }
}
