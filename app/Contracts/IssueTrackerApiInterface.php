<?php

namespace App\Contracts;

use App\Feedback;
use App\Contracts\RepositoryInterface;
use Illuminate\Database\Eloquent\Collection;

interface IssueTrackerApiInterface extends RepositoryInterface
{
    public function getProjects();

    public function getUsers();

    public function createIssue(Feedback $feedback);
}