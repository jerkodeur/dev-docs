<?php

namespace APP\Tables;

use App\Tables\Table;

class Label extends Table{

    public $table = 'labels';

    public function getName(){
        return $this->name;
    }
}
