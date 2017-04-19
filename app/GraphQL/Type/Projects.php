<?php

namespace App\GraphQL\Type;

use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Support\Type as BaseType;
use GraphQL;

/**
 * @SuppressWarnings(PHPMD.StaticAccess)
 */
class Projects extends BaseType
{
    protected $attributes = [
        'name' => 'Projects',
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
                'type' => Type::listOf(\GraphQL::type('Project')),
                'resolve' => function ($root) {
                    return $root->items();
                }
            ]
        ];
    }
}
