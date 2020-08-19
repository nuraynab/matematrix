<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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
Route::post('registering', 'UserController@register')->name('user.register');

Route::post('logining', 'UserController@login')->name('user.login');

Route::post('logout', 'UserController@Logout');

Route::post('tutorRegister', 'TutorController@register')->name('tutor.register');

Route::get('tutorGetData', 'TutorController@getAllData')->name('tutor.getData');
