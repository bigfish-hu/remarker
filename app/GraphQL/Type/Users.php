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
            'user' => [
                'type' => Type::listOf(\GraphQL::type('User')),
                'args' => [
                    'id' => ['name' => 'id', 'type' => Type::int()],
                    'name' => ['name' => 'name', 'type' => Type::string()],
                    'email' => ['name' => 'email', 'type' => Type::string()],
                    'is_superadmin' => ['name' => 'is_superadmin', 'type' => Type::boolean()],
                ],
                'resolve' => function ($root) {
                    return $root->items();
                }
            ]
        ];
    }
}
