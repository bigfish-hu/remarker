<?php

namespace App\GraphQL\Type;

use App\GraphQL\CollectionType;
use GraphQL\Type\Definition\Type;

/**
 * @SuppressWarnings(PHPMD.StaticAccess)
 */
class Projects extends CollectionType
{
    protected $collectionOf = 'Project';

    protected $attributes = [
        'name' => 'Projects',
        'description' => 'A type'
    ];
}
