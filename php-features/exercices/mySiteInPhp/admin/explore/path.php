<?php

function displaypath()
{
    $page = !isset($_GET['page']) ? '/' : $_GET['page'];
    echo '<ul class="nav">';
    if (isset($_GET['page'])){
        $dirs = explode('/', $page);
        for($i = 0; $i < count($dirs); $i++){
            $path = implode('/', array_slice($dirs, 0, $i + 1));
            echo '<li class="nav-item">';
            if($path === $page)
            {
                echo '<a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">';
            }
            else
            {
                echo '<a class="nav-link" href="?page=' . $path . '">';
            }
            echo $dirs[$i];
            echo " / </a></li>";
        }
    } else {
        echo '<li class="list-group-item"> / </li>';
    }
    echo '</ul>';
}

displaypath();

?>



