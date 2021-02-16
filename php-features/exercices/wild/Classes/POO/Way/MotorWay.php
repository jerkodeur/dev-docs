<?php

namespace Main\POO\Way;

use Main\POO\Service\Debug;
use Main\POO\Vehicles\Car;
use Main\POO\Vehicles\Truck;
use Main\POO\Vehicles\Vehicle;

final class MotorWay extends Highway {

    public function __construct()
    {
        $this->_nbLane = 4;
        $this->_maxSpeed = 130;
    }

    public function addVehicle(Vehicle $vehicle)
    {
        if ($vehicle instanceof Car || $vehicle instanceof Truck) {
            $this->_currentVehicles[] = $vehicle;
        }
    }
}