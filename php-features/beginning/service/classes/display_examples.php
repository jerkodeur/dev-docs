<?php

class formatting {

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
     * Return the value, then go to the next line
     *
     * @param mixed $value datas to display
     */
    public static function goToLine($value = null){
        return $value . self::BR;
    }

    /**
     * Go to next line, then return the value
     *
     * @param mixed $value datas to display
     */
    public static function goToLineBefore($value = null){
        return self::BR . $value;
    }

    /**
     * Return the value, then insert an empty line
     *
     * @param mixed $value datas to display
     */
    public static function insertEmptyLine($value = null){
        return $value . self::BRBR;
    }

    /**
     * Insert an empty line, then return the value
     *
     * @param mixed $value datas to display
     */
    public static function insertLineBefore($value = null){
        return self::BRBR . $value;
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