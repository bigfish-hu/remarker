<?php
namespace Src\Base\Middleware;

use Exception;
use FastRoute\Dispatcher;
use Psr\Http\Message\ResponseInterface;
use WoohooLabs\Harmony\Exception\RouteNotFoundException;
use WoohooLabs\Yin\JsonApi\Exception\ExceptionFactoryInterface;
use WoohooLabs\Yin\JsonApi\Request\RequestInterface;
use WoohooLabs\YinMiddlewares\Middleware\JsonApiErrorHandlerMiddleware;

class ErrorHandlerMiddleware extends JsonApiErrorHandlerMiddleware
{
    /**
     * @var \WoohooLabs\Yin\JsonApi\Exception\ExceptionFactoryInterface
     */
    protected $exceptionFactory;

    public function __construct(ExceptionFactoryInterface $exceptionFactory)
    {
        $this->exceptionFactory = $exceptionFactory;
        parent::__construct(true, APP_MODE === "dev");
    }

    /**
     * @return void|\Psr\Http\Message\ResponseInterface
     * @throws \Exception
     */
    public function __invoke(RequestInterface $request, ResponseInterface $response, callable $next)
    {
        if ($this->isCatching === true) {
            try {
                return parent::__invoke($request, $response, $next);
            } catch (RouteNotFoundException $exception) {
                /** @var \WoohooLabs\Yin\JsonApi\Document\ErrorDocument $errorDocument */
                $additionalMeta = $this->verbose ? $this->getExceptionMeta($exception) : [];
                return $this->exceptionFactory->createApplicationErrorException($request)->getErrorDocument()->getResponse($response, null, $additionalMeta);
            } catch (Exception $exception) {
                /** @var \WoohooLabs\Yin\JsonApi\Document\ErrorDocument $errorDocument */
                $additionalMeta = $this->verbose ? $this->getExceptionMeta($exception) : [];
                return $this->exceptionFactory->createApplicationErrorException($request)->getErrorDocument()->getResponse($response, null, $additionalMeta);
            }
        }

        return parent::__invoke($request, $response, $next);
    }
}
