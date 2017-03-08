<?php
namespace App\Services;

use App\Contracts\ApiClientInterface;
use GuzzleHttp\Client;
use Psr\Http\Message\RequestInterface;

class GuzzleApiClient implements ApiClientInterface
{
    /**
     * @var \GuzzleHttp\Client
     */
    protected $client;

    /**
     */
    public function __construct()
    {
        $this->client = new Client();
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
