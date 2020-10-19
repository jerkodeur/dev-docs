<?php

namespace App;

use App\main\Debug;
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

    public function query($statement){
        $req = $this->getPDO()->query($statement);
        $datas = $req->fetchAll(PDO::FETCH_OBJ);
        return $datas;
    }

}

?>