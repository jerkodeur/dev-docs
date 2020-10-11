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

//TODO array_pop() | Supprime le dernier élément d'un tableau

//TODO array_diff()
//* Compare le tableau array1 avec un ou plusieurs tableaux et retourne les valeurs du tableau array1 qui ne sont pas présentes dans les autres tableaux.

$array1 = [1, 2, 3, 4, 5];
$arrays2 = [1, 3, 5, 6];

echo var_dump(array_diff($array1, $arrays2)); // [2, 4]