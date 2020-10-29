<?php

namespace App\Tables;

use App\Database;
use App\Main\Debug;
use App\SqlRequest;

class Table{

    protected $table;

    /**
     * Initialise the generic Table class
     *
     * @param string $table name of the db table
     */
    public function __construct($table = null)
    {
        is_null($this->table) && $this->table = $table;
    }

    /**
     * Fetch all datas table from selected table
     * @return object
     */
    public function getAll(){
        return Database::query("SELECT * FROM " . $this->table, get_called_class());
    }

    /**
     * Fetch all datas table from selected table
     * @param string $params sql condition field (field1, field2, ...)
     * @param array $values corresponding values
     * @return object result of the request
     */
    public function find($params, $values){
        return DATABASE::prepare(SqlRequest::sqlGet($this->table, null, $params), $values, get_called_class(), true);
    }
}

?>