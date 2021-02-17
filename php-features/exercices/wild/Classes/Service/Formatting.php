<?php

namespace Main\Service;

class Formatting {

    private static $_instance = null;
    private static $_errorColor;
    private static $_successColor;

    private function __construct(string $errorColor, string $succesColor)
    {
        self::$_errorColor = $errorColor;
        self::$_successColor = $succesColor;
    }

    public static function getInstance(string $errorColor, string $succesColor) {
        if (is_null(self::$_instance)) {
            self::$_instance = new Formatting($errorColor, $succesColor);
        }
        return self::$_instance;
    }

    /**
     * Return line break or empty line(s) depending of the index
     *
     * @param number $number {0: none, 1: line break, more: number of lines to insert}
     * @return string
     */
    protected static function define_format_line($number)
    {
        $format = '';
        for ($i=0;$i<$number;$i++) {
            $format .= '<br />';
        }
        return $format;
    }

    /**
     * Insert line break or empty line depending of the context
     *
     * @param string $value formatted value to return
     * @param int $line_up formatting before value {0: none, 1: line break, more: number of lines to insert}
     * @param int $line_bottom formatting after value {0: none, 1: line break, more: number of lines to insert}
     * @return void return display formatted value
     */
    public static function format_line($value, $line_up = 0, $line_bottom = 1)
    {
        echo self::define_format_line($line_up);
        echo $value;
        echo self::define_format_line($line_bottom);
    }

    /**
     * Map an array and return all html attributes
     *
     * @param array|null $attributes array [[$attibute, $value] [,...]]
     * @return string
     */
    protected static function defineAttributes($attributes)
    {
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
    public static function wrapInHtmlTag($element, $wrapper, $attributes = null)
    {
        $attributes = self::defineAttributes($attributes);
        return "<$wrapper $attributes>" . $element . "</$wrapper>";
    }

    public static function formatError($message)
    {
        return self::wrapInHtmlTag($message, 'strong', [['style', 'color:' . self::$_errorColor]]);
    }

    public static function formatSuccess($message)
    {
        Debug::show($message);
        return self::wrapInHtmlTag($message, 'strong', [['style', 'color:' . self::$_successColor]]);
    }
}
?>