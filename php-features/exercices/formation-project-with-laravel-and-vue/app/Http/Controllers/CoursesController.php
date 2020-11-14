<?php

namespace App\Http\Controllers;

use App\Models\Course;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class CoursesController extends Controller
{
    protected function index() {
        $courses = Course::with('user')
        ->select('courses.*', DB::raw(
            '(SELECT COUNT(DISTINCT(user_id))
                FROM completions c
                INNER JOIN episodes ep
                ON ep.id = c.episode_id
                WHERE ep.course_id = courses.id) AS participants'
        ))
        ->withCount('episodes')->latest()->get();

        return Inertia::render('Courses/Index', [
            'courses' => $courses
        ]);
    }

    protected function show($course){
        $course = Course::where('id', $course)->with('episodes')->first();
        $watched = auth()->user()->episodes;

        return Inertia::render('Courses/Show', [
            'course' => $course,
            'watched' => $watched
        ]);
    }

    protected function new() {
        return Inertia::render('Courses/Create');
    }

    protected function progress(Request $request){
        $id = $request->input('episode');
        $user = auth()->user(); // recover the connect user

        $user->episodes()->toggle($id);

        return $user->episodes;
    }
}
