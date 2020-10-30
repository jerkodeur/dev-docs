<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MainController extends Controller
{
    public function home(){
        echo 'Bonjour';
    }

    function welcome($name = null){
        echo "Bonjour $name";
    }
}
