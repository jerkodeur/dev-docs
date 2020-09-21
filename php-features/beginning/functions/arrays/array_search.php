<?php
include('service/variables.php');

//TODO in_array() | Vérifier la présence d'une valeur dans un tableau
echo "<b>----- Vérifier la présence d'une valeur dans un tableau -----</b>" . $paragraph;

$arrays = ['Tomate', 'Carotte', 'Navet'];
echo in_array('Tomate', $arrays), $line; // 1
echo var_dump(in_array('Choux', $arrays)); // bool(false)

echo $paragraph;