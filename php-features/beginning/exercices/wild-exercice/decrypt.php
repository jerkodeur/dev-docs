<?php

use function PHPSTORM_META\map;

$message1 = '0@sn9sirppa@#?ia\'jgtvryko1';
$message2 = 'q8e?wsellecif@#?sel@#?setuotpazdsy0*b9+mw@x1vj';
$message3 = 'aopi?sgnirts@#?sedhtg+p9l!';

$resolve = function($message) {
  $len = strlen($message) / 2;
  $newString = substr($message, 5, $len);
  $newString= str_replace('?', ' ', $newString);
  $newString= str_replace('@', ' ', $newString);
  $newString = str_replace('#', ' ', $newString);
  $reverseString = strrev($newString);
  echo $reverseString . '<br />';
};

$resolve($message1);
$resolve($message2);
$resolve($message3);