<?php

namespace App\Tables;

use App\Database;
use App\Main\Debug;
use App\SqlRequest;

class Table{

    protected $_table;

    public function __construct()
    {
        $class_name = explode('\\',get_called_class());
        $this->_table = strtolower(end($class_name)) . 's';
    }

    /**
     * Return table name depending of the class name
     * @return string table name
     */
    // private function getTable(){
    //     $class_name = explode('\\',get_called_class());
    //     return static::$table = strtolower(end($class_name)) . 's';
    // }

    /**
     * Fetch all datas table from selected table
     * @return object
     */
    public function getAll(){
        return Database::query("SELECT * FROM " . $this->_table, get_called_class());
    }

    /**
     * Fetch all datas table from selected table
     * @param string $params sql condition field (field1, field2, ...)
     * @param array $values corresponding values
     * @return object result of the request
     */
    public function find($params, $values){
        $db = new Database();
        return DATABASE::prepare(SqlRequest::sqlGet($this->_table, null, $params), $values, get_called_class(), true);
    }
}

?>