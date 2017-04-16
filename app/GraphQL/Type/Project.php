<?php

namespace App\GraphQL\Type;

use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Support\Type as BaseType;
use GraphQL;

class Project extends BaseType
{
    protected $attributes = [
        'name' => 'Project',
        'description' => 'A type'
    ];

    public function fields()
    {
        return [
            
        ];
    }
}
