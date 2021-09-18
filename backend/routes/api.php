<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\ClientController;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::prefix('client')->group(function () {
    Route::get('/',[ ClientController::class, 'getAll']);
    Route::post('/',[ ClientController::class, 'create']);
    Route::delete('/{id}',[ ClientController::class, 'delete']);
    Route::get('/{id}',[ ClientController::class, 'get']);
    Route::put('/{id}',[ ClientController::class, 'update']);
});
