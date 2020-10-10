<?php

require 'service/AutoLoader.php';
include("exercices/poo/includeRoles.php");

AutoLoader::getMainClass();

$merlin = new Character("Merlin", 'male');
$harry = new Wizard("Harry", 'male');
$jane = new Hunter("Jane", "female");

Debug::inspectElement([$merlin, $harry, $jane]);

echo Formatting::format_line($merlin->attack($harry), 1, 1);
if($harry->getIsDead()){
    echo $harry->name . " est mort :(";
} else {
    echo $harry->getRemainingLife();
}

echo Formatting::format_line($merlin->care(50, $harry), 2, 1);
echo Formatting::format_line($harry->getRemainingLife(), 0, 2);

?>