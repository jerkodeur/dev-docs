<?php

class Character {

    public $damage = 20;

    public function __construct($name, $life)
    {
        $this->name = $name;
        $this->life = $life;
    }

    public function is_dead() {
        return $this->life <= 0;
    }

    public function regenerate($reg_points = null) {
        if(isset($reg_points) && $this->life < 100){
            if($this->life + $reg_points < 100){
                $this->life += $reg_points;
            }
        } else {
            $this->life = 100;
        }
    }

    public function attack($opponent) {
        if($opponent->life - $this->damage > 0){
            $opponent->life -= $this->damage;
        } else {
            $opponent->life = 0;
        }
        echo $this->name . " attaque " . $opponent->name . " et lui inflige " . $this->damage . " points de dégats !<br />";
    }

    public function remaining_life(){
        echo "Il reste à " . $this->name . " " . $this->life . " points de vie<br />";
    }
}

$merlin = new Character("Merlin", 100);
$harry = new Character("Harry", 100);

$merlin->attack($harry);
if($harry->is_dead()){
    echo $harry->name . " est mort :(";
} else {
    $harry->remaining_life();
}

?>