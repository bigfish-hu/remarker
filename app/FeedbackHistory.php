<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class FeedbackHistory extends Model
{
    protected $table = 'feedback_history';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'feedback_id', 'user_id', 'action_code', 'project_id', 'issue_tracker_id'
    ];

    public function feedback()
    {
        return $this->belongsTo('App\Feedback');
    }
}
