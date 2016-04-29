<?php

use DI\ContainerBuilder;

require_once("bootstrap_common.php");

// DI CONTAINER
$builder = new ContainerBuilder();
$builder->useAnnotations(true);
$builder->addDefinitions(__DIR__ . "/container.php");
$container = $builder->build();
