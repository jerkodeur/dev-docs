<?php

namespace Main\POO\Vehicles;

use Exception;
use Main\POO\Vehicles\Traits\LightableTrait;
use Main\POO\Vehicles\Interfaces\ManualLightableInterface;
use Main\Service\Formatting;

class Car extends Vehicle implements ManualLightableInterface{

    use LightableTrait;

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

    private bool $_hasParkBrake = true;

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
     * Switch park brake
     */
    public function toggleParkBrake() :void
    {
        $this->_hasParkBrake = !$this->_hasParkBrake;
    }

    /**
     * Start the car
     */
    public function start()
    {
        try
        {
            if($this->_hasParkBrake === true ){throw new Exception('Le frein à main est actif');}
        }
        catch (Exception $e)
        {
            Formatting::formatError($e->getMessage());
            $this->toggleParkBrake();
        }
        finally
        {
            Formatting::format_line("Ma voiture roule comme un donut");
            Formatting::format_line($this->forward());
        }
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

    public function setLightState (bool $lightState) : string
    {
        $state = $this->_lightState === true ? 'on' : 'off';
        if ($this->_lightState === $lightState) {
            return Formatting::formatError("The light was already $state");
        } else {
            return Formatting::formatSuccess("The light is now $state");
        }
    }

}