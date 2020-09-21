<?php

include('public/functions.php');


//TODO Concaténer deux chaines
$firstname = 'Jérôme';
$lastname = 'Potié';

paragraph();
echo 'My name is ' . $firstname . ' ' . $lastname; //* with simple quote
echo "<br />Je m'appelle $firstname $lastname"; //* with double quote
echo '<br />Coucou', ' C\'est', ' moi'; //* Autre manière en séparant les champs par des virgules


paragraph();
//TODO Ajouter des mots à une chaîne
$firstname = 'Indiana';
$firstname .= ' Jones'; //* .= ajoute du texte à la chaîne

echo $firstname;


paragraph();
//TODO Afficher le n{ième} caractère d'une chaîne
$chaine = 'Hello world';

echo $chaine[0] . line();
//! A partir de php 7.1
echo $chaine[-1]; //* Dernier caractère de la chaîne
// echo $chaine[-50] . '<br /><br />'; //! returne une erreur car le caractère n'existe pas


paragraph();
//TODO strlen() | Nombre de caractères d'une chaîne
echo strlen($chaine);


paragraph();
//TODO trim() | Retirer les espaces blancs
$chaine = ' Hello World ';

echo rtrim($chaine) . line(); //* A droite
echo ltrim($chaine) . line(); //* A gauche
echo trim($chaine); //* Des 2 cotés


paragraph();
//TODO Modifier la casse
$chaine = 'coucou tout le monde';

echo strtoupper($chaine) . line(); //* En majuscule
echo strtolower($chaine) . line(); //* En minuscule
echo ucfirst($chaine) . line(); //* Première lettre de la chaîne
echo ucwords($chaine); //* Première lettre de chaque mot


paragraph();
//TODO str_replace() | Remplacer une partie de la chaîne
$chaine = 'Indiana Jones est un aventurier';

echo str_replace('a', 'o', $chaine) . line();
echo str_replace('aventurier', 'professeur', $chaine) . line();
echo str_replace('touriste', 'archéologue', $chaine) . line(); //! Retourne la chaîne originale car 'touriste' n'existe pas'

//? Sans tenir compte de la casse
echo str_ireplace('AVENTURIER', 'archéologue', $chaine);


paragraph();
//TODO substr() | Sélectionner une partie de la chaîne
//? substr($chaine, $debut, $longueur)

$chaine = 'Coucou c\'est moi';
echo substr($chaine, 0, 6);


paragraph();
//TODO explode() | Convertir une chaîne en tableau
$chaine = 'Hello, here is my world';

$worlds = explode(' ', $chaine); //* Tranforme la chaîne en tableau avec comme séparateur un espace

echo $worlds[4]; //? retourne 'world'


paragraph();
//TODO implode() | Convertir un tableau en chaîne de caractères
$wordsArray = ['Harisson', 'Ford'];

echo implode(' + ', $wordsArray) . line();
echo implode(($wordsArray)); //* Retourne le tableau sans espace


paragraph();
//TODO mb_ | Gérer les caractères accentués ou étrangers
$special = 'é';

echo strlen($special) . line(); //! Retourne 2 !!!
echo mb_strlen($special); //* Résout le problème !


paragraph();
//TODO strrev() | Inverser l'ordre d'un chaine

echo strrev('Hello World');


paragraph();
//TODO strpos() stripos() | Recherche la position de la première occurrence dans une chaîne
//! stripos(ne tient pas compte de la casse)
//? https://www.php.net/manual/fr/function.strpos.php

$mystring = 'abc abc';
$findme   = 'a';
$pos = strpos($mystring, $findme); // 0
// rechercher à partir d'un index
$pos = strpos($mystring, $findme, 1); // 4


paragraph();
//TODO strrpos() strripos() | Cherche la position de la dernière occurrence d'une sous-chaîne dans une chaîne
//! strripos(ne tient pas compte de la casse)
//? https://www.php.net/manual/fr/function.strrpos.php


paragraph();
//TODO strstr | Trouve la première occurrence dans une chaîne
// strstr ( string $search , mixed $needle [, bool $before_needle = FALSE ] ) : string
//? https://www.php.net/manual/fr/function.strstr.php

$email  = 'name@example.com';
$domain = strstr($email, '@');
echo $domain . $line; // Affiche : @example.com

$user = strstr($email, '@', true); // Depuis PHP 5.3.0
echo $user; // Affiche : name
