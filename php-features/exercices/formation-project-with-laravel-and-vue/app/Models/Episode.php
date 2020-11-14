<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Course;

class Episode extends Model
{
    use HasFactory;

    public function course() {
        return $this->belongsTo(Course::class);
    }

    public function users() {
        return $this->belongsToMany(USER::class, 'completions', 'episode_id', 'user_id');
    }
}
