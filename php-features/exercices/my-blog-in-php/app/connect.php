<?php

$dbh = new PDO('mysql:host=localhost;dbname=blog_php', 'jerkoder', 'JP93@s12RT77');
$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$res = $dbh->query('SELECT * FROM articles');
$datas = $res->fetchAll(PDO::FETCH_OBJ);

echo var_dump($datas[0]->title);

// $count = $dbh->exec('INSERT INTO articles SET title="Titre test", date="' . date('Y-m-d H:i:s') . '", content="Some text..."');
// echo var_dump($count);
?>