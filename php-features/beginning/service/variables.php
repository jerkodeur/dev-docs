<?php
$paragraph = '<br /><br />';
$line = '<br />';

function title(string $text)
{
    $length = strlen($text) * 2;
    echo '<br /><br />';
    echo '==> <b>', strtoupper($text), '</b><br />';
    while($length >= 0) {
        echo '-';
        $length--;
    }
    echo '<br />';

}