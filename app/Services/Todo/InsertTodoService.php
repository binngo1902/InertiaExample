<?php
namespace App\Services\Todo;

use App\Repositories\Todo\TodoRepository;

class InsertTodoService
{
    protected $repository;

    public function __construct(TodoRepository $repository)
    {
        $this->repository = $repository;
    }

    public function handle($data)
    {
        return $this->repository->create($data);
    }
}