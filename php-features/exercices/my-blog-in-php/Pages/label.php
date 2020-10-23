<?php

use App\Main\Debug;
use App\Main\Formatting;

$categories = $db->query('SELECT * FROM labels', 'App\Tables\Label');
foreach($categories as $category){
    echo Formatting::wrapInHtmlTag($category->name, 'h3');
}

?>

<p><a href='/'>Go to the home Page</a></p>