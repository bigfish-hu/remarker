<?php

namespace App\GraphQL\Type;

use GraphQL\Type\Definition\Type;
use App\GraphQL\CollectionType;
use GraphQL\Type\Definition\ResolveInfo;

/**
 * @SuppressWarnings(PHPMD.StaticAccess)
 */
class Projects extends CollectionType
{
    protected $attributes = [
        'name' => 'Projects',
        'description' => 'A type'
    ];

    public function fields()
    {
        return parent::fields() + [
            'edges' => [
                'type' => Type::listOf(\GraphQL::type('Project')),
                'resolve' => function ($root) {
                    return $root;
                }
            ]
        ];
    }
}
