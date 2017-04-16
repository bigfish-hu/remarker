<?php

namespace App\GraphQL;

use App\User;
use Folklore\GraphQL\Support\Query as GraphQLQuery;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;

/**
 * @SuppressWarnings(PHPMD.StaticAccess)
 */
abstract class Query extends GraphQLQuery
{
    public function args()
    {
        return [
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
        $query = User::query();

        if (empty($args)) {
            return $query->paginate($perPage, ['*'], 'page', $page);
        }

        foreach (array_keys($this->getArguments()) as $argument) {
            if (isset($args[$argument])) {
                $query->where($argument, $args[$argument]);
            }
        }

        return $query->paginate($perPage, ['*'], 'page', $page);
    }

    abstract protected function getArguments();
}
