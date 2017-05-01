<?php

namespace App\GraphQL\Query;

use App\User;
use App\GraphQL\Query;
use GraphQL\Type\Definition\Type;
use GraphQL;
use Illuminate\Database\Eloquent\Builder;
use GraphQL\Type\Definition\ObjectType;

/**
 * @SuppressWarnings(PHPMD.StaticAccess)
 */
class Users extends Query
{
    protected $relations = ['projects'];

    protected $attributes = [
        'name' => 'Users',
        'description' => 'A query returning a set of users'
    ];

    public function type() : ObjectType
    {
        return GraphQL::type('Users');
    }

    protected function getTypeArguments() : array
    {
        return [
            'id' => ['name' => 'id', 'type' => Type::int()],
            'name' => ['name' => 'name', 'type' => Type::string()],
            'email' => ['name' => 'email', 'type' => Type::string()],
            'is_superadmin' => ['name' => 'is_superadmin', 'type' => Type::boolean()]
        ];
    }

    protected function getQuery() : Builder
    {
        return User::query();
    }
}
