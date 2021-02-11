<?php

require_once('Vehicle.php');

class Car extends Vehicle{
    /**
     * Car energy Type
     *
     * @var string
     */
    private $_energyType;
    /**
     * Current energy of the car
     *
     * @var int
     */
    private $_energyLevel;

    CONST ALLOWED_ENERGIES = [
        'electric',
        'fuel'
    ];


    public function __construct (string $color,string $energyType)
    {
        //TODO get parent constructor variables
        parent::__construct($color);
        $this->setEnergyType($energyType);
    }

    /**
     * Get the energy type of the car
     * @return string energy type
     */
    public function getEnergyType ()
    {
        return $this->_energyType;
    }

    /**
     * Set the type of energy of the car
     *
     * @param string $energyType
     * @return Car
     */
    public function setEnergyType (string $energyType) :Car
    {
        if(in_array($energyType, self::ALLOWED_ENERGIES)){
            $this->_energyType = $energyType;
        }
        return $this;
    }

    /**
     * Get car level energy left
     * @return int energy level
     */
    public function getEnergyLevel ()
    {
        return $this->_energyLevel;
    }

    /**
     * Set the car level energy left
     *
     * @param int $energyLevel
     */
    public function setEnergyLevel ($energyLevel)
    {
        $this->_energyLevel = $energyLevel;
    }

}