<?php

namespace App\GraphQL\Query;

use App\Feedback;
use App\GraphQL\Query;
use GraphQL\Type\Definition\Type;
use GraphQL;
use Illuminate\Database\Eloquent\Builder;
use GraphQL\Type\Definition\ObjectType;

/**
 * @SuppressWarnings(PHPMD.StaticAccess)
 */
class Feedbacks extends Query
{
    protected $attributes = [
        'name' => 'Feedbacks',
        'description' => 'A query returning a list of feedbacks'
    ];

    public function type() : ObjectType
    {
        return GraphQL::type('Feedbacks');
    }

    protected function getTypeArguments() : array
    {
        return [
            'id' => ['name' => 'id', 'type' => Type::int()]
        ];
    }

    protected function getQuery() : Builder
    {
        return Feedback::query();
    }
}
