<?php

use App\Http\Controllers\Auth\LoginUserController;
use App\Http\Controllers\Auth\RegisterUserController;
use App\Http\Controllers\CarController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;



Route::get('/login', [LoginUserController::class, 'create'])->name('login');

Route::post('/login', [LoginUserController::class, 'store']);

Route::post('/logout', [LoginUserController::class, 'destroy'])->name('logout');

Route::get('/register', [RegisterUserController::class, 'create'])->name('register');
Route::post('/register', [RegisterUserController::class, 'store']);

Route::get('/forgot-password', function (){
    return Inertia::render('Auth/ForgotPassword');
});

Route::get('/', function () {
    return Inertia::render('AppPages/Home/HomePage');
});
Route::get('/about', function () {
    return Inertia::render('AppPages/About/AboutPage');
});
Route::get('/cars', [CarController::class, 'index'])->name('cars.index');
Route::delete('/cars/{car}', [CarController::class, 'destroy'])->name('cars.destroy');
Route::get('/newcar', [CarController::class, 'create'])->name('newcar');
Route::post('/newcar', [CarController::class, 'store'])->name('newcar.store');

