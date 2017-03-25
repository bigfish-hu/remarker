<?php

Route::get('/', function () {
    return view('index');
});

Route::get('api/js/{id}', 'PluginController@getJs');

Route::get('admin', 'AngularController@serveApp');

Route::post('createFeedback', 'FeedbackController@createFeedback');

// Manifest file
Route::get('admin/manifest.json', function () {
    return [
        'name' => config('app.name'),
        'gcm_sender_id' => config('services.gcm.sender_id')
    ];
});

Route::group(['prefix' => 'api'], function () {
    Route::post('auth/login', 'AuthController@postLogin');
    Route::post('auth/register', 'AuthController@registration');

    Route::group(['middleware' => 'jwt.refresh'], function () {
        Route::get('users/me', 'AuthController@getAuthenticatedUser');
        Route::put('users/me', 'AuthController@updateAuthenticatedUser');

        Route::get('/projects', 'ProjectController@getProjects');

        Route::get('/feedbacks', 'FeedbackController@getFeedbacks');
        Route::get('/feedbacks/{feedback}', 'FeedbackController@getFeedback');
        Route::put('/feedbacks/{feedback}', 'FeedbackController@updateFeedback');
        Route::delete('/feedbacks/{id}', 'FeedbackController@deleteFeedback');

        // Push Subscriptions
        Route::post('/subscriptions', 'PushSubscriptionController@update');
        Route::delete('/subscriptions/{endpoint}', 'PushSubscriptionController@destroy');

        Route::group(['middleware' => 'admin'], function () {
            Route::get('/users/{user_id}', 'AdminController@getUser');
            Route::get('/users', 'AdminController@getUsers');
            Route::post('/users', 'AdminController@createUser');
            Route::put('/users/{user_id}', 'AdminController@updateUser');
            Route::delete('/users/{user_id}', 'AdminController@deleteUser');

            Route::get('/projects/{id}/users', 'ProjectController@getProjectUsers');
            Route::get('/projects/sync', 'ProjectController@getProjectsFromIssueTrackers');
            Route::delete('/projects/{project}/users/{user}', 'ProjectController@removeUserFromProject');
        });
    });
});

Route::get('admin/{catchall}', 'AngularController@serveApp')->where('catchall', '(.*)');
