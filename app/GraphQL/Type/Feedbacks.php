<?php

namespace App\GraphQL\Type;

use App\GraphQL\CollectionType;
use GraphQL\Type\Definition\Type;

/**
 * @SuppressWarnings(PHPMD.StaticAccess)
 */
class Feedbacks extends CollectionType
{
    protected $collectionOf = 'Feedback';

    protected $attributes = [
        'name' => 'Feedbacks',
        'description' => 'A type'
    ];
}
