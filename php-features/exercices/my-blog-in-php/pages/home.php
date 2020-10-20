<h1>Coucou, here is the home page !</h1>
<?php

use App\Main\Debug;

$query = $db->query('SELECT * FROM articles', 'App\Tables\Article');
    foreach($query as $article):
?>
<h2><a href=<?php echo $article->getUrl(); ?>><?php echo $article->title ?></a></h2>
<p><?php echo substr($article->getContent(), 0, 500) . '...'; ?></p>
<p><a href=<?php echo $article->getLink(); ?>>Voir la suite</a></p>

<?php endforeach; ?>
<p><a href='/?p=blog'>Go to the blog Page</a></p>