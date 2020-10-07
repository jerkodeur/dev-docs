<?php

class Person {

    //TODO Attributs
    //* Peut être considéré comme une variable

    public $firstname;
    public $lastname;
    public $age;
    public $sexe; //? initialisé à NULL

    //TODO Constantes
    //* Constantes propres à la classe

    const POWER = 0;
    const HEALTH = 0;
    CONST CAST = 0;
    CONST LIFE = 100;
    CONST DAMAGE = 0;
    CONST SPEED = 25;

    //TODO Méthodes
    //* Les méthodes sont les actions que l'on peut appliquer à un objet. Il s'agit en fait de fonctions qui peuvent prendre ou non des paramètres et retourner ou non des valeurs / objets. S'agissant d'actions, il est conseillé de les nommer avec un verbe à l'infinitif

    public function __construct()
    {

    }

    public function display_speed() {
        return "La vitesse de course de " . $this->firstname . " est de " . $this::SPEED;
    }
}

//TODO Instanciation d'une classe
//* L'instanciation d'une classe est la phase de création des objets issus de cette classe. Lorsque l'on instancie une classe, on utilise le mot-clé new suivant du nom de la classe. Cette instruction appelle la méthode constructeur ( __construct() ) qui construit l'objet et le place en mémoire.

$person1 = new Person();
$person2 = new Person();

//TODO Affecter des valeurs aux attributs
$person1->firstname = 'Jérôme';
$person1->lastname = 'Potié';
$person1->age = '43';
$person1->sexe = 'Male';

//TODO Récupérer l'attribut d'une classe
echo "Le nom de famille de " . $person1->firstname . " est " . $person1->lastname . " !<br />";

//TODO Récupérer les constances d'une classe
echo "La vie de " . $person1->firstname . " est de " . $person1::LIFE . " !<br />";

//TODO Utilisation d'une méthode de classe
echo $person1->display_speed() . '<br />';
?>