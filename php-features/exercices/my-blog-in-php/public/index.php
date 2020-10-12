<?php

require 'app/Autoloader.php';
App\AutoLoader::register();

if(isset($_GET['p']) && file_exists("pages/" . $_GET['p'] . '.php')){
    $p = $_GET['p'];
} else {
    $p = "home";
}

//TODO Store datas with ob_start
//? The datas would not displayed...

ob_start();
require "app/connect.php";
require "pages/$p.php";

//TODO Fetch the store datas of ob_start
$content = ob_get_clean();

require 'pages/templates/default.php';

?>