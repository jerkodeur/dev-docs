<?php
$paragraph = '<br /><br />';
$line = '<br />';

//TODO array_sum() | Calculer la somme des valeurs d'un tableau
echo "<b>----- Calculer la somme des valeurs d'un tableau -----</b>" . $paragraph;

$numbers_array = [1,2,3,4,5];
echo '[1,2,3,4,5]', $line;

$sum = array_sum($numbers_array);
echo "Résultat: <b>$sum</b>";


$paragraph;
//TODO Fusionner deux tableaux
echo "<b>----- Fusionner deux tableaux -----</b>" . $paragraph;

$array1 = [1,2,3];
$array2 = [4,5,6];

echo var_dump($array1 + $array2);