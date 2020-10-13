<?php

    namespace App\main;
    /**
     * Some options to simplify php files debug
     */

    class Debug {

        /**
         * Return var_dump command with style
         *
         * @param array $element to debug
         */
        public static function inspectElement($elements){
            echo "<div style='border: 2pt ridge #a3a4a8; padding: .5em; width: max-content; background-color: #f0f0f0; margin: 2rem;'>";
            echo var_dump($elements);
            echo "</div>";
        }

    }

?>