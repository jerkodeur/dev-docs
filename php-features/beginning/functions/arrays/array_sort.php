<?php
$paragraph = '<br /><br />';
$line = '<br />';

//TODO sort() | Trier un tableau
echo "<b>----- Trier un tableau -----</b>" . $paragraph;
$tables = [0, 23, 533, 3234, 45];
$arrays = ['Tomate', 'Carotte', 'Navet'];

sort($tables);
sort($arrays);
echo var_dump($tables) . $line; // array(5) { [0]=> int(0) [1]=> int(23) [2]=> int(45) [3]=> int(533) [4]=> int(3234) }
echo var_dump($arrays); // array(3) { [0]=> string(7) "Carotte" [1]=> string(5) "Navet" [2]=> string(6) "Tomate" }

echo $paragraph;
//TODO Trier un tableau associatif
echo "<b>----- Trier un tableau associatif -----</b>" . $paragraph;
$got = [];
$got['Lannister'] = 'Tyrion';
$got['Targaryen'] = 'Daenerys';
$got['Stark'] = "Rob";
$got['Barathéon'] = 'Stannis';

//TODO asort()
//* Effectue un tri sur les valeurs mais garde les clés intactes
echo "<i>----- asort() -----</i>" . $line;
asort($got);
echo var_dump($got); // array(4) { ["Targaryen"]=> string(8) "Daenerys" ["Stark"]=> string(3) "Rob" ["Barathéon"]=> string(7) "Stannis" ["Lannister"]=> string(6) "Tyrion" }

echo $paragraph;
//TODO ksort()
//* Effectue un tri sur les clés mais garde les valeurs intactes
echo "<i>----- ksort() -----</i>" . $line;
ksort($got);
echo var_dump($got) . $line; // array(4) { ["Barathéon"]=> string(7) "Stannis" ["Lannister"]=> string(6) "Tyrion" ["Stark"]=> string(3) "Rob" ["Targaryen"]=> string(8) "Daenerys" }