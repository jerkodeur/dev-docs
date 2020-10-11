<?php

namespace App;

/**
 * Use for automatically load classes into specific namespace
 * @package App
 */

class AutoLoader{

        /**
         * Register our autoload classes
         * @return null
         */
        static function register(){
            spl_autoload_register(array(__CLASS__, 'autoload'));
        }

        /**
         * Include the file corresponding to our class
         *
         * @param string $class Name path of the class to load
         */
        static function autoload($class){
            // apply only if the current namespace is called
            if(strpos($class, __NAMESPACE__ . '\\') === 0){
                $class = str_replace(__NAMESPACE__ . '\\', '', $class);
                $class = str_replace('\\', '/', $class);
                require __DIR__ . '/' . $class . '.php';
            }
        }
    }

?>