<?php

namespace App\Policies;

use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class UserPolicy
{
    use HandlesAuthorization;

    /**
     * Determine if the users can be updated by the user.
     *
     * @param  \App\User  $user
     * @return bool
     */
    public function before(User $user)
    {
        var_dump($user->toArray());
        return (bool)$user->isSuperAdmin();
    }
}
