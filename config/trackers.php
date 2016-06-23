<?php

return [
    'Redmine' => [
        'active' => env('REDMINE_ACTIVE', false),
        'url' => env('REDMINE_URL', 'https://your.redmine.com'),
        'username' => env('REDMINE_USERNAME', 'redmine_username'),
        'password' => env('REDMINE_PASSWORD', 'redmine_password')
    ],

    'Jira' => [
        'active' => env('JIRA_ACTIVE', false),
        'url' => env('JIRA_URL', 'https://your.jira.com'),
        'username' => env('JIRA_USERNAME', 'jira_username'),
        'password' => env('JIRA_PASSWORD', 'jira_password')
    ],

    'Mantis' => [
        'active' => env('MANTIS_ACTIVE', false),
        'url' => env('MANTIS_URL', 'https://your.mantis.com'),
        'username' => env('MANTIS_USERNAME', 'mantis_username'),
        'password' => env('MANTIS_PASSWORD', 'mantis_password')
    ],
];
