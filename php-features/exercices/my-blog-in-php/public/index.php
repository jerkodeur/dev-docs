<?php

use App\Database;
use App\main\Debug;

require 'app/classes/Autoloader.php';
App\AutoLoader::register();

$db = new Database('blog_php', 'localhost', 'jerkoder', 'JP93@s12RT77');

if(isset($_GET['p']) && file_exists("pages/" . $_GET['p'] . '.php')){
    $p = $_GET['p'];
} else {
    $p = "home";
}

//TODO Store datas with ob_start
//? The datas would not displayed...

ob_start();

require "pages/$p.php";

//TODO Fetch the store datas of ob_start
$content = ob_get_clean();

require 'pages/templates/default.php';

?>