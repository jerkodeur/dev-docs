<?php

require_once('Vehicle.php');

class Bicycle extends Vehicle
{
    public function __construct(string $color)
    {
        parent::__construct($color);
    }
}
