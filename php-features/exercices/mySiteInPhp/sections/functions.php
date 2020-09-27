<?php

// detect type of the file
function detect_ext(string $file) :array {
    $mime_type = mime_content_type($file);
    $filetype = [
        'type' => explode('/', $mime_type)[0],
    ];
    if(isset(explode('/', $mime_type)[1])){
        $filetype['ext'] = explode('/', $mime_type)[1];
    }
    return $filetype;
}

// return the name of the file depending of it location
function return_filename(string $location) :string{
    $array = explode('/', $location);
    return array_pop($array);
}

// return the full path of a file
function itemfolder_path(string $location, string $file) :string{
    return  $location . '/' . $file;
}

// return the files and folders which are present in the asked folder
function items_in_location(string $location) :array {
    return array_diff(scandir($location), ['.', '..']);
}

// return the parent folder of the current location
function folder_up(string $location) {
    $array = explode('/', $location);
    array_pop($array);
    $up = implode('/', $array);
    return count($array) !== 0 ? $up : null;
}

// Explore a location and return the index tree of folders and files
function explore(string $location){
    $files = [];
    $page = !isset($_GET['page']) ? $location : $_GET['page'];
    if(isset($page)) $location = $page;
    $dir = items_in_location($location);
    $folder_up = folder_up(($location));
    if($folder_up !== null) echo "<a href=\"?page=$folder_up\" class='link-up'>...</a><br>";
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
        echo '<div class="file">';
        echo "<a href='?page=$page";
        echo "&file=$filename'>";
        echo $filename . "</a>";
        echo "<img class=\"icon-small\" alt=\"Effacer\" src=\"/images/red_cross.png\" /><br />";
        echo "</div>";
    }
}

function splitfolder_by_type($location) :array{
    $items = items_in_location($location);
    $content = [];
    foreach($items as $item){
        $file = itemfolder_path($location, $item);
        if(is_dir($file)) $content['folders'][] = ['name' => $item, 'location' => itemfolder_path($location, $item)];
        else $content['files'][] = ['name' => $item, 'location' => itemfolder_path($location, $item)];
    }
    return $content;
}

function order_items(array $items, string $type) :array {
    if ($type === 'type'){
        $content = [];
        foreach($items as $item){
            foreach($item as $item){
                $content[] = $item;
            }
        }
        return $content;
    }
}

function display_items_folder(array $items) :string {
    $files = [];
    foreach($items as $item){
        $type = detect_ext($item['location']);
        if($type['type'] === 'directory') {
            $item['img_dir'] = "images/folder.png";
            echo display_file($item);
        }
        else {
            $files[] = $item;
        }
    }
    foreach($files as $file){
        $type = detect_ext($file['location'])['type'] === 'image' ? 'image': detect_ext($file['location'])['ext'];
        switch ($type) {
            case ('plain'):
                $file['img_dir'] = "images/text-icon.png";
                echo display_file($file);
                break;
            case ('html'):
                $file['img_dir'] = "images/html-icon.png";
                echo display_file($file);
                break;
            case ('image'):
                $file['img_dir'] = $file['location'];
                echo display_file($file);
                break;
            default:
                $file['img_dir'] = "images/markdown.svg";
                echo display_file($file);
                break;
        }
    }
    return '';
}

function display_file (array $file) :string{
    $name = $file['name'];
    $location = $file['location'];
    $img_dir = $file['img_dir'];
    if(is_dir($location)){
        $page = $location;
        $href = "?page=$page";
    } else {
        $page = folder_up($location);
        $file = return_filename($location);
        $href="?page=$page&file=$file";
    }
    return "<a href=$href title=\"View $name\"><img src=$img_dir alt=$name class='file-img' /><br />$name</a>";
}


