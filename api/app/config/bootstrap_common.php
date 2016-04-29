<?php

// DEFINITIONS
define("APP_ENV", getenv("APP_ENV"));
define("APP_MODE", getenv("APP_ENV") === "dev" ? "dev" : "prod");
define("PROJECT_ROOT", getenv("API_PROJECT_ROOT"));

// INCLUDES
require_once(PROJECT_ROOT . "/vendor/autoload.php");
require_once("global_function.php");
