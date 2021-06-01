<?php

include('service/variables.php');

//TODO simplexml_load_file() | Charger un fichier .xml
title('simplexml_load_file() | Charger un fichier .xml');

$mysongs = simplexml_load_file('resources/songs.xml');
echo var_dump($mysongs);

//TODO Lire un fichier XML
//* Récupération de l'artiste de la première chanson
echo $mysongs -> song[0] -> artist . $line;

//* Récupération d'un attribut de notre XML
echo $mysongs -> song[0]['dateplayed'] . $line;