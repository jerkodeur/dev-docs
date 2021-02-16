<?php

namespace Main;

require_once('Classes/AutoLoader.php');

AutoLoader::register();

use Exception;
use Main\POO\Vehicles\{Car, Bicycle, Truck, Skate};
use Main\POO\Way\{MotorWay, PedestrianWay, ResidentialWay};
use Main\Service\{Debug, ErrorReporting, Formatting};

$errorReportings = new ErrorReporting();
// Debug::show($errorReportings->getErrorsActive());
echo $errorReportings->getErrorsActive();
echo $errorReportings->setErrorsActive(['E_STRICT', 'e_error']);
echo $errorReportings->getErrorsActive();
echo $errorReportings->setErrorsActive(['E_ALL', 'e_test'], false);
echo $errorReportings->getErrorsActive();

try {
$myCar = new Car('blue', 'fuel');
$myBicycle = new Bicycle('Red');
$truck = new Truck('yellow','fuel', 100);
$skate = new Skate('green');

Formatting::format_line($myCar->start());
} catch (Exception $e) {
    var_dump('ok');
    Debug::show($e);
}



