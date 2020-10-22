<?php

namespace App;

use App\Main\Debug;
use \PDO;


/**
 * Management of database, connection and queries
 * @package App/Database
 */

class Database {

    private $db_name;
    private $db_host;
    private $db_user;
    private $db_password;
    private $pdo;

    /**
     * Database constructor
     *
     * @param string $db_name
     * @param string $db_host
     * @param string $db_user
     * @param string $db_password
     */
    public function __construct($db_name, $db_host = 'locahost', $db_user = 'root', $db_password = 'root'){
        $this->db_name = $db_name;
        $this->db_host = $db_host;
        $this->db_user = $db_user;
        $this->db_password = $db_password;
    }

    private function getPDO(){
        if($this->pdo === null){
            $pdo = new PDO("mysql:host=$this->db_host;dbname=$this->db_name", $this->db_user, $this->db_password);
            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $this->pdo = $pdo;
        }
        return $this->pdo;
    }
    /**
     * Manage queries to the bdd
     *
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
     *
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
        Debug::inspectElement($req);
        // Define the expect number of results
        if($one){
            return $req->fetch();
        } else {
            return $req->fetchAll();
        }
    }

}

?>