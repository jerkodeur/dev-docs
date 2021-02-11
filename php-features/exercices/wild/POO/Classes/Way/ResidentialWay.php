<?php

namespace POO\Way;

use POO\Vehicles\Car;
use POO\Vehicles\Truck;
use POO\Vehicles\Vehicle;

final class ResidentialWay extends Highway {

    public function __construct()
    {
        $this->_nbLane = 2;
        $this->_maxSpeed = 50;
    }

    public function addVehicle(Vehicle $vehicle)
    {
        if ($vehicle instanceof Car || $vehicle instanceof Truck) {
            $this->_currentVehicles[] = $vehicle;
        }
    }
}