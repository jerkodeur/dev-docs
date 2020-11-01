<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'slug'];

    protected $connection  = 'mysql';

    protected $cast =[
        'created_at' => 'timestamp',
        'updated_at' => 'timestamp',
    ];
}
