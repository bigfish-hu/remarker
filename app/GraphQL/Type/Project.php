<?php

namespace App\GraphQL\Type;

use Folklore\GraphQL\Support\Facades\GraphQL;
use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Support\Type as BaseType;

/**
 * @SuppressWarnings(PHPMD.StaticAccess)
 */
class Project extends BaseType
{
    protected $attributes = [
        'name' => 'Project',
        'description' => 'A type'
    ];

    public function fields()
    {
        return [
            'id' => [
                'type' => Type::nonNull(Type::int()),
                'description' => 'The id of the project'
            ],
            'name' => [
                'type' => Type::nonNull(Type::string()),
                'description' => 'The name of the project'
            ],
            'ext_id' => [
                'type' => Type::nonNull(Type::int()),
                'description' => 'The external (issue tracker) id of the project'
            ],
            'issue_tracker' => [
                'type' => Type::nonNull(Type::int()),
                'description' => 'The external (issue tracker) id of the project'
            ],
            'is_automatic_notification' => [
                'type' => Type::nonNull(Type::boolean()),
                'description' => 'Are notifications sent automatically when there is a new feedback'
            ],
            'created_at' => [
                'type' => Type::string(),
                'description' => 'The time of the project\'s creation'
            ],
            'updated_at' => [
                'type' => Type::string(),
                'description' => 'The time of the project\'s last update'
            ],
            'feedbacks' => [
                'type' => Type::listOf(GraphQL::type('Feedback')),
                'description' => 'The feedbacks belonging to the project',
            ]
        ];
    }
}
