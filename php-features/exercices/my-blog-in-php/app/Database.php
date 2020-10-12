<?php

namespace App;

class Database{

    private $dbname;
    private $localhost;
    private $user;
    private $password;

    public function __construc($db_name, $db_host = 'localhost', $db_user = 'root', $db_password = 'root'){
        $this->db_name = $db_name;
        $this->db_host = $db_host;
        $this->db_user = $db_user;
        $this->db_password = $db_password;
    }
}

?>