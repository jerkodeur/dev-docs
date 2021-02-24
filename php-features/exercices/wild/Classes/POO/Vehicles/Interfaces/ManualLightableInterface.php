<?php

namespace Main\POO\Vehicles\Interfaces;

interface ManualLightableInterface extends LightableInterface{
    /**
     * Define the state of the vehicle light(s)
     *
     * @param boolean $state
     *
     * @return string
     */
    public function setLightState (bool $state) :string;
}