<?php

namespace App\Policies;

use App\Feedback;
use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class FeedbackPolicy
{
    use HandlesAuthorization;

    /**
     * Determine if the given feedback can be viewed by the user.
     *
     * @param  \App\User  $user
     * @return bool
     */
    public function show(User $user, Feedback $feedback)
    {
        return $feedback->users()->get()->contains('id', $user->id);
    }
}
