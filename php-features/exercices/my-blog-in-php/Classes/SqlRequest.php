<?php

namespace App;

use App\Main\Debug;

Class SqlRequest {

    static protected function sqlWhere($conditions){
        $conditions = explode(',', $conditions);
        if(count($conditions) > 1){
            $statement = implode(" = ? AND", $conditions);
            return "WHERE " . $statement . "= ?";
        } else {
            return "WHERE $conditions[0] = ?";
        }
    }

    /**
     * Handle and return sql request
     * @param string $table Table to run db query
     * @param string $params fields to return (field1, field2 [, ...])
     * @param string $where sql condition params (field1, field2 [, ...])
     * @return string  db statement
     */
    static function sqlGet($table, $params = null, $where = null){
        $where = $where !== null ? self::sqlWhere($where) : '';
        $params = $params !== null ? $params : '*';
        $statement = "SELECT ". $params . " from " . $table . " " . $where;
        return $statement;
    }
}

?>