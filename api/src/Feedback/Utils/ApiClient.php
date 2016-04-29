<?php
namespace Src\Feedback\Utils;

use GuzzleHttp\Client;
use Psr\Http\Message\RequestInterface;

class ApiClient
{
    /**
     * @var \GuzzleHttp\Client
     */
    protected $client;

    /**
     * @param array $config
     */
    public function __construct(array $config = [])
    {
        $this->client = new Client($config);
    }

    /**
     * @param \Psr\Http\Message\RequestInterface $request
     * @param array $options
     * @return \Psr\Http\Message\ResponseInterface
     */
    public function request(RequestInterface $request, array $options = [])
    {
        return $this->client->send($request, $options);
    }
}
