<?php

namespace Main\POO\Vehicles\Traits;

use Main\Service\Formatting;

/**
 * Manage the display of lights
 */
trait LightableTrait {

    protected bool $_lightState = false;

    /**
     * Switch light On
     *
     * @return boolean
     */
    protected function _switchLightOn () :bool
    {
        return $this->_lightState = true;
    }
    /**
     * Switch light Off
     *
     * @return boolean
     */
    protected function _switchLightOff () :bool
    {
        return $this->_lightState = false;
    }

    public function getLightState (): string
    {
        $state = $this->_lightState === true ? 'on' : 'off';
        return Formatting::formatSuccess("The light is $state");
    }

}