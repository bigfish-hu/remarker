<?php

use Interop\Container\ContainerInterface;
use DI\Container;
use Src\Base\Config\Config;
use Src\Feedback\Domain\ProjectRepositoryInterface;
use Src\Feedback\Infrastructure\Eloquent\EloquentProjectRepository;

return [
    ContainerInterface::class => DI\get(Container::class),

    Config::class => function (Container $c) {
        return new Config();
    },

    ProjectRepositoryInterface::class => DI\get(EloquentProjectRepository::class),
];
