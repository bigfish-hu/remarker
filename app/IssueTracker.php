<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class IssueTracker extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'user_name', 'password', 'type'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
    ];

    public function projects()
    {
        return $this->hasMany('App\Project', 'issue_tracker_id');
    }
}
