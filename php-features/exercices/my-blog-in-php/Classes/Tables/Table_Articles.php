<?php

namespace App\Tables;

use App\Database;
use App\Tables\Table;

class Table_Articles extends Table{

    static function getLabel($label){
        $sql = "SELECT a.id as id, a.title as title, a.content as content, a.link as link
                FROM articles a
                JOIN articles_labels al ON al.article_id = a.id
                JOIN labels l ON l.id = al.label_id
                WHERE l.name = ?";
        return Database::prepare($sql, $label, get_called_class(), false);
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
        // $sql="INSERT INTO articles DATA($title, $content, $link, $date)"

    }
}