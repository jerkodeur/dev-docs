<?php

// detect the file extension
function detect_ext(string $file) :string {
    $mime_type = mime_content_type($file);
    if(strpos('image', $mime_type)){
        $type = 'image';
    }
    return $type;
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
            $files[] = ['page' => $page, 'file' => $item];
        }
    }
    foreach($files as $file){
        echo "<div class=\"file\">";
        echo '<a href="?page=' . $file['page'] . '">' . $file['file'] . ' </a>';
        echo "<img class=\"icon-small\" alt=\"Effacer\" src=\"/images/red_cross.png\" /><br />";
        echo "</div>"
    }
}

