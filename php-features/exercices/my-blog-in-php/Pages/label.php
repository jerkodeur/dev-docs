<?php

use App\Main\Formatting;
use App\Tables\Article;
use App\Tables\Label;

$categories = Label::getAll();

?>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
<?php echo Formatting::wrapInHtmlTag('VOIR TOUS', 'a', [['class', 'nav-link'], ['href', "/?p=label&label="]]); ?>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
        <?php foreach($categories as $category): ?>
            <li class="nav-item active">
                <?php echo Formatting::wrapInHtmlTag($category->name, 'a', [['class', 'nav-link'], ['href', "/?p=label&label=$category->name"]]); ?>
            </li>
        <?php endforeach ?>
        </ul>
    </div>
</nav>
<div>
    <?php
        if($_GET['label'] !== ''){
            $articles = Article::getLabel([$_GET['label']]);
        } else {
            $articles = Article::getAll();
        }
        foreach($articles as $article):
    ?>
    <h2><a href=<?= $article->link ?> target="_blank"><?= $article->title ?></a></h2>
    <p><?= substr($article->content, 0, 500) . '...'; ?></p>
    <p><a href="/?p=blog&id=<?= $article->id; ?>">Voir la suite</a></p>
    <?php endforeach ?>
</div>

<p><a href='/'>Go to the home Page</a></p>