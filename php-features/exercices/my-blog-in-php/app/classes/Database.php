<?php

namespace App;

use \PDO;

class Database {

    private $db_name;
    private $db_host;
    private $db_user;
    private $db_password;
    private $pdo;

    public function __construc($db_name, $db_host = 'localhost', $db_user = 'root', $db_password = 'root'){
        $this->db_name = $db_name;
        $this->db_host = $db_host;
        $this->db_user = $db_user;
        $this->db_password = $db_password;
    }

    private function getPDO(){
        if($this->pdo === null){
            $pdo = new PDO('mysql:host=localhost;dbname=blog_php', 'jerkoder', 'JP93@s12RT77');
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