<?php
include('service/variables.php');


//TODO file_get_contents | Lecture simple d'un fichier
title("file_get_contents | Lecture simple d'un fichier");
echo file_get_contents('resources/webdictionary.txt');


//TODO fopen() | fread() | fclose()
title("Ouverture, lecture et fermeture d'un fichier");
/*
? The file may be opened in one of the following modes:
* r	Open a file for read only. File pointer starts at the beginning of the file
* w	Open a file for write only. Erases the contents of the file or creates a new file if it doesn't exist. File * pointer starts at the beginning of the file
* a	Open a file for write only. The existing data in file is preserved. File pointer starts at the end of the file. Creates a new file if the file doesn't exist
* x	Creates a new file for write only. Returns FALSE and an error if file already exists
r+	Open a file for read/write. File pointer starts at the beginning of the file
w+	Open a file for read/write. Erases the contents of the file or creates a new file if it doesn't exist. File pointer starts at the beginning of the file
a+	Open a file for read/write. The existing data in file is preserved. File pointer starts at the end of the file. Creates a new file if the file doesn't exist
x+	Creates a new file for read/write. Returns FALSE and an error if file already exists
*/

$myfile = fopen("resources/webdictionary.txt", "r") or die("Unable to open file!");
//? fread(file-name, number of bytes to display)
echo fread($myfile, 10);
fclose($myfile);


//TODO fgets() | Lire une ligne d'un fichier
title("Lire une ligne d'un fichier");

$myfile = fopen("resources/webdictionary.txt", "r") or die("Unable to open file!");
echo fgets($myfile);
fclose($myfile);{
}
//! Note: After a call to the fgets() function, the file pointer has moved to the next line.


//TODO fgetc() | Lecture d'un simple caractere d'un fichier
//! Note: After a call to the fgetc() function, the file pointer moves to the next character.


//TODO file() | Insere chaque ligne d'un fichier dans un tableau
title("file() | Insère chaque ligne d'un fichier dans un tableau");
echo var_dump(file("resources/webdictionary.txt"));


//TODO feof() | Verifie si la fin du fichier a ete atteint
title("feof() | Vérifie si la fin du fichier a été atteint");

$myfile = fopen("resources/webdictionary.txt", "r") or die("Unable to open file!");
while(!feof($myfile)){
    echo fgets($myfile) . '<br />';
}
fclose($myfile);


//TODO filesize () | Nombre de bytes(caracteres) d'un fichier
title("filesize() | Nombre de bits contenus dans un fichier");
echo filesize("resources/webdictionary.txt");


//TODO fgetcsv() | str_getcsv() | Lire des fichiers .csv
//? PHP has two inbuilt functions to read CSV file.
//* fgetcsv() – Reads CSV using the reference of the file resource.
//* str_getcsv() – Reads CSV data stored in a variable.
// https://phppot.com/php/php-csv-file-read/


//TODO copy() | Copier un fichier
//? copy($source, $destination) : bool
//! Avertissement Si le fichier de destination existe déjà, il sera écrasé.


//TODO rename | Déplace ou renomme un fichier / dossier
//? rename($oldName, $newName) :bool
//* Tente de renommer oldname en newname, en le déplaçant de répertoire si nécessaire. Si vous renommez un fichier et que newname existe, il sera écrasé. Si vous renommez un répertoire et que newname existe, cette fonction émet un avertissement.