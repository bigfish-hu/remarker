<?php
namespace Src\Feedback\JsonApi\Hydrator;

use Src\Feedback\Domain\Browser;
use Src\Feedback\Domain\Feedback;
use WoohooLabs\Yin\JsonApi\Request\RequestInterface;

class FeedbackHydator
{
    public function hydrate(RequestInterface $request)
    {
        $attributes = $request->getResourceAttributes();
        $browserAttributes = $attributes["browser"];
        $browser = new Browser(
            $browserAttributes["appCodeName"],
            $browserAttributes["appName"],
            $browserAttributes["appVersion"],
            $browserAttributes["cookieEnabled"],
            $browserAttributes["platform"],
            $browserAttributes["userAgent"],
            $browserAttributes["screen"]
        );

        $feedback = new Feedback(
            $browser,
            $attributes["url"],
            $attributes["screenshot"],
            $attributes["title"],
            $attributes["description"],
            $attributes["name"],
            $attributes["email"]
        );

        return $feedback;
    }
}
