<?php

namespace App;

use App\Main\Debug;
use PDO;


/**
 * Main method to connect and manage database connection
 */
class Connection {

    private $DB_HOST;
    private $DB_USER;
    private $DB_PASS;
    private $DB_NAME;
    private $pdo;

    /**
     * Define variables for the database connection
     * @param string $db_name Name of the database
     * @return void
     */
    public function __construct($db_name)
    {
        $this->DB_NAME = $db_name;
        $this->DB_HOST = env('DB_HOST');
        $this->DB_USER = env('DB_USERNAME');
        $this->DB_PASS = env('DB_PASSWORD');
    }

    /**
     * Open connection to database with PDO
     * @return pdo object
     */
    private function getPDO(){
        if($this->pdo === null){
            $pdo = new PDO("mysql:host=$this->DB_HOST;dbname=$this->DB_NAME", $this->DB_USER, $this->DB_PASS);
            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $this->pdo = $pdo;
        }
        return $this->pdo;
    }

    /**
     * Manage queries to the bdd
     * @param string $statement Database statement
     * @param class $class Class to load the datas
    */
    public function query($statement, $class){
        $req = $this->getPDO()->query($statement);
        $datas = $req->fetchAll(PDO::FETCH_CLASS, $class);
        return $datas;
    }

    /**
     * Prepare a query to avoid inject sql (security)
     * @param query $statement
     * @param string|array $params
     * @param class $class path of the called class
     * @param boolean $one Return one or many results
     * @return string|array Depending of the number of result expected
     */
    public function prepare($statement, $params, $class, $one = true){
        $req = $this->getPDO()->prepare($statement); // Avoid inject html
        $req->execute($params); // joins the params to the query
        $req->setFetchMode(PDO::FETCH_CLASS, $class); // Allow assigning a class to the PDO request
        // Define the expect number of results
        if($one){
            return $req->fetch();
        } else {
            return $req->fetchAll();
        }
    }
}

?>