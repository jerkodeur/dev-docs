<?php

// display the file
function displayFile(string $file)
{
echo "<li>$file</li>";
}

// map a repository to display files and folders
function exploredir(string $location)
{
if (is_dir($location)) {
echo '<h3>' . $location . '</h3>';
}
//TODO opendir() | Ouvre un répertoire
$dir = opendir($location);
echo "<ul>";
    //TODO readdir() | Lecture des fichiers contenus dans le répertoire
    while ($file = readdir($dir)) {
        if ($file != '.' && $file != '..') {
            $path = $location . '/' . $file;
            if (is_dir($path)) {
                exploredir($path);
            } else {
                displayFile($file);
            }
        }
    }
    echo "</ul>";
}