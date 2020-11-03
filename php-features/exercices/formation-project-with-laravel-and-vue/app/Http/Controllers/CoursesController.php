<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\Episode;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CoursesController extends Controller
{
    protected function index() {
        $courses = Course::with('user')->withCount('episodes')->get();

        return Inertia::render('Courses/index', [
            'courses' => $courses
        ]);
    }

    protected function show($course){
        $course = Course::where('id', $course)->with('episodes')->first();
        return Inertia::render('Courses/show', [
            'course' => $course
        ]);
    }
}
