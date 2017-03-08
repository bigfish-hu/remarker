<?php

namespace App;

use Illuminate\Auth\Authenticatable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Contracts\Auth\Access\Authorizable as AuthorizableContract;
use Illuminate\Database\Query\Builder;
use Illuminate\Foundation\Auth\Access\Authorizable;
use Illuminate\Notifications\Notifiable;
use NotificationChannels\WebPush\HasPushSubscriptions;
use Tymon\JWTAuth\Contracts\JWTSubject;

/**
 * Class User
 * @package App
 *
 * @property integer $id
 * @property string $name
 * @property string $email
 * @property integer $is_superadmin
 * @property string $created_at
 * @property string $updated_at
 */
class User extends Model implements JWTSubject, AuthenticatableContract, AuthorizableContract
{
    use Authenticatable, Authorizable, Notifiable, HasPushSubscriptions;

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
        'password', 'pivot', 'remember_token'
    ];

    /**
     * @return boolean
     */
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

    public function feedbacks($fields)
    {
        $this->load(['projects.feedbacks' => function (Builder $q) use (&$feedbacks, $fields) {
            $feedbacks = $q->join('projects', 'feedbacks.project_id', '=', 'projects.id')->select($fields)->get();
        }]);

        return $feedbacks ? $feedbacks : [];
    }

    /**
     * Set the password to be hashed when saved
     *
     * @SuppressWarnings(PHPMD.StaticAccess)
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
