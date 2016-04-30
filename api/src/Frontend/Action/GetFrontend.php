<?php
namespace Src\Frontend\Action;

use Src\Base\Config\Config;
use WoohooLabs\Yin\JsonApi\JsonApi;

class GetFrontend
{
    /**
     * @Inject
     * @var Config
     */
    protected $config;

    /**
     * @Inject
     * @var \Src\Frontend\Infrastructure\Twig\FrontendTwig
     */
    protected $twig;

    /**
     * @param \WoohooLabs\Yin\JsonApi\JsonApi $jsonApi
     * @return \Psr\Http\Message\ResponseInterface
     */
    public function __invoke(JsonApi $jsonApi)
    {
        $params = [];
        $params["base_url"] = $this->config->getBaseUrl();
        $params["text"] = $this->config->getText();
        $params["project"] = $jsonApi->request->getAttribute("project");

        $response = $jsonApi->respond()->genericSuccess(200);
        $response = $response->withHeader("Content-Type", "application/javascript; charset=utf-8");
        $response->getBody()->write($this->twig->render("feedback.twig.js", $params));

        return $response;
    }
}
