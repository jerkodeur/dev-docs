<h1>Coucou, here is the home page !</h1>
<?php

use App\Main\Debug;

$query = $db->query('SELECT * FROM articles', 'App\Tables\Article');
    foreach($query as $article):
?>
<h2><a href=<?= $article->link; ?> target="_blank"><?= $article->title ?></a></h2>
<p><?= substr($article->content, 0, 500) . '...'; ?></p>
<p><a href="/?p=blog&id=<?= $article->id; ?>">Voir la suite</a></p>

<?php endforeach; ?>
<p><a href='/?p=label'>Go to the labels Page</a></p>