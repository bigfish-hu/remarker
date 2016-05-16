<?php

namespace App\Repositories;

use App\Feedback;
use App\IssueTracker;
use App\Project;

abstract class IssueTrackerApiBaseRepository
{
    /** @var  Feedback */
    protected $feedback;

    /** @var  Project */
    protected $project;

    /** @var  array */
    protected $config;

    /** @var  string */
    protected $type;


    /**
     * @param Feedback $feedback
     * @return string
     */
    protected function createIssueDescription(Feedback $feedback)
    {
        return "*" . trans('admin/feedbacks.description') . ":* " . $feedback->description . "\n" .
            "*" . trans('admin/feedbacks.url') . ":* " . $feedback->url . "\n" .
            "*" . trans('admin/feedbacks.platform') . ":* " . $feedback->platform . "\n" .
            "*" . trans('admin/feedbacks.cookies') . ":* " . $feedback->cookie_enabled ? trans('admin/feedbacks.enabled') : trans('admin/feedbacks.disabled') . "\n" .
            "*" . trans('admin/feedbacks.screen_resolution') . ":* " . $feedback->screen_resolution . "\n" .
            "*" . trans('admin/feedbacks.user_agent') . ":* " . $feedback->user_agent . "\n";
    }
}