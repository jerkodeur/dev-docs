<?php

namespace POO\Way;

use POO\Vehicles\Vehicle;

abstract class HighWay {

    protected array $_currentVehicles = [];
    protected int $_nbLane;
    protected int $_maxSpeed;

    public function getCurrentVehicles () :array
    {
        return $this->_currentVehicles;
    }

    public function setCurrentVehicles (array $vehicles) :void
    {
        $this->_currentVehicles = $vehicles;
    }

    public function getNbLane () :int
    {
        return $this->_nbLane;
    }

    public function setNbLane (int $nbLane) :void
    {
        $this->_currentVehicles = $nbLane;
    }

    public function getMaxSpeed () :int
    {
        return $this->_maxSpeed;
    }

    public function setMaxSpeed (array $speed) :void
    {
        $this->_currentVehicles = $speed;
    }

    //TODO declare abstract method
    abstract public function addVehicle (Vehicle $vehicle);
}