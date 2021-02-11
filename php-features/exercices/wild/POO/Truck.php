<?php

require_once('Car.php');

class Truck extends Car {

    /**
     * Filling capacity of the truck
     *
     * @var int
     */
    private $_capacity;

    /**
     * Filling of the truck
     *
     * @var int
     */
    private $_filling = 0;

    /**
     * Initialization
     *
     * @param string $color
     * @param string $energyType
     * @param integer $capacity
     */
    public function __construct(string $color, string $energyType, int $capacity)
    {
        parent::__construct($color, $energyType);
        $this->_capacity = $capacity;
    }

    /**
     * Get the truck filling capacity
     * @return int capacity
     */
    public function getCapacity () :int
    {
        return $this->_capacity;
    }

    /**
     * Define the truck filling capacity
     *
     * @param int
     */
    public function setCapacity (int $capacity)
    {
        $this->_capacity = $capacity;
    }

    /**
     * Get the truck filling
     *
     * @return string
     */
    public function getFilling () :string
    {
        if ($this->_filling === $this->_capacity) {
            return 'full';
        }
        return 'In filling' ;
    }

    public function fill (int $volume) : string
    {
        if ($volume + $this->_filling > $this->_capacity) {
            $add = $this->_capacity - $this->_filling;
            return "The truck is full filling, only $add has been added to the loading <br />";
        }
        $this->_filling += $volume;
        return "Loading added to the truck, his filling is now $this->_filling <br />";
    }
}