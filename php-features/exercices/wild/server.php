<?php

/* On récupère l'url */
$url = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

/* Si l'url existe, on sort de la fonction */
if($url != '/' && file_exists(__DIR__ . '/public' . $url)) {
  return false;
}

/* Si l'url n'existe pas sur le serveur */
require_once __DIR__ . '/POO/Classes/index.php';