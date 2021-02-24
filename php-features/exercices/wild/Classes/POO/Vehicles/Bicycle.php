<?php

namespace Main\POO\Vehicles;

use Main\POO\Vehicles\Traits\LightableTrait;
use Main\POO\Vehicles\Interfaces\LightableInterface;
use Main\Service\Formatting;

class Bicycle extends Vehicle implements LightableInterface
{
    use LightableTrait;

    public function __construct(string $color)
    {
        parent::__construct($color);
    }

    public function forward()
    {
        parent::forward();
        if ($this->_currentSpeed >= 10) {
            $this->_switchLightOn();
        }
    }

    public function brake()
    {
        parent::brake();
        $this->_switchLightOff();
    }


}
