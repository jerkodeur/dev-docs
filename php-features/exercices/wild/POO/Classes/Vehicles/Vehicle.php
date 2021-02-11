<?php

namespace POO\Vehicles;

/**
 * Generic Vehicle Class
 */

abstract class Vehicle {

    /**
     * Color of the vehicle
     *
     * @var string
     */
    protected $_color;
    /**
     * Number of wheels of the vehicle
     *
     * @var int
     */
    protected $_nbWheel;
    /**
     * Number of seat of the vehicle
     *
     * @var int
     */
    protected $_nbSeat;
    /**
     * Current speed of the vehicle
     *
     * @var int
     */
    protected $_currentSpeed;

    /**
     * Get a new instance of the vehicle
     *
     * @param string $color
     */
    public function __construct(string $color)
    {
        $this->_color = $color;
    }

    /**
     * Accelerate to go fast with the vehicle
     * @return string
     */
    public function forward ()
    {
        $this->_currentSpeed = 15;
        return "Go !";
    }

    /**
     * Brake to reduce vehicle speed
     * @return string Vehicule action
     */
    public function brake ()
    {
        $sentence = "";
        while ($this->_currentSpeed > 0) {
            $this->_currentSpeed--;
            $sentence .= "Brake !!!";
        }

        $sentence .= "I'm stopped !";
        return $sentence;
    }

    /**
     * Get the number of wheels of the vehicle
     * @return int Number of wheels
     */
    public function getNbWheel ()
    {
        return $this->_nbWheel;
    }

    /**
     * Set the number of wheels of the vehicle
     * @param int $nbWheel
     */
    public function setNbWheel ($nbWheel)
    {
        $this->_nbWheel = $nbWheel;
    }

        /**
         * Get the number of seats of the vehicle
         * @return int number of seats
         */
    public function getNbSeat ()
    {
        return $this->_nbSeat;
    }

    /**
     * Set the number of seats of the vehicle
     * @param int $nbSeat
     */
    public function setNbSeat ($nbSeat)
    {
        $this->_nbSeat = $nbSeat;
    }

    /**
     * Get the color of the vehicle
     * @return string Color
     */
    public function getColor ()
    {
        return $this->_color;
    }

    /**
     * Get the current speed of the vehicle
     * @return int Current speed
     */
    public function getCurrentSpeed ()
    {
        return $this->_currentSpeed;
    }


}