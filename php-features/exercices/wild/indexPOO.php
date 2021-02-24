<?php

namespace Main;

require_once('Classes/AutoLoader.php');

AutoLoader::register();

use Main\POO\Vehicles\{Car, Bicycle, ElectricBike, Truck, Skate};
use Main\POO\Way\{MotorWay, PedestrianWay, ResidentialWay};
use Main\Service\{Boot};

$boot = new Boot();
$errorReporting = $boot->getErrorReporting();
$formatting = $boot->getFormatting();

$myCar = new Car('blue', 'fuel');
$myBicycle = new Bicycle('Red');
$truck = new Truck('yellow','fuel', 100);
$skate = new Skate('green');
$electricBake = new ElectricBike('orange');

$formatting->format_line($electricBake->unLoad(110));
$formatting->format_line($electricBake->charge(25));
$formatting->format_line($electricBake->unLoad(85));
$formatting->format_line($electricBake->charge(110));
$myBicycle->forward();
$myBicycle->getLightState();
$myBicycle->brake();
$myBicycle->getLightState();





