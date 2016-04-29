<?php
include_once "../app/config/bootstrap_application.php";

use Src\Base\Middleware\ErrorHandlerMiddleware;
use Src\Base\Middleware\RouterMiddleware;
use Src\Base\Middleware\DispatcherMiddleware;
use Src\Base\Middleware\OutputBufferMiddleware;
use Src\Base\Middleware\ResponderMiddleware;
use WoohooLabs\Harmony\Harmony;
use WoohooLabs\Yin\JsonApi\Exception\ExceptionFactory;
use WoohooLabs\Yin\JsonApi\Request\Request;
use Zend\Diactoros\ServerRequestFactory;
use Zend\Diactoros\Response;

$exceptionFactory = new ExceptionFactory();

$harmony = new Harmony(new Request(ServerRequestFactory::fromGlobals()), new Response('php://temp'));
$harmony
    ->addMiddleware("error_handler", new ErrorHandlerMiddleware($exceptionFactory))
    ->addMiddleware("router", new RouterMiddleware())
    ->addMiddleware("dispatcher", new DispatcherMiddleware($exceptionFactory, $container))
    ->addFinalMiddleware("ob_response", new OutputBufferMiddleware())
    ->addFinalMiddleware("diactoros_response", new ResponderMiddleware());
$harmony();
