<?php

use App\Tables\Article;

$query = Article::find('id', [$_GET['id']]);
?>
<h1><?= $query->title ?></h1>
<p><?= $query->content ?></p>

<p><a href='/?p=home'>Go to home Page</a></p>