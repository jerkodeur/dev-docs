<?php

namespace App;

use App\Main\Debug;
use App\Tables\Table;
use PDO;


/**
 * Main method to connect and manage database connection
 */
class Database {

    static private $pdo;

    /**
     * Open connection to database with PDO
     * @return pdo object
     */
    static private function getPDO(){
        $DB_NAME = env('DB_NAME');
        $DB_HOST = env('DB_HOST');
        $DB_USER = env('DB_USERNAME');
        $DB_PASS = env('DB_PASSWORD');
        if(self::$pdo === null){
            $pdo = new PDO("mysql:host=$DB_HOST;dbname=$DB_NAME", $DB_USER, $DB_PASS);
            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            self::$pdo = $pdo;
        }
        return self::$pdo;
    }

    /**
     * Define if one or the last result must  be return
     *
     * @param object $req request
     * @param bool $one
     */
    static private function defineIfOne($req, $one){
        if($one){
            return $req->fetch();
        } else {
            return $req->fetchAll();
        }
    }
    /**
     * Manage queries to the bdd
     * @param string $statement Database statement
     * @param class $class Class to load the datas
     */
    public static function query($statement, $class, $one = false){
        $req = self::getPDO()->query($statement);
        $req->setFetchMode(PDO::FETCH_CLASS, $class);
        return static::defineIfOne($req, $one);
    }

    /**
     * Prepare a query to avoid inject sql (security)
     * @param query $statement
     * @param string|array $params
     * @param class $class path of the called class
     * @param boolean $one Return one or many results
     * @return string|array Depending of the number of result expected
     */
    public static function prepare($statement, $params, $class, $one = true){
        $req = self::getPDO()->prepare($statement); // Avoid inject html
        $req->execute($params); // joins the params to the query
        $req->setFetchMode(PDO::FETCH_CLASS, $class); // Allow assigning a class to the PDO request
        // Define the expect number of results
        return static::defineIfOne($req, $one);
    }
}

?>