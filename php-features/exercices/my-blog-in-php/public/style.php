<?php
header('content-type: text/css');

require "../resources/scssphp/scss.inc.php";
$scss = new scssc();
$scss->setImportPaths("scss");

echo $scss->compile('@import "style.scss"');

?>
