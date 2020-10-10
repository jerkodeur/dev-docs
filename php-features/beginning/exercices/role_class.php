<?php
include("service/classes/display_examples.php");

/**
 * Class Character
 * Create and handle character features
 */

class Character {

    const FULL_LIFE = 100;

    /**
     * @var int Damage points of the character
     */

    public $damage = 20;

    /**
     * Public parameters required for characters creation
     * @param string $name Name of the character
     * @param int $life Number of the initial life points of the character
     */

    public function __construct($name, $life)
    {
        $this->name = $name;
        $this->life = $life;
    }

    /**
     * Return if the target is alive or dead
     * @return bool true or false
     */

    public function getIsDead() {
        return $this->life <= 0;
    }

    /**
     * Method for avoid points life under 0
     * @param object $character
     */

    protected static function prevent_nolife($character){
        if($character->life < 0) $character->life = 0;
    }

    /**
     * Method for avoid points life over 100
     * @param object $character
     */

    protected static function prevent_fulllife($character){
        if($character->life > 100) $character->life = 100;
    }

    /**
     * Verify if a target is set, return $this character if not
     * @param object|null
     * @return object this or defined target
     */

    protected function defineTarget($target = null){
        return isset($target) ? $target : $this;
    }

    /**
     * Method which handle life regenerate
     * @param int|null $reg_points Number of life points to regenerate
     * @param object|null $character Target to regenerate
     */

    public function regenerate($reg_points = null, $target = null) {
        $target = $this->defineTarget($target);
        $target->life = !isset($reg_points) ? $this::FULL_LIFE : $target->life += $reg_points;
        self::prevent_fulllife($target);
    }

    /**
     * Remove points life to the attack target and return a summary message
     * @param object $target Target of the attack
     * @return string message with attack action and number of damage points suffered
     */

    public function attack($target) {
        $target->life -= $this->damage;
        self::prevent_nolife($target);
        return $this->name . " attaque " . $target->name . " et lui inflige " . $this->damage . " points de dégats !";
    }

    /**
     * Return remaining points life of the target
     * @param object|null $target Target to inform
     * @return string message with remaining life points
     */

    public function getRemainingLife($target = null){
        $target = $this->defineTarget($target);
        return "Il reste à " . $target->name . " " . $target->life . " points de vie";
    }
}

$merlin = new Character("Merlin", 100);
$harry = new Character("Harry", 25);

echo formatting::insertEmptyLine($merlin->attack($harry));
if($harry->getIsDead()){
    echo $harry->name . " est mort :(";
} else {
    echo $harry->getRemainingLife();
}

echo formatting::goToLine($merlin->regenerate(50, $harry));
echo formatting::goToLine($harry->getRemainingLife());
?>