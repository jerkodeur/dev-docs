<?php

namespace App\Tables;

use App\Main\Debug;

class Article {

    /**
     * recover unknown class property and redirect to the appropriate method
     *
     * @param string $name property name
     * @return mixed
     */
    public function __get($name = '')
    {
        $method = 'get' . ucfirst($name);
        $this->key = $this->$method(); // To return the function once, if doesn't exist
        return  $this->key;
    }

    /**
     * Return intern url of an article
     * @return string
     */
    public function getUrl(){
        return 'index.php?p=articles&post=' . $this->id;
    }

    /**
     * Return the content of an article
     * @return string
     */
    public function getContent(){
        return $this->content;
    }

    /**
     * Return extern url of an article
     * @return string
     */
    public function getLink(){
        return $this->link;
    }

    public function getAll(){
        return $this;
    }

    /**
     * Create a new article
     *
     * @param string $title
     * @param string $content
     * @param string $link
     * @param date $date
     * @return null
     */
    public function newArticle($title , $content, $link, $date, $rest){
        Debug::inspectElement([$title , $content, $link, $date, $rest]);
        // $sql="INSERT INTO articles DATA($title, $content, $link, $date)"

    }
}