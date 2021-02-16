<?php

namespace Main\POO\Way;

use Main\POO\Vehicles\Bicycle;
use Main\POO\Vehicles\Skate;
use Main\POO\Vehicles\Vehicle;

final class PedestrianWay extends Highway {

    public function __construct()
    {
        $this->_nbLane = 1;
        $this->_maxSpeed = 10;
    }

    public function addVehicle(Vehicle $vehicle)
    {
        if ($vehicle instanceof Bicycle || $vehicle instanceof Skate) {
            $this->_currentVehicles[] = $vehicle;
        }
    }
}