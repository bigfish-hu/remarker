<?php

namespace App\GraphQL\Type;

use Folklore\GraphQL\Support\Facades\GraphQL;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Support\Type as BaseType;

/**
 * @SuppressWarnings(PHPMD.StaticAccess)
 * @SuppressWarnings(PHPMD.UnusedFormalParameter)
 */
class User extends BaseType
{
    protected $attributes = [
        'name' => 'User',
        'description' => 'A type'
    ];

    public function fields() : array
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
            ],
            'created_at' => [
                'type' => Type::string(),
                'description' => 'The time of the user\'s creation'
            ],
            'updated_at' => [
                'type' => Type::string(),
                'description' => 'The time of the user\'s last update'
            ],
            'projects' => [
                'type' => GraphQL::type('Projects'),
                'description' => 'The projects the user has access to',
                'args' => [
                    'perPage' => [
                        'type' => Type::int(),
                        'description' => 'paginate'
                    ],
                    'page' => [
                        'type' => Type::int(),
                        'description' => 'The number of the queried page'
                    ],
                ],
            ],
        ];
    }

    /**
     * @param \App\User $root
     * @param array|null $args
     * @param array|null $context
     * @param ResolveInfo $info
     * @return \Illuminate\Database\Eloquent\Collection|\Illuminate\Contracts\Pagination\LengthAwarePaginator
     */
    public function resolveProjectsField(\App\User $root, $args, $context, ResolveInfo $info)
    {
        $page = array_get($args, 'page', 1);
        $perPage = array_get($args, 'perPage', 10);

        if (isset($args['perPage']) || isset($args['page'])) {
            return  $root->projects()->paginate($perPage, ['*'], 'page', $page);
        }

        return $root->projects()->get();
    }
}
