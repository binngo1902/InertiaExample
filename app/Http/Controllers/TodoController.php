<?php

namespace App\Http\Controllers;

use App\Http\Requests\Todo\InsertTodoRequest;
use App\Services\Todo\InsertTodoService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TodoController extends Controller
{
    //
    public function index()
    {
        return Inertia::render('Todo/Index');
    }

    public function insert(InsertTodoRequest $request)
    {
        resolve(InsertTodoService::class)->handle($request->validated());
        return back()->with('message', 'Todo created successfully');
    }
}
