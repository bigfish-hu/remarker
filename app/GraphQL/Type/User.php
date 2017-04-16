<?php

namespace App\GraphQL\Type;

use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Support\Type as BaseType;

/**
 * @SuppressWarnings(PHPMD.StaticAccess)
 */
class User extends BaseType
{
    protected $attributes = [
        'name' => 'User',
        'description' => 'A type'
    ];

    public function fields()
    {
        return [
            'id' => [
                'type' => Type::nonNull(Type::int()),
                'description' => 'The id of the user'
            ],
            'name' => [
                'type' => Type::nonNull(Type::string()),
                'description' => 'The name of user'
            ],
            'email' => [
                'type' => Type::nonNull(Type::string()),
                'description' => 'The email of user'
            ],
            'is_superadmin' => [
                'type' => Type::boolean(),
                'description' => 'The field representing if the user is a superadmin'
            ]
        ];
    }
}
