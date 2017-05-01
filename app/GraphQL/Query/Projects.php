<?php

namespace App\GraphQL\Query;

use App\GraphQL\Query;
use App\Project;
use GraphQL\Type\Definition\Type;
use GraphQL;
use Illuminate\Database\Eloquent\Builder;
use GraphQL\Type\Definition\ObjectType;

/**
 * @SuppressWarnings(PHPMD.StaticAccess)
 */
class Projects extends Query
{
    protected $relations = ['feedbacks'];

    protected $attributes = [
        'name' => 'Projects',
        'description' => 'A query returning a list of projects'
    ];

    public function type() : ObjectType
    {
        return GraphQL::type('Projects');
    }

    protected function getTypeArguments() : array
    {
        return [
            'id' => ['name' => 'id', 'type' => Type::int()],
            'name' => ['name' => 'name', 'type' => Type::string()],
            'ext_id' => ['name' => 'ext_id', 'type' => Type::int()],
            'issue_tracker' => ['name' => 'issue_tracker', 'type' => Type::int()]
        ];
    }

    protected function getQuery() : Builder
    {
        return Project::query();
    }
}
