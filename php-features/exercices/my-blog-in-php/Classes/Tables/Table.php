<?php

namespace APP\Tables;

use App\Connection;

class Table{

    protected $table;

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

    static function sqlColumns($columns){
        $string_columns = '';
        foreach($columns as $column){
            $string_columns .= $column . ',';
        }
        return $string_columns;
    }

    static function sqlWhere($conditions){
        if(isset($conditions)){
            $where = ' WHERE';
            foreach($conditions as $condition){
                $where .= " $$condition = $condition";
            }
            return $where;
        }
    }

    /**
     * Handle and return sql request
     * @param string $table Table to run db query
     * @param array $columns Selected columns
     * @param array $where query conditions
     * @return string  db statement
     */
    public function sqlGet($table, $columns = null, $where = null){
        $columns = null !== $columns ? static::sqlColumns($columns) : '*';
        $where = static::sqlWhere($where);
        return "SELECT $columns from $table $where";
    }

    // public static function getAll($table, $class){
    //     return Connection::query("SELECT * FROM $table", get_called_class($class));
    // }

}

?>