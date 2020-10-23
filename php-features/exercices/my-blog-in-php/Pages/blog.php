<?php

use App\Main\Debug;

$query = $db->prepare('SELECT * FROM articles WHERE id = ?', [$_GET['id']], 'App\Tables\Article', true);
?>
<h1><?= $query->title ?></h1>
<p><?= $query->content ?></p>

<p><a href='/?p=home'>Go to home Page</a></p>