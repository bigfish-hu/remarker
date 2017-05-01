<?php

namespace App\GraphQL\Type;

use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Support\Type as BaseType;

/**
 * @SuppressWarnings(PHPMD.StaticAccess)
 */
class Feedback extends BaseType
{
    protected $attributes = [
        'name' => 'Feedback',
        'description' => 'A type'
    ];

    public function fields() : array
    {
        return [
            'id' => [
                'type' => Type::nonNull(Type::int()),
                'description' => 'The id of the feedback'
            ],
            'title' => [
                'type' => Type::nonNull(Type::string()),
                'description' => 'The title of the feedback'
            ],
            'description' => [
                'type' => Type::string(),
                'description' => 'The description of the feedback'
            ],
            'url' => [
                'type' => Type::nonNull(Type::string()),
                'description' => 'The url of the page the feedback sent from'
            ],
            'reporter_name' => [
                'type' => Type::string(),
                'description' => 'The name of the person who sent the feedback'
            ],
            'reporter_email' => [
                'type' => Type::string(),
                'description' => 'The email of the person who sent the feedback'
            ],
            'browser' => [
                'type' => Type::nonNull(Type::string()),
                'description' => 'The type of the browser the feedback sent from'
            ],
            'platform' => [
                'type' => Type::nonNull(Type::string()),
                'description' => 'The type of the os the feedback sent from'
            ],
            'user_agent' => [
                'type' => Type::nonNull(Type::string()),
                'description' => 'The full user agent'
            ],
            'screen_resolution' => [
                'type' => Type::nonNull(Type::string()),
                'description' => 'The resolution of the screen'
            ],
            'cookie_enabled' => [
                'type' => Type::nonNull(Type::boolean()),
                'description' => 'Are the cookies enabled'
            ],
            'project_id' => [
                'type' => Type::nonNull(Type::int()),
                'description' => 'The id of the project of which page the feedback sent from'
            ],
            'ext_user_id' => [
                'type' => Type::int(),
                'description' => 'The id of the external user to whom the feedback is assigned'
            ],
            'screenshot' => [
                'type' => Type::string(),
                'description' => 'The screenshot about the bug'
            ],
            'created_at' => [
                'type' => Type::string(),
                'description' => 'The time of the feedback\'s creation'
            ],
            'updated_at' => [
                'type' => Type::string(),
                'description' => 'The time of the feedback\'s last update'
            ]
        ];
    }
}
