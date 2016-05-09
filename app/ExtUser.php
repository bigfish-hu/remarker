<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ExtUser extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'issue_tracker_id', 'key', 'login_name', 'display_name'
    ];

    public function issueTracker()
    {
        return $this->belongsTo('App\IssueTracker');
    }
}
