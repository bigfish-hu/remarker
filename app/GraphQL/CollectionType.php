<?php

namespace App\GraphQL;

use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Support\Type as BaseType;

/**
 * @SuppressWarnings(PHPMD.StaticAccess)
 */
abstract class CollectionType extends BaseType
{
    protected $collectionOf;

    public function fields()
    {
        return [
            'pageInfo' => [
                'name' => 'pageInfo',
                'type' => \GraphQL::type('PageInfo'),
                'resolve' => function (\Illuminate\Pagination\LengthAwarePaginator $root) {
                    return array_except($root->toArray(), ['data']);
                }
            ],
            'edges' => [
                'type' => Type::listOf(\GraphQL::type($this->collectionOf)),
                'resolve' => function (\Illuminate\Pagination\LengthAwarePaginator $root) {
                    return $root;
                }
            ]
        ];
    }
}
