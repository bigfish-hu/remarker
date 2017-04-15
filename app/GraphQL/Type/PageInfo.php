<?php

namespace App\GraphQL\Type;

use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Support\Type as BaseType;

/**
 * @SuppressWarnings(PHPMD.StaticAccess)
 */
class PageInfo extends BaseType
{
    protected $attributes = [
        'name' => 'PageInfo',
        'description' => 'A type'
    ];

    public function fields()
    {
        return [
            'total' => [
                'type' => Type::int(),
                'description' => 'The total number of items'
            ],
            'per_page' => [
                'type' => Type::int(),
                'description' => 'The count on a page'
            ],
            'current_page' => [
                'type' => Type::int(),
                'description' => 'The current page'
            ],
            'last_page' => [
                'type' => Type::int(),
                'description' => 'The last page'
            ]
        ];
    }
}
