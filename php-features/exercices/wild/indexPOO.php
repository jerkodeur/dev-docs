<?php

namespace Main;

require_once('Classes/AutoLoader.php');

AutoLoader::register();

use Main\POO\Vehicles\{Car, Bicycle, Truck, Skate};
use Main\POO\Way\{MotorWay, PedestrianWay, ResidentialWay};
use Main\Service\{Boot};

$boot = new Boot();

$myCar = new Car('blue', 'fuel');
$myBicycle = new Bicycle('Red');
$truck = new Truck('yellow','fuel', 100);
$skate = new Skate('green');

$formatting->format_line($myCar->start());



