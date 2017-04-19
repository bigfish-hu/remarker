<?php

namespace App\GraphQL\Type;

use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Support\Type as BaseType;
use GraphQL;

/**
 * @SuppressWarnings(PHPMD.StaticAccess)
 */
class Feedbacks extends BaseType
{
    protected $attributes = [
        'name' => 'Feedbacks',
        'description' => 'A type'
    ];

    public function fields()
    {
        return [
            'pageInfo' => [
                'name' => 'pageInfo',
                'type' => \GraphQL::type('PageInfo'),
                'resolve' => function ($root) {
                    return array_except($root->toArray(), ['data']);
                }
            ],
            'edges' => [
                'type' => Type::listOf(\GraphQL::type('Feedback')),
                'resolve' => function ($root) {
                    return $root->items();
                }
            ]
        ];
    }
}
