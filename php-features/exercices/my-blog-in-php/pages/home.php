<h1>Coucou, here is the home page !</h1>
<?php

use App\main\Debug;

$query = $db->query('SELECT * FROM articles');
    foreach($query as $article):
?>
<ul>
    <li><a href="index.php?p=articles&post=<?php echo $article->id ?>"><?php echo $article->title ?></a></li>
</ul>

<?php endforeach; ?>
<p><a href='/?p=blog'>Go to the blog Page</a></p>