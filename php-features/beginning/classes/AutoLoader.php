<?php

namespace php_training;

class AutoLoader{

        static function register(){
            spl_autoload_register(array(__CLASS__, 'autoload'));
        }

        static function autoload($class){
            // apply only if the current namespace is called
            if(strpos($class, __NAMESPACE__ . '\\') === 0){
                $class = str_replace(__NAMESPACE__ . '\\', '', $class);
                $class = str_replace('\\', '/', $class);
                require 'classes/' . $class . '.php';
            }
        }
    }

?>