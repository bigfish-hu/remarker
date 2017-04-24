<?php

namespace App\GraphQL\Query;

use App\User;
use App\GraphQL\Query;
use GraphQL\Type\Definition\Type;
use GraphQL;

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

    /**
     * @return \App\GraphQL\Type\Users
     */
    public function type()
    {
        return GraphQL::type('Users');
    }

    /**
     * @return array
     */
    protected function getArguments()
    {
        return [
            'id' => ['name' => 'id', 'type' => Type::int()],
            'name' => ['name' => 'name', 'type' => Type::string()],
            'email' => ['name' => 'email', 'type' => Type::string()],
            'is_superadmin' => ['name' => 'is_superadmin', 'type' => Type::boolean()]
        ];
    }

    /**
     * @return \Illuminate\Database\Eloquent\Builder
     */
    protected function getQuery()
    {
        return User::query();
    }
}
