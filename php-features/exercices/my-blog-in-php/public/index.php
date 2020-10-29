<?php

use App\Database;

require 'Classes/AutoLoader.php';
App\AutoLoader::register();

include "autoload_env.php"; // Load the Environment variables

$db = new Database();

if(isset($_GET['p']) && file_exists("Pages/" . $_GET['p'] . '.php')){
    $p = $_GET['p'];
} else {
    $p = "home";
}

//TODO Store datas with ob_start
//? The datas would not displayed...

ob_start();

require "Pages/$p.php";

//TODO Fetch the store datas of ob_start
$content = ob_get_clean();

require 'Pages/templates/default.php';

?>