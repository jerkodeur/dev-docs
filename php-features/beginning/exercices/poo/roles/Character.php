<?php

/**
 * Class Character
 * Create and handle character features
 */

class Character {

    /**
     * @var int $life Initial points of life
     */
    protected $initial_life = 100;

    /**
     * @var int $damage Points of damage
     */
    protected $damage = 5;

    /**
     * Public parameters required for characters creation
     * @param string $name
     * @param string $sexe
     * @param int $life
     */

    public function __construct($name, $sexe)
    {
        $this->name = $name;
        $this->sexe = $sexe;
        $this->life = $this->initial_life;
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
    protected static function prevent_full_life($character){
        if($character->life > $character->initial_life) $character->life = $character->initial_life;
    }

    /**
     * Verify if a target is set, return $this character if not
     * @param object|null
     * @return object this or defined target
     */
    protected function define_target($target = null){
        return isset($target) ? $target : $this;
    }

    /**
     * Return number of life points restored
     *
     * @param class $target
     * @param integrer $previous_life_points number of life points before care
     */
    protected function render_health_points($target, $previous_life_points){
        return $target->life - $previous_life_points;
    }

    /**
     * Method which handle life care
     * @param integrer|null $reg_points Number of life points to care
     * @param class|null $character Target to care
     */
    public function care($reg_points = null, $target = null) {
        $target = $this->define_target($target);
        $remainingBefore = $target->life;
        $target->life = !isset($reg_points) ? $this::FULL_LIFE : $target->life += $reg_points;
        self::prevent_full_life($target);
        $points_restore = $this->render_health_points($target, $remainingBefore);
        return $this->name . " soigne " . $target->name . " et lui rend " . $points_restore . " points de vie !";
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
        $target = $this->define_target($target);
        return "Il reste à " . $target->name . " " . $target->life . " points de vie";
    }
}
?>