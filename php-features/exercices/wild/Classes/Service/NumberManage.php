<?php

namespace Main\Service;

class NumberManage {

    /**
     * Return match operation
     *
     * @param integer $a First number
     * @param integer $b second number
     * @param string $operator
     *
     * @return integer
     */
    static function getCalcNumber (int $a, int $b, string $operator) :int
    {
        switch($operator) {
            case '*': return $a * $b;
            case '+': return $a + $b;
            case '-': return $a - $b;
            case '/': return $a / $b;
            case '%': return $a % $b;
        }
    }

    /**
     * Format a number with the defined options
     *
     * @param integer $number
     * @param string $unit
     * @param string $wrap
     *
     * @return string
     */
    static function formatNumber (int $number, string $unit = null, string $wrap = null) :string
    {
        $open = is_null($wrap) ? '' : $wrap[0];
        $close = is_null($wrap) ? '' : $wrap[1];
        return " $open" . $number . $unit . "$close ";
    }
}
