<?php

use App\Http\Controllers\CategoriesController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\MainController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

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


Auth::routes();

Route::get('/', [MainController::class, 'home'])->name('home');
Route::get('/home/{name?}', [MainController::class, 'home'])->name('home');
// Route::apiResource('/categories', CategoriesController::class);
// Route::get('/categories/{category}', [CategoriesController::class, 'show']);
// Route::post('/categories', [CategoriesController::class, 'store']);
