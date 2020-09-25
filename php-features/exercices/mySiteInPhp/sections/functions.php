<?php

// detect the file extension
function detect_ext(string $file) :string {
    $mime_type = mime_content_type($file);
    if(strpos('image', $mime_type)){
        $type = 'image';
    }
    return $type;
}

// Return the name of the file
function return_filename(string $location){
    return explode('/', $location)[-1];
}


function folder_up(string $location) {
    $array = explode('/', $location);
    array_pop($array);
    $up = implode('/', $array);
    $up_link = '<a href="?page=' . $up . '" class="link-up">' . '...' . '</a><br>';
    return count($array) !== 0 ? $up_link : '';
}

function explore(string $location){
    $files = [];
    $page = !isset($_GET['page']) ? $location : $_GET['page'];
    if(isset($page)) $location = $page;
    $dir = array_diff(scandir($location), ['.', '..']);
    echo folder_up(($location));
    foreach($dir as $item){
        $page = $location . '/' . $item;
        if(is_dir($page)){
            echo '<a href="?page=' . $page . '" class="folder">' . $item . '</a></br>';
        } else {
            $files[] = ['page' => $location, 'file' => $item];
        }
    }
    foreach($files as $file){
        $page = $file['page'];
        $filename = $file['file'];
        // echo $filename;
        // echo $page . " " . $filename;
        echo '<div class="file">';
        echo "<a href='?page=$page";
        echo "&file=$filename'>";
        echo $filename . "</a>";
        echo "<img class=\"icon-small\" alt=\"Effacer\" src=\"/images/red_cross.png\" /><br />";
        echo "</div>";
    }
}

