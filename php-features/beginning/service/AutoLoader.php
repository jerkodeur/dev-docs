<?php

    class AutoLoader{

        static function getMainClass(){
            spl_autoload_register(array(__CLASS__, 'get_main_functions'));
        }

        static function get_main_functions($class_name){
            require 'service/classes/main/' . $class_name . '.php';
        }
    }

?>