<?php

namespace Main\POO\Vehicles;

use Main\POO\Vehicles\Interfaces\RechargeableInterface;
use Main\Service\NumberManage;

class ElectricBike extends Bicycle implements RechargeableInterface {

    private int $_percent = 100;

    public function charge (int $percent) :string
    {
        $computed = NumberManage::getCalcNumber($this->_percent, $percent, '+');
        $diff = NumberManage::getCalcNumber($this->_percent, $percent, '-');
        $current_percent = $this->_percent;

        if ($current_percent !== 100) {
            if ($computed >= 100) {
                $this->_percent = 100;
                return 'The battery is now full ' . NumberManage::formatNumber($diff, '%', '()');
            } else {
                $this->_percent += $percent;
                return 'The charge of the battery is now ' . NumberManage::formatNumber($this->_percent, '%');
            }
        } else {
            return 'The battery is already full !';
        }
    }

    public function unLoad(int $percent): string
    {
        $computed = NumberManage::getCalcNumber($this->_percent, $percent, '-');
        $current_percent = $this->_percent;

        if ($current_percent > 0) {
            if ($computed <= 0) {
                $this->_percent = 0;
                return 'The battery is now empty ' . NumberManage::formatNumber('-' . $current_percent, '%', '()');
            } else {
                return 'The charge of the battery is now ' . NumberManage::formatNumber($computed, '%');
            }
        } else {
            return 'The battery is already empty !';
        }
    }
}