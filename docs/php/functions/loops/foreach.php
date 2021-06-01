<?php
include('service/variables.php');

//TODO boucle foreach
echo "<b>----- Boucle foreach -----</b>" . $paragraph;
$numbers_array = [1,2,3,4,5];

//TODO Récupérer chaque valeur du tableau
echo "<b>Récupérer chaque valeur du tableau</b>$line";
foreach($numbers_array as $number){
    echo $number . ' ';
}

//TODO Récupérer les clés/valeurs d'un tableau
echo $paragraph;
echo "<b>Récupérer les clés/valeurs d'un tableau</b>$line";
foreach ($numbers_array as $key => $number) {
    echo 'index ', $key, ' = ', $number, $line;
}
