<?php

namespace App\GraphQL\Query;

use App\Feedback;
use App\GraphQL\Query;
use GraphQL\Type\Definition\Type;
use GraphQL;

/**
 * @SuppressWarnings(PHPMD.StaticAccess)
 */
class Feedbacks extends Query
{
    protected $attributes = [
        'name' => 'Feedbacks',
        'description' => 'A query returning a list of feedbacks'
    ];

    public function type()
    {
        return GraphQL::type('Feedbacks');
    }

    /**
     * @return array
     */
    protected function getArguments()
    {
        return [
            'id' => ['name' => 'id', 'type' => Type::int()]
        ];
    }

    /**
     * @return \Illuminate\Database\Eloquent\Builder
     */
    protected function getQuery()
    {
        return Feedback::query();
    }
}
