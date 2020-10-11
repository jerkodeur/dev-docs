<?php

$multiGot = [
    'Lannister' => ['Tyrion', 'Jaime', 'Cercei'],
    'Barathéon' => ['Renly', 'Robert', 'Stannis'],
    'Stark' => ['Rob', 'Catelyn', 'Ned']
];
foreach($multiGot as $house => $characters){
    echo 'Dans la maison <b>' . $house . '</b>, les personnages principaux sont: ';
    foreach($characters as $character){
        echo '<b>' . $character, '</b>, ';
    };
    echo '.<br />';
};
