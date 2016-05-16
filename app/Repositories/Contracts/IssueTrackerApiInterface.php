<?php

namespace App\Repositories\Contracts;

use App\Feedback;
use Illuminate\Database\Eloquent\Collection;

interface IssueTrackerApiInterface extends RepositoryInterface
{
    public function getProjects();

    public function getUsers();

    public function createIssue(Feedback $feedback);
}