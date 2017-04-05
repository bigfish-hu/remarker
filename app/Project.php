<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    const TABLE = 'projects';

    protected $table = self::TABLE;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'ext_id', 'issue_tracker', 'is_automatic_notification'
    ];

    protected $casts = [
        'id' => 'integer',
        'ext_id' => 'integer',
        'is_automatic_notification' => 'boolean'
    ];

    protected $hidden = ['pivot'];


    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function users()
    {
        return $this->belongsToMany('App\User', 'project_user', 'project_id', 'user_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function issueTracker()
    {
        return $this->belongsTo('App\IssueTracker');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function feedbacks()
    {
        return $this->hasMany('App\Feedback');
    }
}
