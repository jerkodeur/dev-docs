<?php

    namespace Main\Service;
    /**
     * Some options to simplify php files debug
     */

    class Debug {

        private static $_instance = null;

        private static $_dumpBgColor;
        private static $_dumpBorderColor;

        /**
         * Initialize the Debug class
         *
         * @param string $dumpBgColor
         * @param string $dumpBorderColor
         */
        private function __construct(string $dumpBgColor, string $dumpBorderColor)
        {
            self::$_dumpBgColor = $dumpBgColor;
            self::$_dumpBorderColor = $dumpBorderColor;
        }

        /**
         * Return new Debug instance or the existing Debug instance if already exist
         *
         * @param string $dumpBgColor
         * @param string $dumpBorderColor
         *
         * @return Debug
         */
        public static function getInstance(string $dumpBgColor, string $dumpBorderColor) :Debug
        {
            if (is_null(self::$_instance)) {
                self::$_instance = new Debug($dumpBgColor, $dumpBorderColor);
            }
            return self::$_instance;
        }

        /**
         * Return var_dump command with style
         *
         * @param array $element to debug
         */
        public static function show($elements){
            echo "<div style='border: 2pt ridge" . self::$_dumpBorderColor . "; padding: .5em; width: max-content; margin: .5em 0;background-color:" . self::$_dumpBgColor . '\'>';
            echo $elements;
            echo "</div>";
        }
    }
