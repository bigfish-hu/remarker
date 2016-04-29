<?php
namespace Src\Base\Middleware;

use Interop\Container\ContainerInterface;
use WoohooLabs\Yin\JsonApi\Exception\ExceptionFactoryInterface;
use WoohooLabs\YinMiddlewares\Middleware\JsonApiDispatcherMiddleware;

class DispatcherMiddleware extends JsonApiDispatcherMiddleware
{
    public function __construct(ExceptionFactoryInterface $exceptionFactory, ContainerInterface $container)
    {
        parent::__construct($exceptionFactory, $container);
    }
}
