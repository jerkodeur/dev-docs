<?php

namespace POO\Vehicles;

class Bicycle extends Vehicle
{
    public function __construct(string $color)
    {
        parent::__construct($color);
    }
}
