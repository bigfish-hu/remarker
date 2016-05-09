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

$this->get('/', function(){
    return view('index');
});

Route::group(['prefix' => 'api', 'namespace' => 'Api'], function () {
    $this->get('/js/{id}', 'ApiController@getJs');
    $this->post('/project/{id}', 'ApiController@createFeedback');
});


Route::group(['prefix' => 'admin'], function () {

    // Routes which everyone can use
    $this->get('/', 'Auth\AuthController@showLoginForm');
    $this->post('/login', 'Auth\AuthController@login');
    $this->get('/logout', 'Auth\AuthController@logout');


    // only registered users
    Route::group(['middleware' => 'auth', 'namespace' => 'Admin'], function(){
        $this->get('/home', 'AdminController@index');

        // projects routes
        $this->get('/projects', 'ProjectController@getProjects');
        $this->get('/projects/{id}/users', 'ProjectController@getProjectUsers');


        // feedbacks routes
        $this->get('/feedbacks', 'FeedbackController@getFeedbacks');
        $this->get('/feedbacks/{feedback}', function (App\Feedback $feedback) {
            return $feedback->toJson();
        });
        $this->delete('/feedbacks/{id}', 'FeedbackController@deleteFeedback');


        // view trackers list
        $this->get('/trackers', 'TrackerController@getTrackers');

        // view users list
        $this->get('/users', 'AdminController@getUsers');

    });

    // routes only an admin can use (who's also a registered user)
    Route::group(['namespace' => 'Admin'], function(){
        // create or modify user routes
        $this->post('/users', 'AdminController@createUser');
        $this->put('/users/{id}', 'AdminController@updateUser');
        $this->delete('/users/{id}', 'AdminController@deleteUser');

        //create or modify tracker routes
        $this->post('/trackers', 'TrackerController@createTracker');
        $this->put('/trackers/{id}', 'TrackerController@updateTracker');
        $this->delete('/trackers/{id}', 'TrackerController@deleteTracker');

        //create or modify project routes
        $this->post('/projects', 'ProjectController@createProject');
        $this->put('/projects/{id}', 'ProjectController@updateProject');
        $this->delete('/projects/{id}', 'ProjectController@deleteProject');
        $this->delete('/projects/{project}/users/{user}', 'ProjectController@removeUserFromProject');
        $this->get('/projects/sync', 'ProjectController@getProjectsFromIssueTrackers');
    });
});








