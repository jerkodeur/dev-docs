<?php

require_once('Car.php');
require_once('Bicycle.php');
require_once('Truck.php');

$myCar = new Car('blue', 'fuel');
$myBicycle = new Bicycle('Red');
$truck = new Truck('yellow','fuel', 100);

$myCar->setNbWheel(4);
$myBicycle->setNbWheel(2);

echo $truck->fill(50);
echo $truck->fill(49);
echo $truck->getFilling();
var_dump($truck);
$truck->forward();
var_dump($truck);
echo $truck->brake();
var_dump($truck);
