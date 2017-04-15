<?php

namespace App\GraphQL\Query;

use App\User;
use Folklore\GraphQL\Support\Query;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;
use GraphQL;

/**
 * @SuppressWarnings(PHPMD.StaticAccess)
 */
class Users extends Query
{
    protected $attributes = [
        'name' => 'Users',
        'description' => 'A query returning a set of users'
    ];

    public function type()
    {
        return GraphQL::type('Users');
    }

    public function args()
    {
        return [
            'id' => ['name' => 'id', 'type' => Type::int()],
            'name' => ['name' => 'name', 'type' => Type::string()],
            'email' => ['name' => 'email', 'type' => Type::string()],
            'is_superadmin' => ['name' => 'is_superadmin', 'type' => Type::boolean()],
            'page' => [
                'name' => 'page',
                'description' => 'The number of the queried page',
                'type' => Type::int()
            ],
            'perPage' => [
                'name' => 'perPage',
                'description' => 'The number of items per page',
                'type' => Type::int()
            ]
        ];
    }

    public function resolve($root, $args, $context, ResolveInfo $info)
    {
        $page = array_get($args, 'page', 1);
        $perPage = array_get($args, 'perPage', 10);

        if (isset($args['id'])) {
            return User::query()->where('id', $args['id'])->paginate($perPage, ['*'], 'page', $page);
        } elseif (isset($args['email'])) {
            return User::query()->where('email', $args['email'])->paginate($perPage, ['*'], 'page', $page);
        } else {
            return User::query()->paginate($perPage, ['*'], 'page', $page);
        }
    }
}
