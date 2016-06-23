<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/
$api = app('Dingo\Api\Routing\Router');

$this->get('/', function () {
    return view('index');
});

//Route::get('/api/authenticate/user', 'Auth\AuthController@getAuthenticatedUser');

$this->get('api/js/{id}', 'PluginController@getJs');

$this->get('admin', 'AngularController@serveApp');


$api->version('v1', function ($api) {
    $api->post('auth/login', ['uses' => 'App\Http\Controllers\Auth\AuthController@postLogin']);


    $api->group(['middleware' => ['web']], function ($api) {
        $api->post('/feedbacks', 'App\Http\Controllers\Admin\FeedbackController@createFeedback');
    });

    $api->group(['middleware' => ['api']], function ($api) {


        // Routes which everyone can use
//    $this->post('/login', 'Auth\AuthController@login');
//    $this->get('/logout', 'Auth\AuthController@logout');


        // only registered users
        $api->group(['middleware' => 'auth', 'namespace' => 'Admin'], function ($api) {
            $api->get('/home', 'AdminController@index');

            // projects routes
            $api->get('/projects', 'ProjectController@getProjects');
            $api->get('/projects/{id}/users', 'ProjectController@getProjectUsers');


            // feedbacks routes
            $api->get('/feedbacks', 'FeedbackController@getFeedbacks');
            $api->get('/feedbacks/{feedback}', function (App\Feedback $feedback) {
                return $feedback->toJson();
            });
            $api->delete('/feedbacks/{id}', 'FeedbackController@deleteFeedback');


            // view trackers list
            $api->get('/trackers', 'TrackerController@getTrackers');

            // view users list
            $api->get('/users', 'AdminController@getUsers');

        });

        // routes only an admin can use (who's also a registered user)
        $api->group(['namespace' => 'Admin'], function ($api) {
            // create or modify user routes
            $api->post('/users', 'AdminController@createUser');
            $api->put('/users/{id}', 'AdminController@updateUser');
            $api->delete('/users/{id}', 'AdminController@deleteUser');

//        //create or modify tracker routes
//        $this->post('/trackers', 'TrackerController@createTracker');
//        $this->put('/trackers/{id}', 'TrackerController@updateTracker');
//        $this->delete('/trackers/{id}', 'TrackerController@deleteTracker');

            //create or modify project routes
            $api->post('/projects', 'ProjectController@createProject');
            $api->put('/projects/{id}', 'ProjectController@updateProject');
            $api->delete('/projects/{id}', 'ProjectController@deleteProject');
            $api->delete('/projects/{project}/users/{user}', 'ProjectController@removeUserFromProject');
            $api->get('/projects/sync', 'ProjectController@getProjectsFromIssueTrackers');
        });
    });
});
