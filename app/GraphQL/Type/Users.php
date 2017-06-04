<?php

namespace App\GraphQL\Type;

use GraphQL\Type\Definition\Type;
use App\GraphQL\CollectionType;
use GraphQL\Type\Definition\ResolveInfo;

/**
 * @SuppressWarnings(PHPMD.StaticAccess)
 */
class Users extends CollectionType
{
    protected $attributes = [
        'name' => 'Users',
        'description' => 'A collection of users with pagination information'
    ];

    public function fields() : array
    {
        return parent::fields() + [
            'edges' => [
                'type' => Type::listOf(\GraphQL::type('User')),
                'resolve' => function ($root) {
                    return $root;
                }
            ]
        ];
    }
}
