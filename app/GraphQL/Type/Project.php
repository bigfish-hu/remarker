<?php

namespace App\GraphQL\Type;

use Folklore\GraphQL\Support\Facades\GraphQL;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Support\Type as BaseType;

/**
 * @SuppressWarnings(PHPMD.StaticAccess)
 * @SuppressWarnings(PHPMD.UnusedFormalParameter)
 */
class Project extends BaseType
{
    protected $attributes = [
        'name' => 'Project',
        'description' => 'A type'
    ];

    public function fields() : array
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
                'type' => GraphQL::type('Feedbacks'),
                'description' => 'The feedbacks belonging to the project',
                'args' => [
                    'perPage' => [
                        'type' => Type::int(),
                        'description' => 'paginate',
                    ],
                    'page' => [
                        'type' => Type::int(),
                        'description' => 'The number of the queried page'
                    ],
                ],
            ]
        ];
    }

    /**
     * @param \App\Project $root
     * @param array|null $args
     * @param array|null $context
     * @param ResolveInfo $info
     * @return \Illuminate\Database\Eloquent\Collection|\Illuminate\Contracts\Pagination\LengthAwarePaginator
     */
    public function resolveFeedbacksField(\App\Project $root, $args, $context, ResolveInfo $info)
    {
        $page = array_get($args, 'page', 1);
        $perPage = array_get($args, 'perPage', 10);

        if (isset($args['perPage']) || isset($args['page'])) {
            return  $root->feedbacks()->paginate($perPage, ['*'], 'page', $page);
        }

        return $root->feedbacks()->get();
    }
}
