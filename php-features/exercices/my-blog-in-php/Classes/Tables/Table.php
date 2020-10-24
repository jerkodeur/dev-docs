<?php

namespace App\Tables;

use App\Database;
use App\Main\Debug;
use App\SqlRequest;

class Table{

    protected static $table;

    /**
     * recover unknown class property and redirect to the appropriate method
     * @param string $name property name
     * @return mixed
     */
    public function __get($name = '')
    {
        $method = 'get' . ucfirst($name);
        $this->key = $this->$method(); // To return the function once, if doesn't exist
        return $this->key;
    }

    /**
     * Return table name depending of the class name
     * @return string table name
     */
    protected static function getTable(){
        $class_name = explode('\\',get_called_class());
        return static::$table = strtolower(end($class_name)) . 's';
    }

    /**
     * Fetch all datas table from selected table
     * @return object
     */
    public static function getAll(){
        return Database::query("SELECT * FROM " . static::getTable(), get_called_class());
    }

    /**
     * Fetch all datas table from selected table
     * @param string $params sql condition field (field1, field2, ...)
     * @param array $values corresponding values
     * @return object result of the request
     */
    public static function find($params, $values){
        return Database::prepare(SqlRequest::sqlGet(static::getTable(), null, $params), $values, get_called_class(), true);
    }
}

?>