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

$this->get('api/js/{id}', 'PluginController@getJs');

$this->get('admin', 'AngularController@serveApp');

$this->post('api/feedbacks', 'Admin\FeedbackController@createFeedback');

$api->version('v1', function ($api) {
    $api->group(['middleware' => ['api']], function ($api) {
        $api->post('auth/login', 'App\Http\Controllers\Auth\AuthController@postLogin');

        // only registered users
        $api->group(['middleware' => ['api', 'api.auth']], function ($api) {
            $api->get('/home', 'AdminController@index');
            $api->get('users/me', 'App\Http\Controllers\Auth\AuthController@getAuthenticatedUser');

            // projects routes
            $api->get('/projects', 'ProjectController@getProjects');
            $api->get('/projects/{id}/users', 'ProjectController@getProjectUsers');
            $api->get('/projects/sync', 'ProjectController@getProjectsFromIssueTrackers');

            // feedbacks routes
            $api->get('/feedbacks', 'FeedbackController@getFeedbacks');
            $api->get('/feedbacks/{feedback}', function (App\Feedback $feedback) {
                return $feedback->toJson();
            });
            $api->delete('/feedbacks/{id}', 'FeedbackController@deleteFeedback');

            // view trackers list
            $api->get('/trackers', 'TrackerController@getTrackers');


//            $api->get('/users', 'App\Http\Controllers\Admin\AdminController@getUsers');

            // routes only an admin can use (who's also a registered user)
            $api->group(['middleware' => 'can:admin'], function ($api) {
                // create or modify user routes
//                $api->controller('users', 'UserController');
                $api->get('/users/{id}', 'App\Http\Controllers\Admin\AdminController@getUser');
                $api->get('/users', 'App\Http\Controllers\Admin\AdminController@getUsers');
                $api->post('/users', 'App\Http\Controllers\Admin\AdminController@createUser');
                $api->put('/users/{id}', 'App\Http\Controllers\Admin\AdminController@updateUser');
                $api->delete('/users/{id}', 'App\Http\Controllers\Admin\AdminController@deleteUser');

                //create or modify tracker routes
                $this->post('/trackers', 'App\Http\Controllers\Admin\TrackerController@createTracker');
                $this->put('/trackers/{id}', 'App\Http\Controllers\Admin\TrackerController@updateTracker');
                $this->delete('/trackers/{id}', 'App\Http\Controllers\Admin\TrackerController@deleteTracker');

                // create or modify project routes
                $api->post('/projects', 'App\Http\Controllers\Admin\ProjectController@createProject');
                $api->put('/projects/{id}', 'App\Http\Controllers\Admin\ProjectController@updateProject');
                $api->delete('/projects/{id}', 'App\Http\Controllers\Admin\ProjectController@deleteProject');
                $api->delete('/projects/{project}/users/{user}',
                    'App\Http\Controllers\Admin\ProjectController@removeUserFromProject');
            });
        });
    });
});
