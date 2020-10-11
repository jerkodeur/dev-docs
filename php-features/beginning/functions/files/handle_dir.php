<?php

//TODO opendir() | Retourne un pointeur sur un dossier qui pour être utilisé avec les fonctions closedir(), readdir() et rewinddir()
$dir = opendir(__DIR__);

//TODO readdir() | Lit une entrée du dossier
while($file = readdir($dir)){
    // Pour chaque fichier ou dossier contenu dans le répertoire, on l'affiche
    echo $file, '<br>';
}

//TODO scandir() | Retourne un tableau des fichiers
//! Si directory n'est pas un dossier, alors une valeur booléenne FALSE est retournée et une erreur de niveau E_WARNING est générée.

echo var_dump(scandir(__DIR__)), '<br><br>';