<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\JobController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});



Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');



    //  create tasks route 
    // Route::get('/task', [TaskController::class, 'index'])->name('task.index');
    //  Route::post('/task/store', [TaskController::class, 'store'])->name('task.store');
    //  Route::patch('/tasks/{task}/toggle', [TaskController::class, 'toggle'])->name('task.toggle');
    //  Route::delete('/task/destroy/{id}', [TaskController::class, 'destroy'])->name('task.destroy');
   
      //  create tasks route 
    
      Route::get('/job', [JobController::class, 'index'])->name('job.index');
      Route::post('/job/store', [JobController::class, 'store'])->name('job.store');
      Route::delete('/job/{id}', [JobController::class, 'destroy'])->name('job.destroy');
      Route::put('/job/{id}', [JobController::class, 'update'])->name('job.update');
     




  
   
    


});
  


require __DIR__.'/auth.php';
