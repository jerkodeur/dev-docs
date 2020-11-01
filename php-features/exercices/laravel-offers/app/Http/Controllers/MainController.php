<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MainController extends Controller
{
    public function home($name = null){
        $message = "Bienvenue $name sur mon site de petites annonces avec Laravel";
        return view('home', compact('message'));
    }
}
