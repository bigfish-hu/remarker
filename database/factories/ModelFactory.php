<?php

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

$factory->defineAs(App\User::class, 'admin', function () {
    return [
        'name' => 'admin',
        'email' => 'admin@remarker.com',
        'password' => 'secret',
        'created_at' => \Carbon\Carbon::now(),
        'is_superadmin' => true,
    ];
});

$factory->defineAs(App\User::class, 'user', function () {
    return [
        'name' => 'user',
        'email' => 'user@remarker.com',
        'password' => 'secret',
        'created_at' => \Carbon\Carbon::now(),
        'is_superadmin' => false
    ];
});

$factory->define(App\ExtUser::class, function (Faker\Generator $faker) {
    return [
        'issue_tracker_id' => $faker->randomElement(['jira', 'redmine']),
        'key' => $faker->userName,
        'login_name' => $faker->userName,
        'display_name' => $faker->name,
        'created_at' => \Carbon\Carbon::now(),
    ];
});

$factory->define(App\Feedback::class, function (Faker\Generator $faker) {
    return [
        'title' => $faker->sentence(),
        'description' => $faker->paragraph(),
        'url' => $faker->randomElement(['test01', 'test02', 'test03']),
        'reporter_name' => $faker->name,
        'reporter_email' => $faker->email,
        'browser' => $faker->randomElement(['Internet Explorer', 'Firefox', 'Chrome', 'Opera']),
        'platform' => $faker->randomElement(['Windows', 'Linux', 'OSX', 'Android', 'iOS']),
        'user_agent' => $faker->userAgent,
        'screen_resolution' => $faker->randomElement(['640x480', '1024x764', '1280x800', '1280x768']),
        'cookie_enabled' => $faker->boolean(),
        'project_id' => $faker->randomElement([1, 2, 3]),
        'created_at' => $faker->dateTimeThisYear(),
        'screenshot' => 'data:image/png;base64,'.base64_encode(fread(fopen(__DIR__.'/../cat.png', 'r'), filesize(__DIR__.'/../cat.png')))
    ];
});

$factory->defineAs(\App\Project::class, 'project1', function () {
    return [
        'name' => 'project1',
        'ext_id' => 11,
        'issue_tracker' => 'redmine',
        'is_automatic_notification' => false,
    ];
});

$factory->defineAs(\App\Project::class, 'project2', function () {
    return [
        'name' => 'project2',
        'ext_id' => 12,
        'issue_tracker' => 'jira',
        'is_automatic_notification' => true,
    ];
});

$factory->defineAs(\App\Project::class, 'project3', function () {
    return [
        'name' => 'project3',
        'ext_id' => 13,
        'issue_tracker' => 'mantis',
        'is_automatic_notification' => false,
    ];
});
