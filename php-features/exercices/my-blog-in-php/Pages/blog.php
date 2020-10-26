<?php

use App\App;

$article = App::getTable('articles');
$query = $article->find('id', [$_GET['id']]);
?>
<h1><?= $query->title ?></h1>
<p><?= $query->content ?></p>

<p><a href='/?p=home'>Go to home Page</a></p>