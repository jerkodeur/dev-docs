<?php
$paragraph = '<br /><br />';
$line = '<br />';

//TODO Concaténer deux chaines
$firstname = 'Jérôme';
$lastname = 'Potié';

echo $paragraph;
echo 'My name is ' . $firstname . ' ' . $lastname; //* with simple quote
echo "<br />Je m'appelle $firstname $lastname"; //* with double quote
echo '<br />Coucou', ' C\'est', ' moi'; //* Autre manière en séparant les champs par des virgules

//TODO Ajouter des mots à une chaîne
echo $paragraph;
$firstname = 'Indiana';
$firstname .= ' Jones'; //* .= ajoute du texte à la chaîne

echo $firstname;

//TODO Afficher le n{ième} caractère d'une chaîne
echo $paragraph;
$chaine = 'Hello world';

echo $chaine[0] . $line;
//! A partir de php 7.1
echo $chaine[-1]; //* Dernier caractère de la chaîne
// echo $chaine[-50] . '<br /><br />'; //! returne une erreur car le caractère n'existe pas

//TODO [strlen] Nombre de caractères d'une chaîne
echo $paragraph;
echo strlen($chaine);

//TODO [trim] Retirer les espaces blancs
echo $paragraph;
$chaine = ' Hello World ';

echo rtrim($chaine) . $line; //* A droite
echo ltrim($chaine) . $line; //* A gauche
echo trim($chaine); //* Des 2 cotés

//TODO Modifier la casse
echo $paragraph;
$chaine = 'coucou tout le monde';

echo strtoupper($chaine) . $line; //* En majuscule
echo strtolower($chaine) . $line; //* En minuscule
echo ucfirst($chaine) . $line; //* Première lettre de la chaîne
echo ucwords($chaine); //* Première lettre de chaque mot

//TODO [str_replace] Remplacer une partie de la chaîne
echo $paragraph;
$chaine = 'Indiana Jones est un aventurier';

echo str_replace('a', 'o', $chaine) . $line;
echo str_replace('aventurier', 'professeur', $chaine) . $line;
echo str_replace('touriste', 'archéologue', $chaine) . $line; //! Retourne la chaîne originale car 'touriste' n'existe pas'

//? Sans tenir compte de la casse
echo str_ireplace('AVENTURIER', 'archéologue', $chaine);

//TODO [substr] Sélectionner une partie de la chaîne
//? substr($chaine, $debut, $longueur)
echo $paragraph;
$chaine = 'Coucou c\'est moi';
echo substr($chaine, 0, 6);

//TODO [explode] Convertir une chaîne en tableau
echo $paragraph;
$chaine = 'Hello, here is my world';

$worlds = explode(' ', $chaine); //* Tranforme la chaîne en tableau avec comme séparateur un espace

echo $worlds[4]; //? retourne 'world'

//TODO [implode] Convertir un tableau en chaîne de caractères
echo $paragraph;
$wordsArray = ['Harisson', 'Ford'];

echo implode(' + ', $wordsArray) . $line;
echo implode(($wordsArray)); //* Retourne le tableau sans espace

//TODO [mb_] Gérer les caractères accentués ou étrangers
echo $paragraph;
$special = 'é';

echo strlen($special) . $line; //! Retourne 2 !!!
echo mb_strlen($special); //* Résout le problème !

//TODO [strrev] Inverser l'ordre d'un chaine
echo $paragraph;

echo strrev('Hello World');