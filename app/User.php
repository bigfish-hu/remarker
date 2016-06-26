<?php

namespace App;

use Illuminate\Auth\Authenticatable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Contracts\Auth\Access\Authorizable as AuthorizableContract;
use Illuminate\Foundation\Auth\Access\Authorizable;
use Tymon\JWTAuth\Contracts\JWTSubject;

class User extends Model implements JWTSubject, AuthenticatableContract, AuthorizableContract
{
    use Authenticatable, Authorizable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'project_id', 'is_superadmin'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'pivot'
    ];

    public function isSuperAdmin()
    {
        return $this->is_superadmin;
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function projects()
    {
        return $this->belongsToMany('App\Project', 'project_user', 'project_id', 'user_id');
    }


    /**
     * Get all the feedbacks belonging to the projects which assigned to the user.
     * Returns a collection of feedbacks grouped in subcollections based by the projects.
     * E.g. user{ project1{feedback1, feedback2, etc.}, project2{feedback3, feedback4, etc}, etc.}
     *
     * @return \Illuminate\Support\Collection
     */
    public function feedbacks($columns = ['*'])
    {
        $projects = $this->projects();

        $feedbacks = collect([]);

        foreach ($projects as $project) {
            $feedbacks->push($project->feedbacks()->get($columns));
        }

        return $feedbacks;
    }

    /**
     * Set the password to be hashed when saved
     */
    public function setPasswordAttribute($password)
    {
        $this->attributes['password'] = \Hash::make($password);
    }

    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    public function getJWTCustomClaims()
    {
        return [];
    }
}
