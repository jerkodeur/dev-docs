<?php

namespace App\Tables;

class Article {

    public function getUrl(){
        return 'index.php?p=articles&post=' . $this->id;
    }

    public function getContent(){
        return $this->content;
    }

    public function getLink(){
        return $this->link;
    }
}