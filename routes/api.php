<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\IngredientController;
use App\Http\Controllers\RecipeController;
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

require __DIR__.'/auth.php';

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

/*
| ----------------
| Ingredient routes 
| -----------------
*/
Route::get('/ingredient/all',[IngredientController::class, 'all']);

/*
| ----------------
| Recipe routes 
| -----------------
*/

Route::get('/recipe/all',[RecipeController::class, 'all']);