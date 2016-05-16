<?php

namespace App\Services;

use App\Repositories\Contracts\IssueTrackerApiInterface;
use App\Repositories\JiraApiRepository;
use App\Repositories\RedmineApiRepository;

class IssueTrackerApiConnectionService
{

    private $configs;

    public function __construct()
    {
        $this->configs = config('trackers');
    }

    public function syncProjects()
    {
        foreach ($this->configs as $tracker => $config) {
            if ($config['active']) {
                $name = $tracker.'ApiRepository';
                /** @var IssueTrackerApiInterface $api */
                $api = new $name($config);
                $api->getProjects();
            }
        }


    }
}