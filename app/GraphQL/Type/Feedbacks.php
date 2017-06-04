<?php

namespace App\GraphQL\Type;

use GraphQL\Type\Definition\Type;
use App\GraphQL\CollectionType;

/**
 * @SuppressWarnings(PHPMD.StaticAccess)
 */
class Feedbacks extends CollectionType
{
    protected $collectionOf = 'Feedback';

    protected $attributes = [
        'name' => 'Feedbacks',
        'description' => 'A type'
    ];

    public function fields() : array
    {
        return parent::fields() + [
            'edges' => [
                'type' => Type::listOf(\GraphQL::type('Feedback')),
                'resolve' => function ($root) {
                    return $root;
                }
            ]
        ];
    }
}
