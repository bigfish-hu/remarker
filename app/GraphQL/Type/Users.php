<?php

namespace App\GraphQL\Type;

use App\GraphQL\CollectionType;

/**
 * @SuppressWarnings(PHPMD.StaticAccess)
 */
class Users extends CollectionType
{
    protected $collectionOf = 'User';

    protected $attributes = [
        'name' => 'Users',
        'description' => 'A collection of users with pagination information'
    ];
}
