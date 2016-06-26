<?php

Route::get('/', function () {
    return view('index');
});

Route::get('api/js/{id}', 'PluginController@getJs');

Route::get('admin', 'AngularController@serveApp');

Route::post('createFeedback', 'Admin\FeedbackController@createFeedback');

Route::group(['prefix' => 'api'], function () {

    Route::post('auth/login', 'Auth\AuthController@postLogin');

    Route::group(['middleware' => 'jwt.refresh'], function () {

        Route::get('users/me', 'Auth\AuthController@getAuthenticatedUser');

        Route::get('/projects', 'Admin\ProjectController@getProjects');

        Route::get('/feedbacks', 'Admin\FeedbackController@getFeedbacks');
        Route::get('/feedbacks/{feedback}', 'Admin\FeedbackController@getFeedback');
        Route::delete('/feedbacks/{id}', 'Admin\FeedbackController@deleteFeedback');

        Route::group(['middleware' => 'admin'], function () {

            Route::get('/users/{id}', 'Admin\AdminController@getUser');
            Route::get('/users', 'Admin\AdminController@getUsers');
            Route::post('/users', 'Admin\AdminController@createUser');
            Route::put('/users/{id}', 'Admin\AdminController@updateUser');
            Route::delete('/users/{id}', 'Admin\AdminController@deleteUser');

            Route::get('/projects/{id}/users', 'Admin\ProjectController@getProjectUsers');
            Route::get('/projects/sync', 'Admin\ProjectController@getProjectsFromIssueTrackers');
            Route::delete('/projects/{project}/users/{user}', 'Admin\ProjectController@removeUserFromProject');
        });
    });
});
