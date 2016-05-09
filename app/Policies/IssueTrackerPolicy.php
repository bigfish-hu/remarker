<?php

namespace App\Policies;

use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class IssueTrackerPolicy
{
    use HandlesAuthorization;

    /**
     * Determine if the issue trackers can be updated by the user.
     *
     * @param  \App\User  $user
     * @return bool
     */
    public function before(User $user)
    {
        return $user->isSuperAdmin();
    }
}
