<?php

namespace App;

use App\Main\Debug;

class Config{
    static private $_settings = [];

    static public function getInstance(){
        if(is_null(self::$_settings)){
            self::$_settings = new Config();
        }
        return self::$_settings;
    }

    public function __construct()
    {
        require('env.php');
        self::$_settings = $db_variables;
    }
}
