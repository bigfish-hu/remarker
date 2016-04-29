<?php
namespace Src\Base\Middleware;

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use FastRoute\Dispatcher;
use FastRoute\RouteCollector;
use Src\Feedback\Action\GetFeedbacks;
use Src\Feedback\Action\CreateFeedback;
use Src\Frontend\Action\GetFrontend;
use WoohooLabs\Harmony\Middleware\FastRouteMiddleware;

class RouterMiddleware extends FastRouteMiddleware
{
    /**
     * @throws \WoohooLabs\Harmony\Exception\MethodNotAllowedException
     * @throws \WoohooLabs\Harmony\Exception\RouteNotFoundException
     */
    public function __invoke(ServerRequestInterface $request, ResponseInterface $response, callable $next)
    {
        $this->fastRoute = \FastRoute\simpleDispatcher(
            function (RouteCollector $router) {
                $router->addRoute("GET", "/api/feedbacks/{project}", GetFeedbacks::class);
                $router->addRoute("POST", "/api/feedbacks/{project}", CreateFeedback::class);
                $router->addRoute("GET", "/api/frontend/{project}", GetFrontend::class);
            }
        );

        return parent::__invoke($request, $response, $next);
    }
}
