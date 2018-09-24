<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('registrations','RegistrationController@index');

Route::get('registrations/{id}','RegistrationController@show');

Route::post('registration','RegistrationController@store');

Route::put('registration','RegistrationController@store');

Route::delete('registrations','RegistrationController@destroy');


Route::group([

    'prefix' => 'auth'

], function () {

    Route::post('login', 'AuthController@login')->name('login');
   // Route::post('login', [ 'as' => 'login', 'uses' => 'AuthController@login']);
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');

});