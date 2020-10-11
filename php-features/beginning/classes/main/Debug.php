<?php

    namespace php_training\main;
    /**
     * Some options to simplify php files debug
     */

    class Debug {

        /**
         * Return var_dump command
         *
         * @param array $element
         */
        public static function inspectElement($elements){
            echo "<div style='border: 2pt ridge #a3a4a8; padding: .5em; width: max-content; background-color: #f0f0f0'>";
            echo var_dump($elements);
            echo "</div>";
        }

    }

?>