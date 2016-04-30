<?php
namespace Src\Feedback\Infrastructure\Eloquent;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class EloquentProjectIssueTrackerModel extends Model
{
    protected $table = "project_issue_tracker_watchers";

    public function issueTracker(): BelongsTo
    {
        return $this->belongsTo(EloquentIssueTrackerModel::class, 'issue_tracker_id');
    }

    public function watchers(): HasMany
    {
        return $this->hasMany(EloquentProjectIssueTrackerWatcherModel::class, 'project_issue_tracker_id');
    }
}
