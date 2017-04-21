<?php

namespace App\GraphQL\Query;

use App\GraphQL\Query;
use App\Project;
use GraphQL\Type\Definition\Type;
use GraphQL;

/**
 * @SuppressWarnings(PHPMD.StaticAccess)
 */
class Projects extends Query
{
    protected $attributes = [
        'name' => 'Projects',
        'description' => 'A query returning a list of projects'
    ];

    public function type()
    {
        return GraphQL::type('Projects');
    }

    /**
     * @return array
     */
    protected function getArguments()
    {
        return [
            'id' => ['name' => 'id', 'type' => Type::int()],
            'name' => ['name' => 'name', 'type' => Type::string()],
            'ext_id' => ['name' => 'ext_id', 'type' => Type::int()],
            'issue_tracker' => ['name' => 'issue_tracker', 'type' => Type::int()]
        ];
    }

    /**
     * @return \Illuminate\Database\Eloquent\Builder
     */
    protected function getQuery()
    {
        return Project::query();
    }
}
