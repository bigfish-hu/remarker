<?php

namespace App\Contracts;

use App\Feedback;

interface IssueTrackerApiInterface extends RepositoryInterface
{
    public function getProjects();

    public function getUsers();

    public function createIssue(Feedback $feedback);
}
