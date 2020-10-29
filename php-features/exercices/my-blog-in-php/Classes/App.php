<?php

namespace App;

use App\Main\Debug;

class App{

    /**
     * Initialize a new table class
     *
     * @param string $table name of the db table
     * @return class
     */
    public static function getTable($table){
        $class_table = '\\App\\Tables\\Table_' . ucfirst($table);
        return new $class_table($table);
    }
}