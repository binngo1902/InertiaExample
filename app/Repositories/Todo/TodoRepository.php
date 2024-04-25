<?php 

namespace App\Repositories\Todo;

use App\Repositories\BaseRepository;

class TodoRepository extends BaseRepository
{
    public function getModel()
    {
        return \App\Models\Todo::class;
    }


}