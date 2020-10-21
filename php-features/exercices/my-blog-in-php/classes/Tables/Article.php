<?php

namespace App\Tables;

class Article {

    /**
     * recover unknown class property and redirect to the appropriate method
     *
     * @param string $name property name
     */
    public function __get($name)
    {
        $method = 'get' . ucfirst($name);
        $this->key = $this->$method(); // To return the function once, if doesn't exist
        return  $this->key;
    }

    /**
     * Return intern url of an article
     */
    public function getUrl(){
        return 'index.php?p=articles&post=' . $this->id;
    }
    /**
     * Return the content of an article
     */
    public function getContent(){
        return $this->content;
    }
    /**
     * Return extern url of an article
     */
    public function getLink(){
        return $this->link;
    }
}