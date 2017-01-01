<?php
namespace App\Contracts;

use Psr\Http\Message\RequestInterface;

interface ApiClientInterface
{
    public function request(RequestInterface $request, array $options = []);
}
