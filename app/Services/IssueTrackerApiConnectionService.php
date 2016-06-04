<?php

namespace App\Services;

use App\Contracts\IssueTrackerApiInterface;
use App\Contracts\ApiClientInterface;

class IssueTrackerApiConnectionService
{
    /** @var mixed array */
    private $configs;

    /** @var \App\Contracts\ApiClientInterface */
    private $apiClient;

    /**
     * @param ApiClientInterface $apiClient
     */
    public function __construct(ApiClientInterface $apiClient)
    {
        $this->apiClient = $apiClient;
        $this->configs = config('trackers');
    }

    /**
     * @return array
     */
    public function syncProjects()
    {
        $projects = [];

        foreach ($this->configs as $tracker => $config) {
            if ($config['active']) {
                $name = 'App\Repositories\\'.$tracker.'ApiRepository';
                /** @var \App\Contracts\IssueTrackerApiInterface $api */
                $api = new $name($config, $this->apiClient);
                $projects[$tracker] = $api->getProjects();
            }
        }

        return $projects;
    }
}