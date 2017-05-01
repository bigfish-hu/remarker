<?php

namespace App\GraphQL;

use App\User;
use Folklore\GraphQL\Support\Query as GraphQLQuery;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;
use Illuminate\Database\Eloquent\Builder;

/**
 * @SuppressWarnings(PHPMD.StaticAccess)
 * @SuppressWarnings(PHPMD.UnusedFormalParameter)
 */
abstract class Query extends GraphQLQuery
{
    protected $relations;

    public function args()
    {
        return $this->getTypeArguments() + $this->getPaginationArguments();
    }

    public function resolve($root, $args, $context, ResolveInfo $info)
    {
        $query = $this->getQuery();

        if (empty($args)) {
            return $query->get();
        }

        $page = array_get($args, 'page', 1);
        $perPage = array_get($args, 'perPage', 10);

        foreach (array_keys($this->getTypeArguments()) as $argument) {
            if (isset($args[$argument])) {
                $query->where($argument, $args[$argument]);
            }
        }

        return $query->paginate($perPage, ['*'], 'page', $page);
    }

    abstract protected function getTypeArguments() : array;

    abstract protected function getQuery() : Builder;

    protected function getPaginationArguments() : array
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
}
