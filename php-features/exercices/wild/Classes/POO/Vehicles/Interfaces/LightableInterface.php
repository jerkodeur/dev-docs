<?php

namespace Main\POO\Vehicles\Interfaces;

use Main\Service\Formatting;

interface LightableInterface {
    /**
     * Return the state of the light
     *
     * @string light state
     */
    public function getLightState() :string;
}