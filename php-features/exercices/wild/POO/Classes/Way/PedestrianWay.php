<?php

namespace POO\Way;

use POO\Vehicles\Bicycle;
use POO\Vehicles\Skate;
use POO\Vehicles\Vehicle;

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