<?php

namespace Main\POO\Vehicles\Interfaces;

interface RechargeableInterface {
    public function charge (int $percent) :string;
    public function unLoad (int $percent) :string;
}