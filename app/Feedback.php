<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Feedback extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title', 'description', 'url', 'reporter_name', 'reporter_email', 'browser', 'platform',
        'user_agent', 'screen_resolution', 'cookie_enabled', 'project_id', 'ext_user_id', 'screenshot'
    ];

    public function feedbackHistory()
    {
        return $this->hasMany('App\FeedbackHistory');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function project()
    {
        return $this->belongsTo('App\Project');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function extUser()
    {
        return $this->belongsTo('App\ExtUser');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function users()
    {
        return $this->project()->getResults()->users();
    }
}
