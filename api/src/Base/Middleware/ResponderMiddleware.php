<?php
namespace Src\Base\Middleware;

use FastRoute\Dispatcher;
use WoohooLabs\Harmony\Middleware\DiactorosResponderMiddleware;
use Zend\Diactoros\Response\SapiEmitter;

class ResponderMiddleware extends DiactorosResponderMiddleware
{
    public function __construct()
    {
        parent::__construct(new SapiEmitter(), true);
    }
}
