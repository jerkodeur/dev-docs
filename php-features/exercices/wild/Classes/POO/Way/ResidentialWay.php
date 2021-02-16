<?php

namespace Main\POO\Way;

use Main\POO\Vehicles\Car;
use Main\POO\Vehicles\Truck;
use Main\POO\Vehicles\Vehicle;

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