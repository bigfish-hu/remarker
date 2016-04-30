<?php
namespace Src\Feedback\Infrastructure\Eloquent;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class EloquentProjectModel extends Model
{
    protected $table = "projects";

    public function allowedUrls(): HasMany
    {
        return $this->hasMany(EloquentProjectAllowedUrlModel::class, 'project_id');
    }

    public function issueTrackers(): HasMany
    {
        return $this->hasMany(EloquentProjectIssueTrackerModel::class, 'project_id');
    }

    public function emails(): HasMany
    {
        return $this->hasMany(EloquentProjectIssueTrackerModel::class, 'project_id');
    }
}
