<?php
$paragraph = '<br /><br />';
$line = '<br />';

//TODO Les tableaux
//? http://php.net/manual/fr/language.types.array.php

//TODO Déclarer un tableau
echo '----- Déclarer un tableau -----' . $line;
// Structure de langage array
$arrays = array('Cerf', 'Cheval', 'Rhinocéros');
// Syntaxe courte (depuis PHP 5.4)
$tables = ['Tomate', 'Carotte', 'Navet'];

// Voir le contenu du tableau et ses index et la longueur de chaque champ
//? https://www.php.net/manual/fr/function.var-dump.php
echo var_dump($arrays) . $line;
echo var_dump($tables) . $line;

echo $arrays[0] . ' ' . $arrays[1] . ' ' . $arrays[2];

echo $paragraph;
//TODO Ajouter une valeur au tableau
echo '----- Ajouter une valeur au tableau -----' . $line;
$tables[] = 'Pommes de terre';
echo var_dump($tables);

echo $paragraph;
//TODO Tableau associatif
echo '----- Tableau associatif -----' . $line;
$newTables = [];
$newTables['sport1'] = 'Football';
$newTables['sport2'] = 'handball';
$newTables['sport3'] = 'Basket-ball';

var_dump($newTables);

echo $paragraph;
//TODO Assigner une nouvelle valeur
echo '----- Assigner une nouvelle valeur -----' . $line;
// Si l'index existe déjà, la valeur est remplacée, sinon un nouvel élément est ajouté au tableau
$newTables['sport1'] = 'Sport de branc';

var_dump($newTables);

echo $paragraph;
//TODO Les tableaux multidimensionnel
echo '----- Les tableaux multidimensionnel -----' . $line;
// Permet d'embriquer des tableaux dans des tableaux
//?
$got = [];
$got['Lannister'] = ['Tyrion', 'Jaime', 'sabre'];
$got['Stark'] = ['Rob', 'Ned', 'Catelyn'];
$got['Targaryen'] = ['Daenerys'];

var_dump($got); echo $line;
echo $got['Stark'][1]; // Ned

echo $paragraph;
//TODO count() | Compter le nombre d'éléments d'un tableau
echo '----- Compter le nombre d\'éléments d\'un tableau -----' . $line;
echo count($got) . $line; // 3
echo count(($got['Targaryen'])); // 1

echo $paragraph;
//TODO array_column() | Retourner les valeurs d'un tableau multidimensionnel
//? array_column($tableau, nomColonne [, nomClé])
echo "<b>----- Trier un tableau associatif -----</b>" . $line;

$multiGot = [
    ['name' => 'Daenerys', 'house' => 'Targaryen', 'alive' => false],
    ['name' => 'Tyrion', 'house' => 'Lannister', 'alive' => true],
    ['name' => 'Rob', 'house' => 'Stark', 'alive' => false]
];

//* Retourne les valeurs avec un indice numérique
$names = array_column($multiGot, 'name');
foreach($names as $key => $value){
    echo "[$key] = $value" . $line;
}

echo $paragraph;
//* Retourne les valeurs avec comme indice, le nom clé fournit en 3ème paramètre
$houses = array_column($multiGot, 'house', 'name');
foreach($houses as $name => $house){
    echo "$name is come from $house house", $line;
}