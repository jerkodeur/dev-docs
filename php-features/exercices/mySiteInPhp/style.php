<?php
header('content-type: text/css');

require "scssphp/scss.inc.php";
$scss = new scssc();
$scss->setImportPaths("scss");

echo $scss->compile('@import "style.scss"');
