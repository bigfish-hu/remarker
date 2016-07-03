<?php

namespace App;

use Illuminate\Auth\Authenticatable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Contracts\Auth\Access\Authorizable as AuthorizableContract;
use Illuminate\Database\Eloquent\Relations\HasMany;
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
        'name', 'email', 'password', 'is_superadmin'
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
        return $this->belongsToMany('App\Project');
    }

//
//    /**
//     * Get all the feedbacks belonging to the projects which have been assigned to the user.
//     * Returns a collection of feedbacks grouped in subcollections based by the projects.
//     * E.g. user{ project1{feedback1, feedback2, etc.}, project2{feedback3, feedback4, etc}, etc.}
//     *
//     * @return \Illuminate\Support\Collection
//     */
////       public function feedbacks($columns = ['*'])
////    {
////        $projects = $this->projects();
////
////        $feedbacks = collect([]);
////
////        foreach ($projects as $project) {
////            $feedbacks->push($project->feedbacks()->get($columns));
////        }
////
////        return $feedbacks;
////    }
//
    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasManyThrough
     */
    public function feedbacks()
    {
        return $this->hasManyThrough('App\Feedback', 'App\Project', 'id', 'project_id');
    }

//    public function feedbacks()
//    {
////        var_dump('fakka1');
//        if ( ! array_key_exists('feedbacks', $this->relations)) $this->loadFeedbacks();
//
//        return $this->getRelation('feedbacks');
//    }
//
//    public function loadFeedbacks()
//    {
////        var_dump('fakka2');
//
//        $feedbacks = Feedback::join('project_user', 'feedbacks.project_id', '=', 'project_user.project_id')
//            ->where('project_user.user_id', $this->getKey())
//            ->distinct()
//            ->get(['feedbacks.*','user_id']);
//
//        $hasMany = new HasMany(Feedback::query(), $this, 'user_id', 'id');
//
//        $hasMany->matchMany(array($this), $feedbacks, 'feedbacks');
//
//        return $this;
//    }


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
