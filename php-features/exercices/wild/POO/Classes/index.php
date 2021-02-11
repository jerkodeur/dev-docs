<?php

namespace POO;

require_once('AutoLoader.php');
AutoLoader::register();

use POO\Service\Debug;
use POO\Vehicles\Car;
use POO\Vehicles\Bicycle;
use POO\Vehicles\Truck;
use POO\Service\Formatting;
use POO\Vehicles\Skate;
use POO\Way\MotorWay;
use POO\Way\PedestrianWay;

$myCar = new Car('blue', 'fuel');
$myBicycle = new Bicycle('Red');
$truck = new Truck('yellow','fuel', 100);
$skate = new Skate('green');

$pedWay = new PedestrianWay();

$pedWay->addVehicle($truck);
Debug::inspectElement($pedWay);
$pedWay->addVehicle($myCar);
Debug::inspectElement($pedWay);


