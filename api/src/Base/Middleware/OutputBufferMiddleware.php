<?php
namespace Src\Base\Middleware;

use FastRoute\Dispatcher;
use WoohooLabs\Harmony\Middleware\OutputBufferResponderMiddleware;

class OutputBufferMiddleware extends OutputBufferResponderMiddleware
{
    public function __construct()
    {
        parent::__construct(APP_MODE !== "dev");
    }
}
