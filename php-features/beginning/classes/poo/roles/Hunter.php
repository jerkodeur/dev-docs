<?php

namespace php_training\poo\roles;

    //TODO Utiliser l'héritage de classe
    //* Permet d'utiliser les variables et méthodes d'une classe parente, de les modifier, et même d'en créer des nouvelles

    class Hunter extends Character{

        protected $initial_life = 80;
        protected $damage = 10;

        public function __construct($name, $sexe)
        {
            //TODO use a method or a variable of the parent element
            parent::__construct($name, $sexe);
        }
    }

?>