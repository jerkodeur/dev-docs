<?php
/*
TODO Valeur par défaut

function myFunction($param2, $param1 = true)
{
    Some Text here
}

!Détail important : lors de la définition, tu dois mettre les paramètres avec valeur par défaut après ceux n'en possédant pas.
Tu ne peux pas déclarer une fonction comme ceci :

function myFunction($param1 = true, $param2)
{
    // Ne marche pas
}

*/


function line() {
    echo '<br />';
}

function paragraph() {
    echo line(), line();
}

function title(string $text) {
    echo '<----- <br>',strtoupper($text),'</br> ----->';
    line();
}