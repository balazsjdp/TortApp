<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


require __DIR__.'/auth.php';

Auth::routes();

Route::get('/', function () {
    return view('welcome');
});


Route::get("/recipes", function() {
    return view('recipes');
})->middleware(['auth'])->name('recipes');


Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth'])->name('dashboard');

Route::get('/ingredients', function () {
    return view('ingredients');
})->middleware(['auth'])->name('ingredients');