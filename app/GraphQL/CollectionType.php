<?php

namespace App\GraphQL;

use Folklore\GraphQL\Support\Type as BaseType;

/**
 * @SuppressWarnings(PHPMD.StaticAccess)
 */
abstract class CollectionType extends BaseType
{
    public function fields()
    {
        return [
            'pageInfo' => [
                'name' => 'pageInfo',
                'type' => \GraphQL::type('PageInfo'),
                'resolve' => function (\Illuminate\Contracts\Support\Arrayable $root) {
                    return array_except($root->toArray(), ['data']);
                }
            ]
        ];
    }
}
