<?php

namespace App\GraphQL\Type;

use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Support\Type as BaseType;

/**
 * @SuppressWarnings(PHPMD.StaticAccess)
 */
class Users extends BaseType
{
    protected $attributes = [
        'name' => 'Users',
        'description' => 'A collection of users with pagination information'
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
                'type' => Type::listOf(\GraphQL::type('User')),
                'resolve' => function ($root) {
                    return $root->items();
                }
            ]
        ];
    }
}
