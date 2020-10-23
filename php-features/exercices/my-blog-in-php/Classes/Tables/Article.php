<?php

namespace App\Tables;

use App\Main\Debug;
use App\Tables\Table;

class Article extends Table{

    public $table = 'blog';

    /**
     * Return intern url of an article
     * @return string
     */
    public function getUrl(){
        return "index.php?p=$this->table&post= . $this->id";
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