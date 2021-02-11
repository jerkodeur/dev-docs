<?php

namespace POO\Way;

use POO\Service\Debug;
use POO\Vehicles\Car;
use POO\Vehicles\Truck;
use POO\Vehicles\Vehicle;

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