<?php

namespace App\Repositories\Contracts;

use App\Feedback;
use App\IssueTracker;

interface IssueTrackerApiInterface extends RepositoryInterface
{
    public function getProjects(IssueTracker $issueTracker);

    public function getUsers(IssueTracker $issueTracker);

    public function createIssue(IssueTracker $issueTracker, Feedback $feedback);
}