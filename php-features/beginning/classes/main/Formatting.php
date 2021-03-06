<?php

namespace php_training\main;

class Formatting {

    /**
     * BR
     * @var string go to line
     */
    const BR = "<br />";

    /**
     * BRBR
     * @var string insert an empty line
     */
    const BRBR = "<br /><br />";

    public function return_exemple(){

    }

    /**
     * Return line break or an empty line depending of the index
     *
     * @param number $number {1: line break, 2: insert empty line}
     * @return null
     */
    protected static function define_format_line($number){
        if ($number === 1) echo self::BR;
        elseif ($number === 2) echo self::BRBR;
    }

    /**
     * Insert line break or empty line depending of the context
     *
     * @param mixed $value formatted value to return
     * @param int $line_up formatting before value {0: none, 1: line break, 2: insert empty line}
     * @param int $line_bottom formatting after value {0: none, 1: line break, 2: insert empty line}
     * @return void return display formatted value
     */
    public static function format_line($value, $line_up, $line_bottom){
        if($line_up !== 0) self::define_format_line($line_up);
        echo $value;
        if($line_bottom !== 0) self::define_format_line($line_bottom);
    }

    /**
     * Map an array and return all html attributes
     *
     * @param array|null $attributes array [[$attibute, $value] [,...]]
     * @return string
     */
    protected static function defineAttributes($attributes){
        $display_attributes = '';
        if(isset($attributes)){
            foreach($attributes as $attribute){
                $this_attribute = "$attribute[0]='$attribute[1]'";
                $display_attributes .= " " . $this_attribute;
            }
        }
        return $display_attributes;
    }

    /**
     * Return the element into html tag
     *
     * @param string $element string to wrap
     * @param string $wrapper html tag name
     * @param array|null $attributes tag infos to add [[$attribute, $value] [,[$,$]...]]
     */
    public static function wrapInHtmlTag($element, $wrapper, $attributes = null){
        $attributes = self::defineAttributes($attributes);
        return "<$wrapper $attributes>" . $element . "</$wrapper>";
    }
}
?>