/* jshint -W060 */
/* jshint -W104 */
/* jshint -W030 */
/* jshint -E011 */

/* ##################################################################################################################################################################
/* #################################################################   LES BASES JAVASCRIPT   #######################################################################
/* ##################################################################################################################################################################
 
     _______________________________________________________________________________________________________________________________________________________________
    |                                                                                                                                                               |
    |: Les scripts externes ne peuvent pas contenir de balises <script>
    |: Chaque instruction écrite est appelée une déclaration. Les instructions JavaScript sont séparées par des points-virgules.          
    |___                                                                                                                                                            */              
            var x = 10;                         // On déclare une variable (sensible à la casse)
            document.write(x);                  // L'on affiche la valeur X            
/*      |___________________________________________________________________________________________________________________________________________________________|

    ___________________________
    |:::::::::::::::::::::::::|
    |:: NOMMER UNE VARIABLE ::|_____________________________________________________________________________________________________________________________________
    |___                                                                                                                                                            |
        |: Le premier caractère doit être une lettre, un trait de soulignement (_) ou un signe dollar ($). 
        |: Les caractères suivants peuvent être des lettres, des chiffres, des traits de soulignement ou des signes dollar.
        |: Les numéros ne sont pas autorisés en tant que premier caractère.
        |: Les noms de variable ne peuvent pas inclure d'opérateur mathématique ou logique dans le nom. Par exemple, 2 * quelque chose ou ce + cela;
        |: Les noms JavaScript ne doivent pas contenir d'espaces.
        |: Les traits d'union ne sont pas autorisés en JavaScript. Il est réservé aux soustractions. 
        |: Vous ne devez utiliser aucun symbole spécial, comme mon # num, num%, etc.
        |: Assurez-vous de ne pas utiliser les mots réservés JavaScript. 
        |: Une variable peut être déclarée sans valeur. La valeur peut nécessiter un calcul, ce qui sera fourni ultérieurement, comme une entrée utilisateur.
        |: Une variable déclarée sans valeur aura la valeur undefined.
        |___________________________________________________________________________________________________________________________________________________________|

    ________________________
    |::::::::::::::::::::::|
    |:: TYPES DE DONNEES ::|________________________________________________________________________________________________________________________________________
    |___                                                                                                                                                            |
        |: Les variables JavaScript peuvent contenir de nombreux types de données, tels que des nombres, des chaînes, des tableaux, etc.
        |: Contrairement à beaucoup d'autres langages de programmation, JavaScript ne définit pas différents types de nombres, tels que des entiers, 
        |: des nombres courts, des noms longs, des nombres à virgule flottante, etc.
        |: Les nombres JavaScript peuvent être écrits avec ou sans décimales.
        |: Une variable peut facilement être modifiée en d'autres types en lui attribuant une autre valeur de type de données, telle que:
        | num = 'une chaîne aléatoire'.                                                                                                                   
        |_                                                                                                                                                          */
            var num = 55.55;             // Les nombres JavaScript sont toujours stockés sous forme de nombres à virgule flottante en double précision.
            var name = 'John';
            var text = "My name is John Smith";
            var text = "My name is 'John' ";
/*       _
        |
        |: Il arrive parfois que l'on souhaite forcer la conversion d'une valeur dans un autre type. On parle alors de conversion explicite. 
        |: Pour cela, JavaScript dispose des instructions {'Number'}' et {'String'}' qui convertissent respectivement en un nombre et une chaîne la valeur placée 
        | entre parenthèses.                                                          
        |_                                                                                                                                                          */
            var i = Number("5");
            var i = String("5");                                                                                                             
/*       _
        |
        |: Vous pouvez obtenir des guillemets à l'intérieur des guillemets en utilisant le caractère d'échappement comme ceci: \" ou \' à l'intérieur des
        |  guillemets simples.
        |: Le caractère d'échappement (\) peut également être utilisé pour insérer d'autres caractères spéciaux dans une chaîne.
        |_
            \\    Insérer une barre oblique
            \n    Passage à la ligne
            \r    Retour au début de la ligne (carriage return)
            \t    Tabulation
            \b    Retour en arrière (backspace)
            \f    Saut de page (form feed)                                                                                                                
         _
        | 
        |: Dans JavaScript Boolean, vous pouvez avoir l'une des deux valeurs, true ou false.
        |: Celles-ci sont utiles lorsque vous avez besoin d'un type de données ne pouvant avoir que l'une des deux valeurs, 
        | telles que Oui / Non, On / Off, Vrai / Faux.  
        |: La valeur booléenne de 0 (zéro), null, non définie, chaîne vide est false.
        |: Tout ce qui a une "vraie" valeur est vrai.                                                                                                       
        |_                                                                                                                                                          */
            var isActive = true; 
            var isHoliday = false;
/*      |___________________________________________________________________________________________________________________________________________________________|
    ________________________________
    |::::::::::::::::::::::::::::::|
    |:: ES6 VARIABLES ET CHAINES ::|________________________________________________________________________________________________________________________________
    |___                                                                                                                                                            |  
        |: Dans ES6, nous avons trois façons de déclarer des variables                                                                                       
        |: Le type de déclaration utilisé dépend de la portée nécessaire. La portée est le concept fondamental dans tous les langages de programmation 
        |: qui définit la visibilité d'une variable.                                                                                                        
        |_                                                                                                                                                          */
            var a = 10;
            const b = 'hello';
            let c = true;
/*
            ___________
            ||:::::::|| 
            ||: LET :||_____________________________________________________________________________________________________________________________________________|   
            ||__                                                                                                                                                    |
                |: Contrairement au mot-clé ['var'], qui définit une variable globalement ou localement à une fonction entière quelle que soit la portée du bloc,
                |  ['let'] permet de déclarer des variables dont la portée est limitée au bloc, à l'instruction ou à l'expression dans lequel elles sont utilisées   
                |_                                                                                                                                                  */
                    if (true) {
                        let name = 'Jack';
                    }
/*          
                    |: Dans ce cas, la variable de nom n’est accessible que dans le cadre de l’instruction ["if"] car elle a été déclarée comme ['let'].
                    |: Pour démontrer la différence d’étendue entre ['var'] et ['let'], considérons cet exemple:                                                            
                                                                                                                                                                    */
                        function varTest() {
                            var x = 1;
                            if (true) {
                                var x = 2;              // même variable
                                console.log(x);         // 2
                            }
                            console.log(x);             // 2
                        }
                
                        function letTest() {
                            let x = 1;
                            if (true) {
                                let x = 2;              // différente variable
                                console.log(x);         // 2
                            }
                            console.log(x);             // 1
                        }                                                                                                                                             
/*               _
                |
                |: Une des meilleures utilisations de ['let'] est dans les boucles:                                                                                   
                |_                                                                                                                                                   */
                    for (let i = 0; i < 3; i++) {
                        document.write(i);
                    }                                                                                                                                           
/*                                                                                                                                                           
                    |: Ici, la variable "i" n’est accessible que dans le cadre de la boucle ["for"], où elle est nécessaire.
                    |: ['let'] n'est pas soumis à Variable Hoisting, cela signifie que les déclarations ['let'] ne se déplacent pas au sommet du contexte
                    | d'exécution en cours.
                    |_______________________________________________________________________________________________________________________________________________|

            _____________
            ||:::::::::|| 
            ||: CONST :||___________________________________________________________________________________________________________________________________________   
            ||__                                                                                                                                                    |
                |: Les variables ['const'] ont la même portée que les variables déclarées à l'aide de ['let']. La différence est que les variables ['const'] 
                | sont immuables, elles ne peuvent pas être réaffectées.
                |: ['const'] n'est pas soumis à Variable Hoisting, ainsi, les déclarations const ne se déplacent pas au sommet du contexte d'exécution actuel.
                |___________________________________________________________________________________________________________________________________________________|
        
        _________________________
        ||:::::::::::::::::::::|| 
        ||: MODELES LITTERAUX :||___________________________________________________________________________________________________________________________________   
        ||__                                                                                                                                                        |
            |: Les modèles littéraux sont un moyen de générer des variables dans la chaîne.
            |: Avant ES6, nous devions rompre la chaîne, par exemple:                                                                                           
            |_                                                                                                                                                      */
                let name = 'David';
                let msg = 'Welcome ' + name + '!';
/*           _
            |          
            |: ES6 introduit une nouvelle façon de sortir les valeurs de variables dans les chaînes. Le même code ci-dessus peut être réécrit comme suit:       
            |_                                                                                                                                                      */
                let name = 'David';
                let msg = `Welcome ${name}!`;                                                
/*                                                                                                                                                           
                |: Notez que les modèles littéraux sont entourés du caractère backtick (``) au lieu de guillemets simples ou doubles.
                |: "${Expression}" est un espace réservé et peut inclure n'importe quelle expression qui sera évaluée et insérée dans le modèle littéral.           
                                                                                                                                                                    */
                    let a = 8;
                    let b = 34;
                    let msg = `The sum is ${a+b}`;
/*

                |  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                |  !!                            Notez que le code ES6 ne fonctionnera que dans les navigateurs qui le prennent en charge.                      !!
                |  !!                Les appareils et navigateurs plus anciens qui ne prennent pas en charge ES6 renverront une erreur de syntaxe.              !!
                |  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                |___________________________________________________________________________________________________________________________________________________|

    ____________________________________
    |::::::::::::::::::::::::::::::::::|
    |:: LES OPERATEURS ARITHMETIQUES ::|____________________________________________________________________________________________________________________________
    |___                                                                                                                                                            | 
        |: (+), (-), (*), (/), Modulo(%), Incrémentation(++), Décrémentation (--)
        |_
            Incrément (++)
            
                |: L'opérateur d'incrémentation ajoute la valeur numérique de son opérande de un. Si placé avant l'opérande, retourne la valeur incrémentée.
                |: S'il est placé après l'opérande, il retourne la valeur d'origine et incrémente l'opérande.
                
            Décrémenter (--)
            
                |: L'opérateur de décrémentation retire la valeur numérique de son opérande de un. Si placé avant l'opérande, retourne la valeur décrémentée.
                |: S'il est placé après l'opérande, il retourne la valeur d'origine puis décrémente l'opérande.
         _
        |        
        |: Vous pouvez obtenir le résultat d'une expression de chaîne à l'aide de la fonction eval (), qui prend un argument d'expression de chaîne tel que 
        |: eval ("10 * 20 + 8") et renvoie le résultat. Si l'argument est vide, il retourne undefined.                                                       
        |_                                                                                                                                                          */
            var x = 10;
            var y = x + 5 + 22 + 45 + 6548;
            var myVariable = 26 % 6;            // ***
            var a = 0; var b = 10;
            var a = b++;                        // a = 10 / b = 11
            var a = ++b;                        // a = 11 / b = 11
/*       _
        |    
        |! En JavaScript, l'opérateur modulus est utilisé non seulement sur les entiers, mais également sur les nombres à virgule
        |___________________________________________________________________________________________________________________________________________________________|
    ____________________________________
    |::::::::::::::::::::::::::::::::::|
    |:: LES OPERATEURS D'ASSIGNATION ::|____________________________________________________________________________________________________________________________
    |___                                                                                                                                                            | 
        |: (x += y) équivaut à (x = x + y)
        |: (-=), (*=), (/=), (%=) sont également utilisables
        |: Vous pouvez utiliser plusieurs opérateurs d’assignation sur une même ligne, tels que x -= y += 9.                                                 
        |_                                                                                                                                                          */
            x -= y += 9;                    // Equivaut à x = x - (y + 9)                                                                                                               
/*        |_________________________________________________________________________________________________________________________________________________________|
    _____________________________________
    |:::::::::::::::::::::::::::::::::::|
    |:: LES OPERATEURS DE COMPARAISON ::|___________________________________________________________________________________________________________________________
    |___                                                                                                                                                            | 
        |: Lorsque vous utilisez des opérateurs, assurez-vous que les arguments sont du même type de données. Les nombres doivent être comparés 
        |  avec des nombres, des chaînes avec des chaînes, etc.
        |:
        |: == | === | Egal à            | Identique (Egal et du même type de donnée)    
        |: != | !== | Différent         | Pas identique
        |: >  | <   | Supérieur         | inférieur          
        |: <= | >=  | Inférieur ou égal | Supérieur ou égal                                                                                                 
        |_                                                                                                                                                          */
            10 === 10;                  // Retourne true
            10 !== 10;                  // Retoune false
/*        |_________________________________________________________________________________________________________________________________________________________|
    _________________________________
    |:::::::::::::::::::::::::::::::|
    |:: LES OPERATEURS DE LOGIQUE ::|_______________________________________________________________________________________________________________________________
    |___                                                                                                                                                            | 
        |: Vous pouvez vérifier tous les types de données. Les opérateurs de comparaison retournent toujours vrai ou faux.
        |: &&   =   ET   
        |: ||   =   OU    
        |: !    =   Différent                                                                                                                               
        |_                                                                                                                                                          */
            (10>5) && (3==5);           // Retourne False
/*        |_________________________________________________________________________________________________________________________________________________________|

    ___________________________________
    |:::::::::::::::::::::::::::::::::|
    |:: LES OPERATEURS CONDITIONNEL ::|_____________________________________________________________________________________________________________________________
    |___                                                                                                                                                            | 
        |: JavaScript attribue une valeur à une variable, en fonction de certaines conditions:
        |_
          | SYNTAXE-->   variable = (condition) ? valeurSiVrai : valeurSiFaux;                                                                                       */

            var age = 42;
            var isAdult = (age < 18) ? "<br>Trop jeune" : "<br>Suffisament agé";
            document.write(isAdult);    // Retourne: Suffisament agé
/*        |_________________________________________________________________________________________________________________________________________________________|

    _______________________________________________
    |:::::::::::::::::::::::::::::::::::::::::::::|
    |:: LES OPERATEURS DE CHAINES DE CARACTERES ::|_________________________________________________________________________________________________________________
    |___                                                                                                                                                            | 
        |: L'opérateur le plus utile pour les chaînes est la concaténation, représentée par le signe [+].
        |: La concaténation peut être utilisée pour créer des chaînes en joignant plusieurs chaînes ou en joignant des chaînes avec d'autres types.
        |: Les nombres entre guillemets sont traités comme des chaînes: "42" n'est pas le nombre 42, c'est une chaîne qui comprend deux caractères, 4 et 2.
        |_                                                                                                                                                          */     
            var mystring1 = "I am learning ";
            var mystring2 = "JavaScript with SoloLearn.";
            document.write("<br>");
            document.write( mystring1 + mystring2);         /* Retourne: I am learning JavaScript with SoloLearn.
          |_________________________________________________________________________________________________________________________________________________________|
        
    
/* ##################################################################################################################################################################
/* #####################################################################   LES CONDITIONS   #########################################################################
/* ##################################################################################################################################################################

     _______________________
    |:::::::::::::::::::::::|
    |: IF / ELSE / ELSE IF :|___________________________________________________________________________________________________________________________________
    |_______                                                                                                                                                    |
*/              var course = 1;
                if (course == 1) {
                    document.write("<h1>HTML Tutorial</h1>");           }   
                else if (course == 2) {
                    document.write("<h1>CSS Tutorial</h1>");            }
                else {
                    document.write("<h1>JavaScript Tutorial</h1>");     }  

                course !== "" ? document.write("La variable 'course' existe!") : document.write("La variable 'course' n'existe pas!");                                                    
/*          |___________________________________________________________________________________________________________________________________________________|
    
     __________
    |::::::::::|
    |: SWITCH :|________________________________________________________________________________________________________________________________________________
    |___                                                                                                                                                        | 
        |: Dans les cas où vous devez tester plusieurs conditions, écrire des instructions |if else| pour chaque condition pourrait ne pas être 
        |  la meilleure solution. L'instruction |switch| est utilisée pour effectuer différentes actions en fonction de différentes conditions.  
        |: L'expression |switch| est évaluée une fois. La valeur de l'expression est comparée aux valeurs de chaque cas. 
        |: S'il y a correspondance, le bloc de code associé est exécuté.                                                                                    
        |___                                                                                                                                                    */
                var day = 2;
                switch (day) {
                    case 1:
                        document.write("Monday");
                        break;                          //   Instruction permettant de quitter le test si la condition est vrai
                    case 2:
                        document.write("Tuesday<br>");
                        break;
                    case 3:
                        document.write("Wednesday");
                        break;
                    default:                      //   Le mot clé "default" spécifie le code à exécuter s'il n'y a pas de correspondance, il peut être omis, 
                                                //   s'il n'est pas nécessaire de gérer le cas où aucune correspondance n'est trouvée..
                        document.write("Another day");
                }
/*          |___________________________________________________________________________________________________________________________________________________|
    
         _______
        |:::::::|
        |: FOR :|_______________________________________________________________________________________________________________________________________________
        |___                                                                                                                                                    |
            |
*/              for (i=1; i<=10; i++) { 
                            /* L'instruction 1 est facultative et peut être omise si vos valeurs sont définies avant le début de la boucle.
                               En outre, vous pouvez initialiser plus d'une valeur dans l'instruction 1 en utilisant des virgules pour les séparer.
                               L'instruction 3 est également facultative et peut être omise si vous incrémentez vos valeurs dans la boucle.                     */
                    document.write(i + " ");
                }
                document.write("<br>");
    /*      |          
            |: En JavaScript, nous utilisons couramment la boucle ["for"] pour parcourir les valeurs d'une liste:
            |                                                                                                                                                   */
                let arr = [1, 2, 3];
                for (let k = 0; k < arr.length; k++) {
                console.log(arr[k]);
                }

    /*       ______________      
            |::::::::::::::|
            |: FOR ... IN :|____________________________________________________________________________________________________________________________  
            |                                                                                                                                           |
            |: La boucle |for ... in| est conçue pour parcourir les clés énumérables d'un [objet].                                                               
            |___                                                                                                                                                */
                    let obj = {a: 1, b: 2, c: 3};
                    for (let v in obj) {
                      console.log(v);                   // Retourne 123
                    }
    /*          |
                |: |for ... in| ne doit PAS être utilisée pour effectuer une itération sur des tableaux car, selon le moteur JavaScript, elle pourrait  
                |  itérer dans un ordre arbitraire. De plus, la variable itérative est une chaîne et non un nombre. Par conséquent, si vous essayez de    
                |  faire un calcul avec la variable, vous effectuerez une concaténation de chaîne au lieu d'être additionnée.
                |_______________________________________________________________________________________________________________________________________|
            
             ______________   
            |::::::::::::::|
            |! FOR ... OF !|____________________________________________________________________________________________________________________________    
            |                                                                                                                                           |
            |: !! ES6 introduit la nouvelle boucle |for ...|, qui crée une boucle itérant des [objet] itératifs. !!                                                 
            |___                                                                                                                                                */
                    let list = ["x", "y", "z"];
                    for (let val of list) {             // À chaque itération, l'élément correspondant de la liste est affecté à la variable "val".
                      console.log(val);                 // Retourne xyz
                    }
    /*         |
               |:  La boucle |for ... of| fonctionne également pour d'autres [objet] itérables, y compris les chaînes
               |:  Fonctionne également sur les collections nouvellement introduites par ES6 (Map, Set, WeakMap et WeakSet).
               |________________________________________________________________________________________________________________________________________|
        
        |
        |: !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        |: !!     Notez que le code ES6 ne fonctionnera que dans les navigateurs qui le prennent en charge. Les appareils et navigateurs plus anciens     !! 
        |: !!                                     qui ne prennent pas en charge ES6 renverront une erreur de syntaxe.                                     !!
        |: !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        |_______________________________________________________________________________________________________________________________________________________|
        
         ___________________
        |:::::::::::::::::::|
        |: LA BOUCLE WHILE :|___________________________________________________________________________________________________________________________________
        |                                                                                                                                                       |
        |: La boucle |while| se répète dans un bloc de code tant qu'une condition spécifiée est vraie.
        |: Assurez-vous que la condition dans une boucle |while| finisse par devenir fausse, sinon la boucle va se répéter à l'infini.                    
        |___                                                                                                                                                    */    
                var i=11;
                while (i<=20) {
                   document.write(i + " ");
                   i++;
                }
                document.write("<br>");                                                                                                                     
/*          |___________________________________________________________________________________________________________________________________________________|

         _________________________
        |:::::::::::::::::::::::::|
        |: LA BOUCLE DO... WHILE :|_____________________________________________________________________________________________________________________________
        |                                                                                                                                                       |
        |: La boucle |do ... while| est une variante de la boucle while. Cette boucle exécute le bloc de code une fois, avant de vérifier
        |  si la condition est vraie, puis elle répète la boucle tant que la condition est vraie.                                                          
        |___                                                                                                                                                    */
                var i=21;
                do {  
                  document.write(i + " ");
                  i++;  
                }
                while (i<=30);
                document.write("<br>");                                                                                                                     
/*          |___________________________________________________________________________________________________________________________________________________|
         ___________________________________
        |:::::::::::::::::::::::::::::::::::|
        |: L'INSTRUCTION BREAK ET CONTINUE :|___________________________________________________________________________________________________________________
        |                                                                                                                                                       |
        |: L'instruction |break| "saute" une boucle et continue à exécuter le code après la boucle.
        |: L'instruction |continue| n'interrompt qu'une itération de la boucle et se poursuit à l'itération suivante.                                          
        |___                                                                                                                                                    */
                for (i = 0; i <= 30; i++) {
                    if (i % 2 !== 0) {
                        continue;
                   } else if (i > 20) {
                        break;
                   }
                   document.write(i + " ");
                }
                document.write("<br>");                                                                                                                         
/*          |___________________________________________________________________________________________________________________________________________________|
                

/* ##################################################################################################################################################################
/* #####################################################################   LES FONCTIONS   ##########################################################################
/* ##################################################################################################################################################################
     ___________________________________________________________________________________________________________________________________________________________
    |                                                                                                                                                           |
    |: Une fonction JavaScript est un bloc de code conçu pour effectuer une tâche particulière. 
    |: Les principaux avantages de l'utilisation des [fonctions]:
    |___
        |: Réutilisation du code: définissez le code une fois et utilisez-le plusieurs fois
        |: Utilisez le même code plusieurs fois avec des arguments différents pour produire des résultats différents.
        |: Le programme sera plus lisible et plus facile à faire évoluer qu'un programme écrit de manière monobloc. 
        |: Les [fonctions] permettent d'appliquer ce principe à la création de logiciels : on va décomposer le programme en écrivant plusieurs [fonctions],
        |  chacune dédiée à un objectif particulier. Le programme fera appel aux [fonctions] au fur et à mesure de son exécution.
        |! S'il est difficile de trouver un nom pertinent pour une fonction, c'est sans doute que son rôle n'est pas bien défini et que sa création
        |  doit être remise en cause.
        |: Une fonction JavaScript est exécutée lorsque "quelque chose" l'invoque ou l'appelle.                                                             
        |___                                                                                                                                                    */
                function ligne() {                              // On définit une fonction (sans paramètres)
                   document.write("<br>"); }                    // Code qui sera exectuté par la fonction
                ligne();                                        // On apelle la fonction (Retour à la ligne); ne pas oublier le point-virgule !
                
                function concact(valeur1, valeur2) {            // On définit une fonction (avec paramètres)
                    document.write(valeur1 + " " + valeur2); }  // Code qui sera exectuté par la fonction
                concact ("Bienvenue", "Visiteur");              // On appelle la fonction avec les arguments requis
    /*          
        |: Si vous transmettez plus d'arguments que ceux définis, ils seront affectés à un tableau appelé arguments.  
        |: Ils peuvent être utilisés comme ceci: arguments [0], arguments [1], etc.
        |: Si une fonction est appelée avec des arguments manquants (inférieurs à ceux déclarés), les valeurs manquantes sont définies sur "undefined",
        |  ce qui indique qu'aucune valeur n'a été affectée à une variable.
        |
        |: !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        |: !!                          Les variables déclarées dans le corps d'une fonction sont appelées des variables locales.                      !!
        |: !!                                    En effet, elles ne sont utilisables qu'à l'intérieur de la fonction.                                 !!
        |: !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        |
         ____________________
        |::::::::::::::::::::|
        |: FONCTION ANONYME :|____________________________________________________________
        |                                                                                 | 
        |: Une fonction anonyme est une fonction directement appelée dans une variable:
        |___                                                                                                                                                    */
                const bonjour = function(prenom) {
                  const message = `Bonjour, ${prenom} !`;
                  return message;
                };

                console.log(bonjour("Thomas")); // "Bonjour, Thomas !"
/*          |_____________________________________________________________________________| 
        |_______________________________________________________________________________________________________________________________________________________|

     ________________________
    |::::::::::::::::::::::::|
    |: L'INSTRUCTION RETURN :|__________________________________________________________________________________________________________________________________
    |___                                                                                                                                                        | 
        |: Une fonction peut avoir une instruction de retour facultative. Il est utilisé pour renvoyer une valeur de la fonction.                                
        |: Cette déclaration est utile lors de calculs nécessitant un résultat.
        |: Lorsque JavaScript atteint une instruction return, la fonction cesse de s'exécuter.
        |: Si vous ne renvoyez rien à partir d'une fonction "return", elle retournera "undefined".
        |___                                                                                                                                                    */
                function aXb(a, b) {
                   return a * b;
                }
                // aLaLigne();
                var x = aXb(5, 6);  
                document.write("___" + x);
                ligne();
/*          |___________________________________________________________________________________________________________________________________________________|
     _____________________
    |:::::::::::::::::::::|
    |: LA FONCTION ALERT :|_____________________________________________________________________________________________________________________________________
    |___                                                                                                                                                        |
        |: Une fonction peut avoir une instruction de retour facultative. Il est utilisé pour renvoyer une valeur de la fonction.  
        |: Une boite d'alerte est utilisée lorsque vous souhaitez vous assurer que les informations parviennent à l'utilisateur.
        |: La fonction d'alerte prend un seul paramètre, qui est le texte affiché dans la zone contextuelle.
        |
        |: !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        |: !!  Attention lorsque vous utilisez des boîtes d'alerte, l'utilisateur peut continuer à utiliser la page uniquement après avoir cliqué sur OK  !!
        |: !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        |_______________________________________________________________________________________________________________________________________________________|
     ______________________
    |::::::::::::::::::::::|
    |: LA FONCTION PROMPT :|____________________________________________________________________________________________________________________________________
    |___                                                                                                                                                        | 
        |: Une boîte d'invite est souvent utilisée pour que l'utilisateur entre une valeur avant d'entrer dans une page.
        |: Lorsqu'une fenêtre d'invite apparaît, l'utilisateur doit cliquer sur OK ou sur Annuler pour continuer après la saisie de la valeur entrée.
        |: Si l'utilisateur clique sur OK, la zone retourne la valeur d'entrée. Si l'utilisateur clique sur Annuler, la zone retourne "null".
        |: La méthode {prompt} prend deux paramètres.
        |___
            |: Le premier est l’étiquette que vous souhaitez afficher dans la zone de texte.
            |: La seconde est une chaîne par défaut à afficher dans la zone de texte (facultatif).
            |                                                                                                                                                   */
                var user = prompt("Quel est ton nom?");
                document.write("Bienvenue " + user);
                ligne();
/*          |
            |: !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            |: !!     L'instruction prompt() renvoie toujours une valeur de type chaîne. Il faudra penser à convertir cette valeur avec l'instruction     !!
            |: !!           Number() si vous souhaitez ensuite la comparer à d'autres nombres ou l'utiliser dans des expressions mathématiques.           !!
            |: !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            |___________________________________________________________________________________________________________________________________________________|   
     _______________________
    |:::::::::::::::::::::::|
    |: LA FONCTION CONFIRM :|___________________________________________________________________________________________________________________________________
    |___                                                                                                                                                        |
        |: Une boîte de confirmation est souvent utilisée pour que l’utilisateur vérifie ou accepte quelque chose.
        |: Lorsqu'une boîte de confirmation apparaît, l'utilisateur doit cliquer sur OK ou sur Annuler pour continuer.
        |: Si l'utilisateur clique sur OK, la boîte retourne "true". Si l'utilisateur clique sur Annuler, la boîte retourne "false".
        |___                                                                                                                                                    */
                var result = confirm("Souhaitez vous vraiment quitter cette page?");
                if (result == true) {
                  alert("Merci pour votre visite");
                }
                else {
                  alert("Merci de rester parmi nous !");
                } 
/*          |___________________________________________________________________________________________________________________________________________________|
     ______________________________
    |::::::::::::::::::::::::::::::|
    |: LES FONCTIONS PRE-DEFINIES :|____________________________________________________________________________________________________________________________
    |___                                                                                                                                                        |
        |: Nous avons déjà rencontré plusieurs [fonctions] prédéfinies de JavaScript comme prompt() ou alert()
        |: Le langage vous propose un nombre important de [fonctions] qui répondent à des besoins variés
        |: En programmation comme ailleurs, il est rarement utile de réinventer la roue et il est important de privilégier l'utilisation 
        |  de ces [fonctions] existantes plutôt qu'une réécriture manuelle. 
        |___                                                                                                                                                    */
                Math.min(4.5, 5);       // 4.5
                Math.random();          // Un nombre aléatoire entre 0 et 1
                Math.floor(3.4556);     // Valeur entière la plus proche (3)
/*          |___________________________________________________________________________________________________________________________________________________|
     __________________________
    |::::::::::::::::::::::::::|
    |: LES FONCTIONS DANS CS6 :|________________________________________________________________________________________________________________________________
    |                                                                                                                                                           |
    |: ES6 introduit une nouvelle syntaxe pour l'écriture de [fonctions].
    |___                                                                                                                                                        */
                const add = (x, y) => {
                    let sum = x + y;  
                    console.log(sum);
                };
/*          |
            |: Cette nouvelle syntaxe est très pratique lorsque vous avez juste besoin d’une fonction simple avec un argument.
            |: Vous pouvez ignorer les [fonctions] du genre |function| et |return|, ainsi que certaines parenthèses et accolades, par exemple:     
            |                                                                                                                                                   */
                const saluer = x => "Bienvenue " + x;
/*          |
            |: Le code ci-dessus définit une fonction nommée saluer qui a un argument et renvoie un message.
            |: S'il n'y a pas de paramètre, une paire de parenthèses vide doit être utilisée, comme dans:
            |                                                                                                                                                   */
                const x = () => alert("Salut");
/*          |
            |: La syntaxe est très utile pour les [fonctions] en ligne. Par exemple, supposons que nous avons un tableau et que pour chaque élément du 
            |  tableau, nous devons exécuter une fonction. Nous utilisons la méthode |forEach| du tableau pour appeler une fonction pour chaque élément:    
            |                                                                                                                                                   */
                var arr = [2, 3, 7, 8];
                arr.forEach(function(el) {
                  console.log(el * 2);
                });
/*          |
            |: Cependant, dans ES6, le code ci-dessus peut être réécrit comme suit:                          
            |                                                                                                                                                   */
                const arr = [2, 3, 7, 8];
                arr.forEach(v => {
                  console.log(v * 2);
                });
/*          |
            |: Dans ES6, nous pouvons insérer les valeurs par défaut dans la signature des [fonctions]:
            |                                                                                                                                                   */
                const test = (a, b = 3, c = 42) => {
                return a + b + c;
                };
                console.log(test(5));       //50
/*          |
            |: Les expressions de valeur par défaut sont évaluées au moment de l'appel de la fonction, de gauche à droite. Cela signifie 
            |  également que les expressions par défaut peuvent utiliser les valeurs de paramètres précédemment remplis.
/*          |___________________________________________________________________________________________________________________________________________________|

         ___________________________      
        |:::::::::::::::::::::::::::|
        |: PARAMETRES DE REPOS ES6 :|___________________________________________________________________________________________________________________________    
        |                                                                                                                                                       |        
        |: Avant ES6, si nous voulions passer un nombre variable d'arguments à une fonction, nous pouvions utiliser l'[objet] arguments, un [objet]
        |  de type tableau, pour accéder aux paramètres transmis à la fonction.
        |
        |: Par exemple, écrivons une fonction qui vérifie si un tableau contient tous les arguments passés:    
        |___                                                                                                                                                    */
                function containsAll(arr) {
                  for (let k = 1; k < arguments.length; k++) {  // "arguments.length" retourne le nombre d'arguments de l'appel à la fonction, ici "4"
                    let num = arguments[k];
                    if (arr.indexOf(num) === -1) {      // "indexOf" vérifie la position de la valeur "num" et retourne "-1" si elle n'existe pas
                      return false;
                    }
                  }
                  return true;
                }
                let x = [2, 4, 6, 7];
                console.log(containsAll(x, 2, 4, 7));           // true
                console.log(containsAll(x, 6, 4, 9));           // false 
/*          |
            |: Nous pouvons passer un nombre quelconque d'arguments à la fonction et y accéder à l'aide de l'[objet] arguments.
            |
            |: ES6 fournit une syntaxe plus lisible pour obtenir un nombre variable de paramètres avec l'utilisation d'un paramètre "rest":  
            |                                                                                                                                                   */
                function containsAll(arr, ...nums) {
                  for (let num of nums) {
                    if (arr.indexOf(num) === -1) {
                      return false;
                    }
                  }
                  return true;
                }
/*          | 
            |: Le paramètre ... nums est appelé paramètre de repos. Il prends tous les arguments "extra" passés à la fonction. 
            |: Les trois points (...) sont appelés l'opérateur Spread.
            |: Seul le dernier paramètre d'une fonction peut être marqué comme paramètre de repos. S'il n'y a pas d'argument supplémentaire,
            |  le paramètre "rest" sera simplement un tableau vide; le paramètre "rest" ne sera jamais "undefined". 
            |                                                                                                                                                   */
                var nombreLettrePrenom = personne.nom.lenght;
/*          |___________________________________________________________________________________________________________________________________________________|         

         ___________________________________      
        |:::::::::::::::::::::::::::::::::::|
        |: PROPAGER LES APPELS DE FONCTION :|___________________________________________________________________________________________________________________    
        |                                                                                                                                                       |
        |: Il est courant de transmettre les éléments d'un tableau en tant qu'arguments à une fonction. Avant ES6, nous utilisions la méthode suivante:   
        |___                                                                                                                                                    */
                function myFunction(w, x, y, z) {
                  console.log(w + x + y + z);
                }
                var args = [1, 2, 3];
                myFunction.apply(null, args.concat(4));
/*          |
            |: ES6 offre un moyen simple de reproduire l’exemple ci-dessus avec des opérateurs de propagation:
            |                                                                                                                                                   */
                const myFunction = (w, x, y, z) => {
                  console.log(w + x + y + z);
                };
                let args = [1, 2, 3];
                myFunction(...args, 4);
/*          |___________________________________________________________________________________________________________________________________________________|
       
/* ##################################################################################################################################################################
/* ####################################################################   LES OBJETS JAVASCRIPT   ###################################################################
/* ##################################################################################################################################################################
         _______________________________________________________________________________________________________________________________________________________
        |                                                                                                                                                       |
        |: Les [objets] sont des [variables], mais qui peuvent contenir plusieurs [valeurs].
        |: Pensez à un [objet] comme une liste de [valeurs] écrites sous la forme d'un [nom:valeurs], avec les noms et les [valeurs] séparés par des points.
        |: Les noms sont appelés des [propriétés]
        |: Les [objets] sont l’un des concepts fondamentaux de JavaScript.
        |: Les [propriétés] d'un [objet] peuvent être de différents [types]. Un [objet] peut même avoir un autre [objet] comme [propriété] !
        |___                                                                                                                                                    */
                var personne = { // Les espaces et les sauts de ligne ne sont pas importants. Une définition d'[objet] peut s'étendre sur plusieurs lignes.
                 nom: "Jérôme", age: 41, 
                 favColor: "gris", taille: 181
                };
/*          |
            |: Vous pouvez accéder aux [propriétés] des [objets] de deux manières:                        
            |                                                                                                                                                   */
                var age = personne.age;
                var age = personne['age'];
/*          |
            |: Pour modifier les [valeurs] des [propriétés] de l'[objet]:                        
            |                                                                                                                                                   */
                personne.age = 42;
/*          |
            |: Nous pouvons ajouter une nouvelle [propriété] à l'[objet]:                        
            |                                                                                                                                                   */
                personne.poids = 75;
/*          | 
            |: La [propriété] de longueur intégrée de JavaScript est utilisée pour compter le nombre de caractères d'une [propriété] ou d'une chaîne:  
            |                                                                                                                                                   */
                var nombreLettrePrenom = personne.nom.lenght;
/*          |___________________________________________________________________________________________________________________________________________________|   
     ________________
    |::::::::::::::::|
    |: LES METHODES :|__________________________________________________________________________________________________________________________________________
    |___                                                                                                                                                        |
        |: Les [méthodes] sont des [fonctions] stockées en tant que [propriétés d'objet].
        |:  Accédez à une [méthode d'objet] en utilisant la syntaxe suivante:
        |__
         __|: nomDeLobjet.nomDeLaMethode()
        | 
        |: Une [méthode] est une fonction appartenant à un [objet]. Il peut être référencé à l'aide du mot-clé "this".
        |: Le mot-clé "this" est utilisé comme référence à l'[objet] actuel, ça signifie que vous pouvez accéder aux [propriétés] et [méthodes] de cet [objet].
        |___                                                                                                                                                 */
                function person(nom, age, taille) {
                    this.nom = nom;                 //  Le mot-clé "this" fait référence à l'[objet] actuel.
                    this.age = age;                 //  Notez que "this" n'est pas une variable. C'est un mot clé et sa [valeur] ne peut pas être modifiée.
                    this.taille = taille;
                    this.changeNom = function(nom) {
                        this.nom = nom; };
                }
    
                p2.changeNom("Alexia");                         //  La [méthode] "changeNom" modifie la [propriété] nom de l'[objet] en son argument.
                document.write("Nouveau nom ==> " + p2.nom);
                ligne();
/*          |
            |: Vous pouvez également définir la fonction en dehors du contructeur de [fonctions] et l'associer à l'[objet]:                      
            |                                                                                                                                                   */
                function person2(nom, age) {
                    this.nom= nom;  
                    this.age = age;
                    this.anneeDeNaissance = def_Naissance;      // On appelle la [function] def_Naissance pour obtenir notre [valeur] ! 
                }
/*          |
            |: Notez qu'il n'est pas nécessaire d'écrire les parenthèses de la fonction pour l'affecter à un [objet].                 
            |                                                                                                                                                   */
                function def_Naissance() {
                    return 2019 - this.age;   //  Le mot-clé "this" est utilisé pour accéder à la [propriété] "age" de l'[objet] appelé par la [méthode].
                }
                var p3 = new person2("Benjamin", 38);
                document.write(p3.nom, " né en ", p3.anneeDeNaissance());
/*          |___________________________________________________________________________________________________________________________________________________|   
     ________________
    |::::::::::::::::|
    |: L'OBJET MATH :|__________________________________________________________________________________________________________________________________________
    |___                                                                                                                                                        |
        |: Vous permet d'effectuer des tâches mathématiques et comprend plusieurs [propriétés].
        |: Contient un certain nombre de [méthodes] utilisées pour les calculs
        |: Cette liste n'est pas exhaustive, consulter les docs pour plus de [fonctions] disponibles
        |: Vous pouvez gagner beaucoup de temps avec Math au lieu d'écrire vos propres [fonctions] à chaque fois.
        |___                                                                                                                                                    */
                var PI = Math.PI;                   // Retourne la vleur de PI, soit 3.141592653589793
                var number = Math.sqrt(4);          // Retourne la racine carrée de 4, soit 2
                var arrondi = Math.round(1.55);     // Arrondi à l'entier le plus proche
                var arrondiSup = Math.ceil(1.55);   // Arrondi à l'entier Supérieur
                var arrondiInf = Math.floor(1.55);  // Arrondi à l'entier Inférieur
                var signe = Math.sign(-155);        // Retourne le signe d'un nombre, indiquant s'il est positif, négatif ou égal à zéro. !Non supporté par IE!
                var entier = Math.trunc(5.6455);     // Retourne la partie entière d'un nombre (la partie décimale est retirée). !Non supporté par IE!
                var Max = Math.max(10,15,50);        // Retourne la plus grande valeur d'une liste de nombres.
                var Max = Math.min(10,15,50);        // Retourne la plus petite valeur d'une liste de nombres.
                var random = Math.random();          // Retourne un nombre pseudo-aléatoire compris entre 0 (inclus) et 1 (exclu).
                var puissance = Math.pow(2,4);       // Retourne le calcul de x à la puissance y (x correspond à la base et y à l'exposant).
/*          |___________________________________________________________________________________________________________________________________________________|
     ________________
    |::::::::::::::::|
    |: L'OBJET DATE :|__________________________________________________________________________________________________________________________________________
    |___                                                                                                                                                        |
        |
         _________________      
        |:::::::::::::::::|
        |: setInterval() :|_________________________________________________________________________________________________________________________
        |                                                                                                                                           |
        |: La [méthode] |setInterval ()| appelle une fonction ou évalue une expression à des intervalles spécifiés (en millisecondes). 
        |  Il continuera d'appeler la fonction jusqu'à ce que "clearInterval () soit appelé ou que la fenêtre soit fermée.          
        |  Ecrivez le nom de la fonction sans parenthèses lorsque vous le transmettez à la méthode setInterval.
        |___                                                                                                                                                    */
                function myAlert() {
                alert("Cette boite s'ouvrira toutes les 3 minutes !!!");
                }
                setInterval(myAlert, 180000);       // Cela appellera la fonction myAlert toutes les 180 secondes (1000 ms = 1 seconde)
/*          |_______________________________________________________________________________________________________________________________________|


         __________      
        |::::::::::|
        |: date() :|________________________________________________________________________________________________________________________________
        |                                                                                                                                           |
        |: L'[objet] Date nous permet de travailler avec des dates.                                                                             
        |: Une date comprend une année, un mois, un jour, une heure, une minute, une seconde et des millisecondes.                                         
        |: Les [objets] de date sont statiques plutôt que dynamiques. Le temps presse, mais les [objets] de date ne changent pas, une fois créés.  
        |___                                                                                                                                                    */
                document.write(Date());             // "d" stocke la date et l'heure actuelle
                ligne();
/*          |
            |: D'autres moyens d'initialiser les dates permettent la création de nouveaux [objets] de date à partir de la date et l'heure spécifiées:
            |                                                                                                                                                   */
                var d1 = new Date(86400000);            //  Fri Jan 02 1970 00:00:00, (millisecondes).
                var d2 = new Date("January 2, 2015 10:42:00");  //  Fri Jan 02 2015 10:42:00, (chaîne de caractères).
                var d3 = new Date(88,5,11,11,42,0,0);   //  Sat Jun 11 1988 11:42:00, (année, mois, jours, heures, minutes, secondes, millisecondes)
/*          |
            |: Lors de la création d'un [objet] Date, plusieurs méthodes permettent d'effectuer des opérations dessus:
            |                                                                                                                                                   */
                var annee = d2.getFullYear();       //  getMonth(),  getDate()                          --> Année, mois, jour
                var heure = d2.getHours();          //  getMinutes(), getSeconds(), getMilliseconds()   --> Heure, minutes, secondes, millisecondes
                var jourDeLaSemaine = d1.getDay();  //                                                  --> Vendredi 
/*          |
            | !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            | !!                        JavaScript compte les mois de 0 à 11. Janvier est 0, et décembre est 11                                  !!
            | !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            |_______________________________________________________________________________________________________________________________________|
            
/*          |___________________________________________________________________________________________________________________________________________________|
       
     ______________
    |::::::::::::::|
    |: OBJETS ES6 :|____________________________________________________________________________________________________________________________________________
    |___                                                                                                                                                        |
        |: Les [variables] JavaScript peuvent être des types de données [objets] contenant de nombreuses [valeurs] appelées [propriétés].
        |: Un [objet] peut également avoir des [propriétés] qui sont des définitions de fonction appelées [méthodes] pour effectuer des actions sur l'[objet].
        |: ES6 introduit des notations abrégées et des noms de [propriété] calculés facilitant la compréhension de la déclaration et de l'utilisation d'[objet]
        |
        |: Le raccourci de nouvelle définition de [méthode] ne nécessite pas le mot-clé deux-points (:) ni la fonction, comme dans la fonction 
        |  de développement de la déclaration d'[objet] d'arborescence:
        |___                                                                                                                                                    */
                let tree = {
                  height: 10,
                  color: 'green',
                  grow() {
                    this.height += 2;
                  }
                };
                tree.grow();
                console.log(tree.height); // 12
/*          |
            |: Vous pouvez également utiliser une valeur abrégée lors de l’initialisation des [propriétés] avec une [variable] du même nom.
            |: Par exemple, les [propriétés] height et health sont en cours d'initialisation avec des [variables] nommées height et health:                      
            |                                                                                                                                                   */
                let height = 5;
                let health = 100;
                
                let athlete = {
                  height,
                  health
                };
/*          |
            |: Lors de la création d'un [objet] à l'aide de noms de [propriété] en double, la dernière [propriété] écrasera les précédentes du même nom:   
            |                                                                                                                                                   */
                var a = {x: 1, x: 2, x: 3, x: 4};
/*          |
            |: Les noms de [propriétés] en double génère une SyntaxError dans ES5 lors de l'utilisation du mode strict.  ES6 a supprimé cette limitation.
            
         ______________________________     
        |::::::::::::::::::::::::::::::|
        |: NOMS DE PROPRIETE CALCULES :|____________________________________________________________________________________________________________
        |                                                                                                                                           |
        |: Avec ES6, vous pouvez maintenant utiliser des noms de [propriété] calculés. En utilisant la notation entre crochets [], nous pouvons 
        |  utiliser une expression pour un nom de [propriété], y compris la concaténation de chaînes. Cela peut être utile dans les cas où nous 
        |  souhaitons créer certains [objets] en fonction de données utilisateur (par exemple, id, email, etc.)                                             
        |___                                                                                                                                                    */
                // Exemple1:
                ////////////
                let prop = 'name';
                let id = '1234';
                let mobile = '08923';
                
                let user = {
                  [prop]: 'Jack',
                  [`user_${id}`]: `${mobile}`           // Donnera pour la [propriété] "user_1234", la [valeur] "08923"
                };
                
                // Exemple 2:
                /////////////
                var i = 0;
                var a = {
                  ['foo' + ++i]: i,                     // foo1
                  ['foo' + ++i]: i,                     // foo2
                  ['foo' + ++i]: i                      // foo3
                };
                
                // Exemple 3:
                /////////////
                var param = 'size';
                var config = {
                  [param]: 12,
                  ['mobile' + param.charAt(0).toUpperCase() + param.slice(1)]: 4        // mobileSize = "4" ('mobile' + 'S' + 'ize')
                };
                console.log(config);                                                    // = "4"
/*          |
            |: C'est très utile lorsque vous devez créer des [objets] personnalisés basés sur certaines [variables].
            |_______________________________________________________________________________________________________________________________________|
            
         ________________________     
        |::::::::::::::::::::::::|
        |: ASSIGNATION D'OBJETS :|__________________________________________________________________________________________________________________
        |                                                                                                                                           |
        |: ES6 ajoute une nouvelle [méthode] |Object assign ()| qui nous permet de combiner plusieurs sources dans une cible pour créer un seul et 
        |  même nouvel [objet]. |Object.assign| () est également utile pour créer une copie d'un [objet] existant.
        |: Regardons l'exemple suivant pour voir comment combiner des [objets]:                                                                                
        |___                                                                                                                                                    */
                let person = {
                  name: 'Jack',
                  age: 18,
                  sex: 'male'
                };
                let student = {
                  name: 'Bob',
                  age: 20,
                  xp: '2'
                };
                let newStudent = Object.assign({}, person, student);    // name = Bob, age = 20, sex = male, xp = 2
/*          |
            |: Ici, nous avons utilisé Object.assign () où le premier paramètre est l'[objet] cible auquel vous souhaitez appliquer 
            |  de nouvelles propriétés.
            |: Chaque paramètre après le premier sera utilisé comme source pour la cible. Il n'y a pas de limitation du nombre de paramètres source.
            |: Cependant, l'ordre est important car les propriétés du deuxième paramètre seront remplacées par les propriétés du même nom 
            |  dans le troisième paramètre, et ainsi de suite.
            |: Dans l'exemple ci-dessus, nous avons utilisé un nouvel [objet] {} comme cible et utilisé deux [objet] comme sources.
            |
            |: Voyons maintenant comment utiliser assign () pour créer un [objet] en double sans créer de référence (mutation) à l'[objet] de base.
            |: Dans l'exemple suivant, l'affectation a été utilisée pour essayer de générer un nouvel [objet]. Cependant, utiliser "=" crée une 
            |  référence à l'[objet] de base. En raison de cette référence, les modifications destinées à un nouvel [objet] mutent l'[objet] d'origine:            
            |                                                                                                                                                   */
                let person = {
                  name: 'Jack',
                  age: 18
                };
                
                let newPerson = person;             //  "newPerson" fait appel à "person"
                newPerson.name = 'Bob'; 
                
                console.log(person.name);           // "Bob"
                console.log(newPerson.name);        // "Bob"
/*          |
            |: Pour éviter cela (mutations), utilisez |Object.assign ()| pour créer un nouvel [objet]:                              
            |                                                                                                                                                   */
                let newPerson = Object.assign({}, person); 
                newPerson.name = 'Bob';
                
                console.log(person.name); // Jack
                console.log(newPerson.name); // Bob
/*          |
            |: Enfin, vous pouvez affecter une [valeur] à une [propriété d'objet] dans l'instruction |Object.assign ()|:                              
            |                                                                                                                                                   */
                let newPerson = Object.assign({}, person, {name: 'Bob'});
/*          |_______________________________________________________________________________________________________________________________________|
         
         ________________________     
        |::::::::::::::::::::::::|
        |: PROTOTYPE DE L'OBJET :|__________________________________________________________________________________________________________________
        |                                                                                                                                           |
        |: Pour créer des relations entre objets, JavaScript utilise les prototypes.
        |: En plus de ses propriétés particulières, tout objet JavaScript possède une propriété interne appelée "prototype"
        |: Il s'agit d'un lien (on parle de référence) vers un autre objet.
        |: Lorsqu'on essaie d'accéder à une propriété qui n'existe pas dans un objet, JavaScript essaie de trouver cette propriété 
        |  dans le prototype de cet objet.                                                                              
        |___                                                                                                                                                    */
                const unObjet = { a: 2 };

                // Crée unAutreObjet avec unObjet comme prototype
                const unAutreObjet = Object.create(unObjet);

                console.log(unAutreObjet.a); // 2
/*          |
            |: Si le prototype d'un objet ne possède pas une propriété recherchée, alors c'est dans son propre prototype que la recherche continue,
            |  jusqu'à arriver à la fin de chaîne des prototypes.
            |: Si la propriété n'a été trouvée dans aucun objet, son accès renvoie la valeur "undefined".
            |                                                                                                                                                   */
                // Crée encoreUnObjet avec unAutreObjet comme prototype
                const encoreUnObjet = Object.create(unAutreObjet);

                console.log(encoreUnObjet.a); // 2
                console.log(encoreUnObjet.b); // undefined
/*          |
            |: Ce mode de relation entre les objets JavaScript est appelé délégation : un objet délègue une partie de son fonctionnement 
            | à son prototype.
            |_______________________________________________________________________________________________________________________________________|                                                                                                                                            

         ____________________________     
        |::::::::::::::::::::::::::::|
        |: DESTRUCTURATION D'OBJETS :|______________________________________________________________________________________________________________
        |                                                                                                                                           |
        |: La destructuration des [objets] décompose les [propriétés] en [variables] distinctes:        
        |___                                                                                                                                                    */
                let obj = {h:100, s: true};
                let {h, s} = obj;
                
                console.log(h);                         // 100
                console.log(s);                         // true
/*          |
            |: Nous pouvons assigner sans déclaration, mais il y a des exigences de syntaxe pour cela:                             
            |                                                                                                                                                   */
                let a, b;
                ({a, b} = {a: 'Hello ', b: 'Jack'});    // Les () avec un (;) à la fin sont obligatoires lors de la destructuration sans déclaration.
                
                console.log(a + b);                     // Hello Jack
/*          |
            |: Cependant, vous pouvez également le faire comme suit lorsque les () ne sont pas obligatoires:                              
            |                                                                                                                                                   */
                let {a, b} = {a: 'Hello ', b: 'Jack'};
                console.log(a + b);
/*          |
            |: Vous pouvez également affecter l'[objet] à de nouveaux noms de variables.                             
            |                                                                                                                                                   */
                var o = {h: 42, s: true};
                var {h: foo, s: bar} = o;
                
//              console.log(h);                         // Error
                console.log(foo);                       // 42
/*          |
            |: Enfin, vous pouvez affecter des valeurs par défaut aux variables, au cas où la valeur extraite de l’[objet] serait indéfinie.         
            |                                                                                                                                                   */
                var obj = {id: 42, name: "Jack"};
                let {id = 10, age = 20} = obj;
                
                console.log(id);                        // 42
                console.log(age);                       // 20
/*          |_______________________________________________________________________________________________________________________________________|
            
         ________________________     
        |::::::::::::::::::::::::|
        |: PROPAGATION D'OBJETS :|__________________________________________________________________________________________________________________
        |                                                                                                                                           |
        |: Permet de copier les propriétés énumérables de l'[objet] fourni dans un nouvel [objet].      
        |___                                                                                                                                                    */
                const obj1 = { foo: 'bar', x: 42 };
                const obj2 = { foo: 'baz', y: 5 };
                
                const clonedObj = {...obj1};                    // { foo: "bar", x: 42 }            // Clone un [objet]
                const mergedObj = {...obj1, ...obj2};           // { foo: "baz", x: 42, y: 5 }      // Fusionne 2 [objet]
/*          |
            |: Cependant, si vous essayez de les fusionner, vous n'obtiendrez pas le résultat escompté:  
            |                                                                                                                                                   */
                const obj1 = { foo: 'bar', x: 42 };
                const obj2 = { foo: 'baz', y: 5 };
                const merge = (...objects) => ({...objects});
                
                let mergedObj = merge(obj1, obj2);              // { 0: { foo: 'bar', x: 42 }, 1: { foo: 'baz', y: 5 } }
                let mergedObj2 = merge({}, obj1, obj2);         // { 0: {}, 1: { foo: 'bar', x: 42 }, 2: { foo: 'baz', y: 5 } }
/*          |_______________________________________________________________________________________________________________________________________|

        |_______________________________________________________________________________________________________________________________________________________|
        
     ___________
    |:::::::::::|
    |: MAP ES6 :|_______________________________________________________________________________________________________________________________________________
    |___                                                                                                                                                        |
        |: Un [objet] Map peut être utilisé pour contenir des paires clé / valeur. 
        |: Une clé ou une valeur dans la carte peut être n'importe quoi ([objet] et valeurs primitives).
        |
        |: La syntaxe new Map ([iterable]) crée un [objet] Map où iterable est un tableau ou tout autre [objet] itérable dont les éléments 
        |  sont des tableaux (avec une paire clé / valeur chacun).
        | 
        |: Un [objet] est similaire à Map, mais il existe des différences importantes qui rendent son utilisation préférable dans certains cas:
        |___
            |: Les clés peuvent être de tout type, y compris des [fonctions], des [objet] et des primitives.
            |: Vous pouvez obtenir la taille d’une carte.
            |: Vous pouvez directement parcourir la carte.
            |: Les performances de la carte sont meilleures dans les scénarios impliquant l'ajout et la suppression fréquents de paires clé / valeur.
         ___|                                                                                                                                                
        |
        |: La propriété size renvoie le nombre de paires clé / valeur dans une carte.                                                                        
        |___                                                                                                                                                    */
        
                let map = new Map([['k1', 'v1'], ['k2', 'v2']]);
                console.log(map.size);          // 2 //  Ici 2
/*      |
        |: Les méthodes::
        |___            
            |: set (clé, valeur) Ajoute une paire clé / valeur spécifiée à la carte. Si la clé spécifiée existe déjà, la valeur correspondante 
            |  sera remplacée par la valeur spécifiée.
            |: get (key) Obtient la valeur correspondant à une clé spécifiée dans la carte. Si la clé spécifiée n'existe pas, undefined est renvoyé.
            |: has (key) Retourne true si une clé spécifiée existe dans la carte et false sinon.
            |: delete (key) Supprime la paire clé / valeur avec une clé spécifiée et renvoie true. Retourne false si l'élément n'existe pas.
            |: clear () Supprime toutes les paires clé / valeur de la carte.
            |: keys () Retourne un Iterator de clés dans la carte pour chaque élément.
            |: values () Retourne un Iterator de valeurs dans la carte pour chaque élément.
            |: entries () Retourne un Iterator de array [clé, valeur] dans la carte pour chaque élément.                                                     
            |                                                                                                                                                   */
                let map = new Map();
                map.set('k1', 'v1').set('k2', 'v2');
                
                console.log(map.get('k1'));             // v1
                console.log(map.has('k2'));             // true
                
                for (let kv of map.entries())
                  console.log(kv[0] + " : " + kv[1]);   // k1 : v1, k2: v2
/*          |
            |: Map prend en charge différents types de données, à savoir 1 et "1" sont deux valeurs différentes.
            |___________________________________________________________________________________________________________________________________________________|
        
     ___________
    |:::::::::::|
    |: SET ES6 :|_______________________________________________________________________________________________________________________________________________
    |___                                                                                                                                                        |
        |: Un [objet] Set peut être utilisé pour contenir des valeurs uniques (aucune répétition n'est autorisée).
        |: Une valeur dans un set peut être n'importe quoi ([objet] et valeurs primitives).
        |: La syntaxe new Set ([iterable]) crée un [objet] Set où iterable est un tableau ou tout autre [objet] itérable de valeurs.
        |: La propriété size renvoie le nombre de valeurs distinctes dans set.
        |___                                                                                                                                                    */
                let set = new Set([1, 2, 4, 2, 59, 9, 4, 9, 1]);
                console.log(set.size);                              // 5 (Les valeurs en double ne sont pas comptabilisées)
/*      |
        |: Les méthodes::
        |___            
            |: add (valeur) Ajoute un nouvel élément avec la valeur donnée à set.
            |: delete (valeur) Supprime une valeur spécifiée de set.
            |: has (valeur) Retourne true si une valeur spécifiée existe dans le set et false sinon.
            |: clear () Efface le set.
            |: values () Retourne un itérateur de valeurs de set.                                                    
            |                                                                                                                                                   */
                let set = new Set();
                set.add(5).add(9).add(59).add(9);

                console.log(set.has(9));            // true

                for (let v of set.values())         // 5, 9, 59
                    console.log(v);
/*          |
            |: Set prend en charge différents types de données, à savoir 1 et "1" sont deux valeurs différentes.
            |: NaN et indéfini peuvent également être stockés dans Set
            |___________________________________________________________________________________________________________________________________________________|
            

/* ##################################################################################################################################################################
/* ######################################################################   LES CLASSES (ES6)   #####################################################################
/* ##################################################################################################################################################################
         _______________________________________________________________________________________________________________________________________________________
        |                                                                                                                                                       |
        |: Une classe est créée avec le mot-clé "class" suivi du nom de la [classe], qui commence le plus souvent par une majuscule.
        |: Les [classes] permettent de créer plusieurs [objets] de la même structure.
        |: Une classe ne contient que des définitions de méthodes.
        |: Une [méthode] spéciale nommée "constructor()" peut être ajoutée à la définition de la classe.
        |: La [méthode] "constructor" est exécutée pendant la création d'un objet et permet d'ajouter des données à l'objet, sous la forme de propriétés.
        |: Une [classe] déclarée peut ensuite être utilisée pour créer plusieurs [objets] en utilisant le mot-clé "new".
        |: Elle facilite la création d'objets ayant le même modèle et partageant ainsi données et comportement.
        |___                                                                                                                                              
            |: SYNTAXE :
                  
                class MaClasse {
                  constructor(param1, param2, ...) {
                    this.propriete1 = param1;
                    this.propriete2 = param2;
                    // ...
                  }
                  methode1( ...  ) {
                    // ...
                  }
                  methode2( ... ) {
                    // ...
                  }
                  // ...
                }

                const monObjet = new MaClasse(arg1, arg2, ...);                                                                                                 */

                class Rectangle {
                  constructor(height, width) { 
                    this.width = width;
                    this.height = height;
                  }
                }   
                
                const square = new Rectangle(5, 5);
                const poster = new Rectangle(2, 3);
/*          |
            |  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            |: !!                     Les déclarations de [classe] ne sont pas hissées, contrairement aux déclarations de fonction.                       !!
            |: !!                   Si vous essayez d'accéder à votre [classe] avant de la déclarer, "ReferenceError" sera renvoyé.                       !!
            |  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            |
            |: Vous pouvez également définir une [classe] avec une expression de [classe], où la [classe] peut être nommée ou non.
            |                                                                                                                                                   */
                var Square = class Rectangle {          // [classe] nommée
                  constructor(height, width) {
                    this.height = height;
                    this.width = width;
                  }
                };
                
                var Square = class {                    // [classe] sans nom :
                  constructor(height, width) {          // La définition de classe est simplement affectée à une variable:
                    this.height = height;
                    this.width = width;
                  }
                };                                                                                                                                           

/*          |___________________________________________________________________________________________________________________________________________________|

         _______________________________      
        |:::::::::::::::::::::::::::::::|
        |: METHODES DE CLASSE DANS ES6 :|_______________________________________________________________________________________________________________________  
        |                                                                                                                                                       |
        |: ES6 a introduit un raccourci qui n'exige pas la fonction "mot-clé" pour une fonction affectée au nom d'une [méthode]. 
        |: Un type de [méthode] de [classe] est la [méthode] "prototype", disponible pour les [objets] de la [classe].
        |___                                                                                                                                                    */
                class Rectangle {
                  constructor(height, width) {
                    this.height = height;
                    this.width = width;
                  }
                  get area() {
                    return this.calcArea();
                  }
                  calcArea() {
                    return this.height * this.width;
                  }
                }
                const square = new Rectangle(5, 5);
                console.log(square.area); // 25
/*          |
            |: Dans le code ci-dessus, area est un [accesseur], calcArea est une [méthode].
            |
            |: Un autre type de [méthode] est la [méthode] "static", qui ne peut pas être appelée via une instance de classe. Les [méthodes] "static" 
            |  sont souvent utilisées pour créer des [fonctions] utilitaires pour une application.                                                            
            |                                                                                                                                                   */
                class Point {
                  constructor(x, y) {
                    this.x = x;
                    this.y = y;
                  }
                  static distance(a, b) {
                    const dx = a.x - b.x;               // dx = 7 - 3   ===  4
                    const dy = a.y - b.y;               // dy = 2 - 8   === -6
                    return Math.hypot(dx, dy);
                  }
                }
                const p1 = new Point(7, 2);             // x = 7, y = 2
                const p2 = new Point(3, 8);             // x = 3, y = 8
                
                console.log(Point.distance(p1, p2));                                                                                                        
/*          |
            |: Comme vous pouvez le constater, la méthode de distance "static" est appelée directement à l'aide du nom de la classe, sans objet.
            |___________________________________________________________________________________________________________________________________________________|

         ________________________________      
        |::::::::::::::::::::::::::::::::|
        |: HERITAGES DE CLASSE DANS ES6 :|______________________________________________________________________________________________________________________   
        |                                                                                                                                                       |
        |: Le "mot-clé" extend est utilisé dans les déclarations de [classe] ou les expressions de [classe] pour créer un enfant d'une [classe]. 
        |: L'enfant hérite des [propriétés] et des [méthodes] du parent.
        |___                                                                                                                                                    */
                class Animal {
                  constructor(name) {
                    this.name = name;
                  }
                  speak() {
                    console.log(this.name + ' makes a noise.');
                  }
                }
                class Dog extends Animal {
                  speak() {
                    console.log(this.name + ' barks.');                 // (1)   "Rex barks"
                  }
                }
                
                let dog = new Dog('Rex');
                dog.speak();                                            // (1)                             
/*          |
            |: Dans le code ci-dessus, la [classe] "Dog" est un enfant de la [classe] "Animal", héritant de ses [propriétés] et [méthodes].
            |: S'il y a un "constructor" présent dans la [sous-classe], il doit d'abord appeler "super ()" avant de l'utiliser. 
            |: De plus, le "mot-clé" super est utilisé pour appeler les [méthodes] du parent.
            |                                                                                                                                                   */
                class Animal {
                  constructor(name) {
                    this.name = name;
                  }
                  speak() {
                    console.log(this.name + ' makes a noise.');         // 
                  }
                }
                
                class Dog extends Animal {
                  speak() {
                    super.speak();                                      // (1) "Rex makes a noise" (Appelle la méthode de la classe principale)
                    console.log(this.name + ' barks.');                 // (2) "Rex barks"
                  }
                }
                
                let dog = new Dog('Rex');
                dog.speak();                                            // (1) + (2)
/*          |___________________________________________________________________________________________________________________________________________________|


/* ##################################################################################################################################################################
/* ##################################################################   LES TABLEAUX JAVASCRIPT   ###################################################################
/* ##################################################################################################################################################################
         _______________________________________________________________________________________________________________________________________________________
        |                                                                                                                                                       |
        |: Les tableaux stockent plusieurs valeurs dans une seule variable.
        |: [0] est le premier élément d'un tableau. [1] est le second. Les index de tableaux commencent par 0.
        |: Tenter d'accéder à un index en dehors du tableau renvoie la valeur "undefined"
        |! Il est préférable de nommer les tableaux avec des variables pluriels, celui-ci contenant plusieurs valeurs
        |
        |: var {nomDuTableau} = [valeur1,valeur2, etc..];
        |: var valeur1 = {nomDuTableau}[indice(élément du tableau)];       
        |___                                                                                                                                                    */
                var courses = new Array("HTML", "CSS", "JS");   // On crée un tableau, c'est la méthode recommandée pour déclarer des tableaux.
                var course = courses[0];                        // On sélectionne le 1er élément du tableau ("HTML")
                courses[1] = "C++";                             // L'on change le second élément du tableau
                document.write(courses.length, " éléments");    // Affiche le nombre d'éléments contenus dans le tableau "courses"
                ligne();
    
                var courses = new Array(1);                     // Vous pouvez également déclarer un tableau en indiquant le nombre d'éléments 
                courses[0] = "HTML";                            // qu'il va stocker et ajouter les éléments ultérieurement.
    
                var courses = new Array();                      // Les tableaux JavaScript sont dynamiques, vous pouvez donc déclarer un tableau 
                courses[0] = "HTML";                            // sans transmettre aucun argument avec le constructeur Array ().
                courses[1] = "CSS";                             // Vous pouvez ajouter autant d'éléments que nécessaire.
    
                var c1 = ["HTML", "CSS"];                       // concat() vous permet de joindre des tableaux et de créer un tableau entièrement nouveau.
                var c2 = ["JS", "C++"];                         // L'opération de concaténation n'affecte pas les tableaux c1 et c2;
                var courses = c1.concat(c2);                    // Elle renvoie la concaténation résultante sous la forme d'un nouveau tableau.

                var courses = ["HTML", "CSS", "JS", "C++"];     // Une autre solution pour parcourir un tableau consiste à utiliser la méthode  forEach(). 
                courses.forEach(cours => {                      // Celle-ci permet d'appliquer une fonction sur chaque élément du tableau.
                  console.log(cours);
                });

                courses.push("Python");                         // Ajout d'un nouvel élément en fin de tableau
                courses.unshift("Java");                        // Ajout d'un nouvel élément en début de tableau
                courses.pop();                                  // Supprime le dernier élément d'un tableau (Python)
                courses.splice(3, 2);                           // Supprime 2 éléments du tableaux à partir du 3ème indice (JS, C++)

                for (const cours of courses) {                  // Encore une solution pour parcourir un tableau est d'utiliser la boucle  "for-of", 
                  console.log(cours);                           // introduite dans la dernière version majeure du langage. Elle a l'avantage de ne pas 
                }                                               // nécessiter la gestion d'un compteur de boucle.

/*          |
            |: N'oubliez pas que JavaScript ne prend pas en charge les tableaux avec des index nommés.
            |: En JavaScript, les tableaux utilisent toujours des index numérotés.
            |: Il est préférable d'utiliser un [objet] lorsque vous souhaitez que l'index soit une chaîne (texte).
            |: Utilisez un tableau lorsque vous souhaitez que l'index soit un nombre.     
/*          |___________________________________________________________________________________________________________________________________________________|
     
     ________________________________________
    |::::::::::::::::::::::::::::::::::::::::|
    |: DESTRUCTURATION DE TABLEAUX DANS ES6 :|__________________________________________________________________________________________________________________
    |___                                                                                                                                                        | 
        |: La syntaxe d’assignation de destructuration est une expression JavaScript qui permet de décompresser des valeurs de tableaux, 
        |  ou de propriétés d’[objet], en variables distinctes.
        |: ES6 a ajouté une syntaxe abrégée pour la destructuration d'un tableau.
        |___                                                                                                                                                    */
                let arr = ['1', '2', '3'];
                let [one, two, three] = arr;            // décompresse les éléments d'un tableau en variables distinctes
                
                console.log(one);                       // 1
                console.log(two);                       // 2
                console.log(three);                     // 3
/*          |
            |: Nous pouvons également utiliser la destructuration d'un tableau renvoyé par une fonction:    
            |                                                                                                                                                   */
                let a = () => {
                  return [1, 3, 2];
                };
                
                let [one, , two] = a();                 // Notez que nous avons laissé la place du deuxième argument vide.
/*          |
            |: La syntaxe de destructuration simplifie également l'affectation et l'échange de valeurs:    
            |                                                                                                                                                   */
                let a, b, c = 4, d = 8;
                [a, b = 6] = [2];                       // a = 2, b = 6
                [c, d] = [d, c];                        // c = 8, d = 4                                                                                      
/*          |___________________________________________________________________________________________________________________________________________________|

     ____________________________________
    |::::::::::::::::::::::::::::::::::::|
    |: PROPAGATION DE TABLEAUX DANS ES6 :|______________________________________________________________________________________________________________________
    |___                                                                                                                                                        | 
        |: Avant ES6, nous utilisions la syntaxe suivante pour ajouter un élément au milieu d'un tableau:
        |___                                                                                                                                                    */
                var arr = ["One", "Two", "Five"];
                arr.splice(2, 0, "Three");              // Ajoute "Three" en 3ème position du tableau "arr"
                arr.splice(3, 0, "Four");               // Ajoute "Four" en 4ème position du tableau "arr"
                console.log(arr);                       // "One" "Two" "Three" "Four" "Five"
/*          |
            |: Vous pouvez utiliser des méthodes telles que push, splice et concat, par exemple, pour atteindre cet objectif dans différentes 
            |  positions du tableau. Cependant, dans ES6, l’opérateur de propagation nous permet de le faire plus facilement:    
            |                                                                                                                                                   */
                let newArr = ['Three', 'Four']; 
                let arr = ['One', 'Two', ...newArr, 'Five'];
                console.log(arr);                                                                                     
/*          |___________________________________________________________________________________________________________________________________________________|


/* ##################################################################################################################################################################
/* #################################################################   TRAVAILLER AVEC LES CHAINES   ################################################################   
/* ##################################################################################################################################################################
    
     ________________________
    |::::::::::::::::::::::::|
    |: LES OBJETS DE CHAINE :|____________________________________________________________________________________________________________
    |___                                                                                                                                  |
        |: De nombreuses fonctionnalités permettent de travailler sur les chaines:
        |___                                                                                                                                                    */
                phrase = "coucou, j'étudie le JavaScript"  
                var longeurDeLaChaine = phrase.length;          // Permet d'obtenir la longeur d'une chaîne de caractères (30)
                phrase = phrase.toUpperCase();                  // Convertit la chaîne en majuscule
                phrase = phrase.toLowerCase();                  // Convertit la chaîne en minuscule
                phrase.charAt(0).toUpperCase();                 // Convertit la 1ère lettre en majuscule
                phrase.substring(1).toLowerCase();              // Convertit les lettres à partir de la 2ème en minuscule
                
                // {parseFloat()} permet de transformer une chaîne de caractères en un nombre flottant après avoir analysée celle-ci.
                // L'analyse de la chaîne s'arrête dès qu'un caractère qui n'est pas +,-, un chiffre, un point ou un exposant.
                parseFloat("125rty25"); // renvoi "125", les blancs en début et en fin de chaîne sont autorisés.
                parseFloat("abc125"); // renvoi NaN
                // On peut utiliser la méthode {isNaN} afin de déterminer si le résultat obtenu par {parseFloat()} est NaN.
/*          |_____________________________________________________________________________________________________________________________|

     _____________________________________
    |:::::::::::::::::::::::::::::::::::::|
    |: TRANSFORMER UNE CHAINE EN TABLEAU :|_______________________________________________________________________________________________
    |___                                                                                                                                  |
        |: La méthode  Array.from()  permet de transformer une chaîne en un véritable tableau, qui peut ensuite être parcouru 
        |  lettre par lettre avec la méthode  forEach().
        |___                                                                                                                                                    */
                const prenom = "Odile";
                const tabPrenom = Array.from(prenom);
                tabPrenom.forEach(lettre => {
                  console.log(lettre);                      // Va afficher chaque lettre du prénom "Odile"
                });
/*          |_____________________________________________________________________________________________________________________________|

     ________________________________________      
    |::::::::::::::::::::::::::::::::::::::::|
    |: Rechercher des chaînes de caractères :|____________________________________________________________________________________________
    |                                                                                                                                     |
    |: Avant ES6, nous utilisions uniquement la méthode indexOf () pour rechercher la position du texte dans la chaîne. Par exemple:  
    |___                                                                                                                                                        */
            "SoloLearn".indexOf("Solo") === 0;                      // true
            "SoloLearn".indexOf("Solo") === (4 - "Solo".length);    // true
            "SoloLearn".indexOf("loLe") !== -1;                     // true
            "SoloLearn".indexOf("olo", 1) !== -1;                   // true
            "SoloLearn".indexOf("olo", 2) !== -1;                   // false
/*      |
        |: La méthode  indexOf()  prend en paramètre la sous-chaîne recherchée. Si cette valeur est présente dans la chaîne,
        |  elle renvoie l'indice de sa première occurrence. Sinon, elle renvoie "-1".
        |
        |: ES6 a remplacé cela par une version à la syntaxe plus propre et plus simplifiée:
        |                                                                                                                                                       */
            "SoloLearn".startsWith("Solo", 0);                      // true
            "SoloLearn".endsWith("Solo", 4);                        // true
            "SoloLearn".includes("loLe");                           // true
            "SoloLearn".includes("olo", 1);                         // true
            "SoloLearn".includes("olo", 2);                         // false
/*      |________________________________________________________________________________________________________________________________|

     _________________________________________
    |:::::::::::::::::::::::::::::::::::::::::|
    |: DECOMPOSER UNE CHAINE EN SOUS-PARTIES :|__________________________________________________________________________________________
    |___                                                                                                                                 |
        |: Une chaîne de caractères est parfois composée de plusieurs sous-parties séparées par un caractère particulier  
        |  (point, tiret, point-virgule, etc). Dans ce cas, on peut obtenir toutes ces parties à l'aide de la méthode "split()".
        |  Elle prend en paramètre le séparateur et renvoie un tableau contenant les sous-parties.
        |___                                                                                                                                                    */
                const listeMois = "Jan,Fev,Mar,Avr,Mai,Jun,Jul,Aou,Sep,Oct,Nov,Dec";
                const mois = listeMois.split(",");      // "," est le séparateur de la chaîne
                console.log(mois[0]);                   // "Jan"
                console.log(mois[11]);                  // "Dec"
/*          |____________________________________________________________________________________________________________________________|


/* ##################################################################################################################################################################
/* ####################################################################   AUTRES NOUVEAUTES ES6   ###################################################################
/* ##################################################################################################################################################################
    
     _________________
    |:::::::::::::::::|
    |: LES PROMESSES :|_________________________________________________________________________________________________________________________________________
    |___                                                                                                                                                        | 
        |: Une promesse est un meilleur moyen de programmation asynchrone par rapport à la méthode habituelle consistant à utiliser 
        |  un type de méthode setTimeout ().
        |: Considérons cet exemple:                                                                                  
        |___                                                                                                                                                    */
                setTimeout(function() {
                  console.log("Work 1");
                  setTimeout(function() {
                    console.log("Work 2");
                  }, 1000);
                }, 1000);
                console.log("End");
/*          |
            |: Retourne "Fin", "Work 1" et "Work 2" dans cet ordre (le travail est effectué de manière asynchrone). 
            |: Mais s'il y a plus d'événements comme celui-ci, le code devient très complexe.
            |: ES6 vient à la rescousse dans de telles situations. Une promesse peut être créée comme suit:
            |                                                                                                                                                   */
                new Promise(function(resolve, reject) {     // "resolve" est la méthode de "success" et "reject" est la méthode de "failure"
                    // Work
                    if (success)
                        resolve(result);
                    else
                        reject(Error("failure"));
                });
/*          |
            |: Si une méthode retourne une promesse, ses appels doivent utiliser la méthode then, qui prend deux méthodes en entrée;
            |   un pour le succès et l'autre pour l'échec:
            |                                                                                                                                                   */
                function asyncFunc(work) {
                  return new Promise(function(resolve, reject) {
                    if (work === "")
                      reject(Error("Nothing"));
                    setTimeout(function() {
                      resolve(work);
                    }, 1000);
                  });
                }
                
                asyncFunc("Work 1") // Task 1
                .then(function(result) {
                  console.log(result);
                  return asyncFunc("Work 2"); // Task 2
                }, function(error) {
                  console.log(error);
                })
                .then(function(result) {
                  console.log(result);
                }, function(error) {
                  console.log(error);
                });
                console.log("End");
/*          |
            |: Il affiche également "End", "Work 1" et "Work 2" (le travail est effectué de manière asynchrone). 
            |: Mais ceci est clairement plus lisible que l'exemple précédent et dans des situations plus complexes, c'est plus facile de travailler avec.
/*          |___________________________________________________________________________________________________________________________________________________|
    
     _____________________________
    |:::::::::::::::::::::::::::::|
    |: ITERATEURS ET GENERATEURS :|_____________________________________________________________________________________________________________________________
    |___                                                                                                                                                        | 
        |: Symbol.iterator est l'itérateur par défaut d'un [objet]. Les boucles for ... of sont basées sur ce type d'itérateur.
        |: Dans l'exemple ci-dessous, nous verrons comment nous devrions l'implémenter et comment les [fonctions] du générateur sont utilisées.               
        |___                                                                                                                                                    */
                let myIterableObj = { 
                  [Symbol.iterator] : function* () {
                    yield 1; yield 2; yield 3;
                ...
                console.log([...myIterableObj]);
/*          |
            |: Tout d'abord, nous créons un [objet] et utilisons la fonction Symbol.iterator et le générateur pour le remplir avec certaines valeurs.
            |: Dans la deuxième ligne du code, nous utilisons un * avec le mot-clé function. On appelle çela une fonction génératrice (ou fonction gen).
            |: Par exemple, voici un exemple simple de la façon dont les [fonctions] de génération peuvent être utiles:
            |                                                                                                                                                   */
                function* idMaker() {
                  let index = 0;
                  while (index < 5)
                    yield index++;
                }
                var gen = idMaker();
                console.log(gen.next().value);
/*          |
            |: Nous pouvons quitter et ré-entrer les [fonctions] du générateur plus tard. Leurs liaisons de variables (contexte) seront sauvegardées lors
            |  de nouvelles entrées. Ils constituent un outil très puissant pour la programmation asynchrone, en particulier lorsqu'ils sont combinés avec 
            |  des promesses. Ils peuvent également être utiles pour créer des boucles avec des exigences spéciales.
            |                                                   
            |: Nous pouvons imbriquer des [fonctions] de générateur les unes dans les autres pour créer des structures plus complexes et leur transmettre 
            |  des arguments pendant que nous les appelons.
            |: L'exemple ci-dessous montre un cas utile de la manière dont nous pouvons utiliser les [fonctions] du générateur et Symbol.iterators ensemble:
            |                                                                                                                                                   */
                const arr = ['0', '1', '4', 'a', '9', 'c', '16'];
                const my_obj = {
                  [Symbol.iterator]: function*() {
                    for(let index of arr) {
                      yield `${index}`;
                    }
                  }
                };
                const all = [...my_obj]
                  .map(i => parseInt(i, 10))
                  .map(Math.sqrt)
                  .filter((i) => i < 5)
                  .reduce((i, d) => i + d);
                console.log(all);
/*          |
            |: Nous créons un [objet] de 7 éléments en utilisant les [fonctions] Symbol.iterator et Generator. 
            |: Dans la deuxième partie, nous assignons notre [objet] à un tout constant. À la fin, nous imprimons sa valeur.
/*          |___________________________________________________________________________________________________________________________________________________|
    
     ______________________
    |::::::::::::::::::::::|
    |: METHODES INTEGREES :|____________________________________________________________________________________________________________________________________
    |___                                                                                                                                                        | 
        |: ES6 introduit de nouvelles méthodes intégrées pour faciliter plusieurs tâches. Ici, nous allons couvrir les plus communs
        |: Il est toujours recommandé de refactoriser votre code avec la nouvelle syntaxe pour apprendre de nouvelles choses et rendre votre code plus compréhensible.
        
         ______________________      
        |::::::::::::::::::::::|
        |: Elément de tableau :|____________________________________________________________________________________________________________________
        |                                                                                                                                           |
        |: La méthode utilisée pour rechercher le premier élément d'un tableau par sa valeur et une règle était la suivante:
        |___                                                                                                                                                    */
                [4, 5, 1, 8, 2, 0].filter(function (x) {
                  return x > 3;
                })[0];
/*          |
            |: La nouvelle syntaxe est plus propre et plus robuste:                                                         
            |                                                                                                                                                   */
                [4, 5, 1, 8, 2, 0].find(x => x > 3);
/*          |
            |: Vous pouvez également obtenir l'index de l'élément ci-dessus en utilisant la méthode findIndex ():  
            |                                                                                                                                                   */
                [4, 5, 1, 8, 2, 0].findIndex(x => x > 3);
/*          |_______________________________________________________________________________________________________________________________________|

         _____________________________________      
        |:::::::::::::::::::::::::::::::::::::|
        |: Répéter des chaînes de caractères :|_____________________________________________________________________________________________________
        |                                                                                                                                           |
        |: Avant ES6, la syntaxe suivante permettait de répéter une chaîne plusieurs fois:  
        |___                                                                                                                                                    */
                console.log(Array(3 + 1).join("foo"));                  // foofoofoo
/*          |
            |: Avec la nouvelle syntaxe, cela devient:
            |                                                                                                                                                   */
                console.log("foo".repeat(3));                           // foofoofoo
/*          |_______________________________________________________________________________________________________________________________________|
        
        
        | :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        | ::                        Il est toujours recommandé de refactoriser votre code avec la nouvelle syntaxe pour apprendre                          ::   
        | ::                                       de nouvelles choses et rendre votre code plus compréhensible.                                           ::
        | :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        |_______________________________________________________________________________________________________________________________________________________| 
                
                    
/* ##################################################################################################################################################################
/* #########################################################################   LES MODULES   ########################################################################   
/* ##################################################################################################################################################################
         _______________________________________________________________________________________________________________________________________________________
        |                                                                                                                                                       |
        |: Il est recommandé de diviser le code associé en modules. Avant ES6, certaines bibliothèques rendaient cela possible (ex: RequireJS, CommonJS). 
        |  ES6 prend désormais en charge cette fonctionnalité de manière native.
        |: Considérations lors de l'utilisation de modules:
        |___
            |: La première considération est la maintenabilité. Un module est indépendant des autres modules, ce qui permet des améliorations 
            |  et des extensions sans aucune dépendance du code des autres modules.
            |: La deuxième considération est l'espacement de noms. Dans une leçon précédente, nous avons parlé des variables et de la portée. 
            |  Comme vous le savez, les "vars" sont déclarés globalement, il est donc courant d'avoir une pollution par espaces de noms où des variables
            |  non liées sont accessibles dans tout notre code. Les modules résolvent ce problème en créant un espace privé pour les variables.
            |: Une autre considération importante est la réutilisabilité. Lorsque nous écrivons du code pouvant être utilisé dans d'autres projets, 
            |  des modules permettent de le réutiliser facilement sans avoir à le réécrire dans un nouveau projet.
         ___|    
        |
        |: Voyons comment utiliser les modules dans les fichiers JS:
        |___                                                                                                                                                    */
                // lib/math.js
                export let sum = (x, y) => { return x + y; }            //            Nous exportons la fonction sum                // 
                export let pi = 3.14;                                   //                   et la variable pi,                     //  
                                                                        //  afin de pouvoir les utiliser dans différents fichiers.  //
                // app.js
                import * as math from "lib/math"                        
                console.log(`2p = + ${math.sum(math.pi, math.pi)}`)
/*          |
            |  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            |  !!      ES6 supporte officiellement les modules, cependant, certains navigateurs ne supportent pas encore les modules de manière native.   !!  
            |  !!              Nous devrions donc utiliser des bundlers (builders) tels que Webpack ou Browserify pour exécuter notre code.               !!
            |  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            |___________________________________________________________________________________________________________________________________________________|
            
                    
/* ##################################################################################################################################################################
/* ################################################################   LE DOM (Document Objet Mode)   ################################################################
/* ##################################################################################################################################################################

         _______________________________________________________________________________________________________________________________________________________
        |                                                                                                                                                       |
        |: Lorsque vous ouvrez une page Web dans un navigateur, le code HTML de la page est chargé et affiché visuellement à l'écran.
        |: Pour ce faire, le navigateur construit le DOM de cette page, qui est un modèle orienté [objet] de sa structure logique.
        |: Le DOM d'un document HTML peut être représenté sous la forme d'un ensemble imbriqué de boîtes (<head>,<body>,<title>,<h1><a>, etc...)
        |: JavaScript peut être utilisé pour manipuler le DOM d’une page de manière dynamique pour ajouter, supprimer et modifier des éléments.
        |: Il est important de comprendre les relations entre les éléments d’un document HTML afin de pouvoir les manipuler avec JavaScript.
        |: Il existe un objet document prédéfini en JavaScript, qui peut être utilisé pour accéder à tous les éléments du DOM.
        |: En d'autres termes, le DOM est le propriétaire (ou la racine) de tous les [objet] de votre page Web.
        |: Ainsi, si vous souhaitez accéder aux [objet] d'une page HTML, vous commencez toujours par accéder à l'[objet] document.
        |: Chaque objet du DOM correspond à un nœud dans l'arborescence de la page web.
        |___
         ___| Exemple:    document.body.innerHTML = "Some text";
        |
        |: Comme body est un élément du DOM, nous pouvons y accéder à l'aide de l'objet document et modifier le contenu de la propriété innerHTML.
        |: La propriété innerHTML peut être utilisée sur presque tous les éléments HTML pour modifier son contenu.
        |_______________________________________________________________________________________________________________________________________________________| 
    
     __________________________
    |::::::::::::::::::::::::::|
    |: SELECTION DES ELEMENTS :|________________________________________________________________________________________________________________________________
    |___                                                                                                                                                        | 
        |: Tous les éléments HTML sont des [objet]. Et comme nous le savons, chaque [objet] a des propriétés et des méthodes.
        |: Le DOM a des méthodes qui vous permettent de sélectionner l'élément HTML souhaité.
        |: Ces trois méthodes sont les plus couramment utilisées pour sélectionner des éléments HTML:                                                       
        |___                                                                                                                                                    */
                document.getElementById("id");                   // Trouver un élément par son ID
                document.getElementsByClassName("name");         // Trouver un élément par son nom de Class
                document.getElementsByTagName("name");           // Trouver un élément par sa balise HTML
/*          |
            |: Dans l'exemple ci-dessous, la méthode getElementById est utilisée pour sélectionner l'élément avec id = "demo" et en modifier le contenu:
            |                                                                                                                                                   */
                var elem = document.getElementById("demo");
                elem.innerHTML = "Hello World!";
/*          |
            |: L'exemple ci-dessus suppose que le code HTML contient un élément avec id = "demo", par exemple <div id = "demo"> </ div>.
            |: La méthode getElementsByClassName () renvoie une collection de tous les éléments du document portant le nom de classe spécifié.
            |: Si notre page HTML contient trois éléments avec class = "demo", le code suivant renverra tous ces éléments sous forme de tableau:
            |                                                                                                                                                   */
                var arr = document.getElementsByClassName("demo");
                arr[1].innerHTML = "Hi";                            // On modifie le deuxième élément
/*          |
            |: De même, la méthode getElementsByTagName renvoie tous les éléments du nom de balise spécifié sous forme de tableau.
            |: L'exemple suivant récupère tous les éléments de paragraphe de la page et modifie leur contenu:
            |                                                                                                                                                   */
                var arr = document.getElementsByTagName("p");   //  On récupère tous les éléments de paragraphe de la page
                for (var x = 0; x < arr.length; x++) {      //  Nous utilisons la propriété length du tableau pour parcourir tous les éléments de la page.
                arr[x].innerHTML = "Hi there";       }      //  Pour chaque élément, on en modifie le contenu du texte par "Hi there"
/*          |__
            |: Les propriétés suivantes permettent de récupérer le contenu html d'un élément du DOM
            |: La propriété {innerHTML} a été introduite par Microsoft et ne fait pas partie de la spécification DOM du W3C, mais elle est maintenant
            |  prise en charge par tous les principaux navigateurs.
            |                                                                                                                                                   */
                document.getElementById("contenu").innerHTML;   // Récupère le contenu HTML de l'élément identifié par "contenu"
                document.getElementById("contenu").textContent;  // renvoie tout le contenu textuel d'un élément du DOM, sans l'éventuel balisage HTML.﻿﻿
/*          |__
            |: Pour faciliter la sélection d'éléments suivant des critères complexes, le DOM, grâce à la méthode {querySelectorAll} permet de rechercher
            |  des éléments à partir d'un sélecteur CSS. Grâce à cette méthode, on peut rechercher des éléments du DOM en définissant un sélecteur identique
            |  à celui qu'on utiliserait dans une feuille de style CSS:
            |                                                                                                                                                   */
                document.querySelectorAll("p").length;                      // Tous les paragraphes       
                document.querySelectorAll("#contenu p").length;             // Tous les paragraphes à l'intérieur de l'élément identifié par "contenu"
                document.querySelectorAll(".existe").length;                // Tous les éléments ayant la classe "existe"
                document.querySelectorAll("#antiques > .existe").length;    // Tous les éléments fils de l'iD "antiques" avec la classe "existe"
/*          |
            |: L'autre méthode de recherche d'éléments à partir d'un sélecteur CSS s'appelle {querySelector}. Elle fonctionne de manière identique à 
            |  {querySelectorAll}, mais renvoie uniquement le premier élément correspondant au sélecteur passé en paramètre.﻿﻿
            |                                                                                                                                                   */
                document.querySelector("p");      // Le premier paragraphe                                                                         
/*          |__
            |: Certains attributs sont directement accessibles sous la forme de propriétés. Notamment pour les attributs {id}, {src}, {href} et {value}.
            |                                                                                                                                                   */
                document.querySelector("ul").id     // L'identifiant de la première liste
                document.querySelector("a").href    // L'attribut href du premier lien
/*          |
            |: La méthode {getAttribute} peut être appliquée à un élément du DOM et renvoie la valeur de l'attribut passé en paramètre:
            |                                                                                                                                                   */
                document.querySelector("a").getAttribute("href");       // L'attribut href du premier lien
/*          |
            |: On peut vérifier la présence d'un attribut sur un élément grâce à la méthode {hasAttribute}    
            |                                                                                                                                                   */
                document.querySelector("a").hasAttribute("target")      // renvoi true ou false                                                              
/*          |__
            |: La propriéte {classList} permet de récupérer la liste des classes d'un élément du DOM (s'utilise comme un tableau)         
            |: La méthode {contains} teste la présence d'une classe dans un élément ( )  
            |                                                                                                                                                   */
                document.getElementById("antiques").classList;                          // Liste des classes de l'élément identifié par "antiques"
                document.getElementById("antiques").classList.contains("merveille")     // renvoi true ou false                                                             
/*          |__
            |: Chaque objet du DOM a une propriété {nodeType} qui indique son type (noeud ou texte)
            |: La valeur de cette propriété est {document.ELEMENT_NODE} pour un nœud "élément" (balise HTML) et {document.TEXT_NODE} pour un nœud textuel.
            |                                                                                                                                                   */
                if (document.body.nodeType === document.ELEMENT_NODE) {     // La balise {body} est bien un élément de type noeud
                    console.log("Body est un noeud élément");}   else {
                    console.log("Body est un noeud textuel");
                }              
/*          |
            |: Chaque élément du DOM possède un ensemble de propriétés et de méthodes fournissant des informations sur leurs relations dans le DOM:
            |                                                                                                                                                   */
                element.childNodes          //  renvoie un tableau des nœuds enfants d'un élément.              (ex:Div/ a, h1, p)
                element.firstChild          //  renvoie le premier noeud enfant d'un élément.                    (ex:Div/ a)
                element.lastChild           //  renvoie le dernier noeud enfant d'un élément.                   (ex:Div/ p)
                element.hasChildNodes       //  renvoie true si un élément a des nœuds enfants, sinon false.
                element.nextSibling         //  renvoie le nœud suivant au même niveau d'arborescence.
                element.previousSibling     //  renvoie le noeud précédent au même niveau d'arborescence.
                element.parentNode          //  renvoie le nœud parent d'un élément.
/*          |
            |  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            |  !!              Les espaces entre les balises ainsi que les retours à la ligne dans le code HTML sont considérés par le navigateur         !!  
            |  !!                       comme des nœuds textuels, il faut donc en prendre compte lors de la selection des éléments du DOM                 !!
            |  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            |___________________________________________________________________________________________________________________________________________________|
    
     ________________________________
    |::::::::::::::::::::::::::::::::|
    |: MODIFIER UN ELEMENT EXISTANT :|__________________________________________________________________________________________________________________________
    |___                                                                                                                                                        | 
        |: La propriété {innerHTML} peut être utilisée pour modifier le contenu HTML d'un élément du DOM.                                          
        |___                                                                                                                                                    */
                document.getElementById("langages").innerHTML += '<li id="new">New</li>'; // Ajout d'un élément "new" à une liste contenant l'Id "langages"
/*          |
            |: {innerHTML} est souvent employée pour "vider" un élément de tout son contenu: 
            |                                                                                                                                                   */
                document.getElementById("langages").innerHTML = ""; // Suppression du contenu HTML de la liste ayant pour Id "langages"
/*          |
            |  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            |  !! L'utilisation de {innerHTML} conduit à manipuler des chaînes de caractères pour représenter des éléments HTML ainsi que leurs propriété !!  
            |  !!   Afin de préserver la lisibilité du code et d'éviter les erreurs, il convient de réserver son utilisation à de petites modifications.  !!
            |  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            |__
            |: {textContent} permet de modifier le contenu textuel d'un élément du DOM: 
            |                                                                                                                                                   */
                document.querySelector("h1").textContent += " rajout de texte"; // Modification du contenu textuel du premier titre
/*          |__
            |: {setAttribute} permet de définir la valeur de l'un des attributs d'un élément. Elle prend en paramètres le nom et la valeur de l'attribut.
            |                                                                                                                                                   */
                document.querySelector("h1").setAttribute("id", "titre"); // Définition de l'attribut "id" du premier titre
/*          |
            |: Certains attributs comme {id}, {src}, {href} et {value} sont directement modifiables sous la forme de propriétés:
            |                                                                                                                                                   */
                document.querySelector("h1").id = "titre"; 
/*          |__
            |: On peut utiliser la propriété {classList} pour ajouter ou supprimer des classes à un élément du DOM. Pour cela, on emploie les méthodes
            |  "add"(ajout) et "remove" (suppression):
            |                                                                                                                                                   */
                var titreElt = document.querySelector("h1"); // Accès au premier titre h1
                titreElt.classList.remove("debut"); // Suppression de la classe "debut"
                titreElt.classList.add("titre"); // Ajout de la classe "titre"
/*          |___________________________________________________________________________________________________________________________________________________|

     _____________________________
    |:::::::::::::::::::::::::::::|
    |: AJOUTER UN NOUVEL ELEMENT :|_____________________________________________________________________________________________________________________________
    |___                                                                                                                                                        | 
        |: Utilisez les méthodes suivantes pour créer de nouveaux nœuds:
        |___
            |: element.cloneNode ()                 //  Clone un élément et retourne le noeud résultant.
            |: document.createElement (element)     //  Crée un nouveau nœud d'élément.
            |: document.createTextNode (text)       //  Crée un nouveau nœud de texte.  
            |                                                                                                                                                   */
                var node = document.createTextNode("Texte");
/*          |
            |: Cela créera un nouveau nœud de texte, mais il n'apparaîtra pas dans le document tant que vous ne l'ajouterez pas à un élément 
            |  existant à l'aide de l'une des méthodes suivantes:                                                                                           
            |                                                                                                                                                   */
                element.appendChild(nouveauNoeud)                       //  Ajoute un nouveau nœud enfant à un élément en tant que dernier nœud enfant.
                element.insertBefore(noeud1, noeud2)                    //  Insère noeux1 en tant qu'enfant avant noeud2.
/*          |
            |: Exemple avec: <div id ="demo">some content</div>    
            |                                                                                                                                                   */
                var p = document.createElement("p");                    // On créer un nouveau paragraphe, et on l'insère dans la variable "p"
                var noeuxElt = document.createTextNode("Texte");        // On créer un nouveau texte, et on l'insère à la variable "noeuxElt" 
                noeuxElt.textContent = "python";                        // Autre moyen d'ajouter ou modifier le texte de "noeuxElt" (ici, modifie le texte)
                p.appendChild(noeuxElt); // On ajoute le texte au paragraphe, Le nouveau noeud est ajouté à la fin de la liste des noeuds child de ce parent.
                var div = document.getElementById("demo");              
                div.appendChild(p);                                     // Cela crée un nouveau paragraphe et l'ajoute à l'élément div existant sur la page.
/*          |
            |: Il existe une méthode plus récente qui permet de définir encore plus précisément la position des éléments insérés : {insertAdjacentHTML}
            |: On l'appelle sur un élément existant et elle prend en paramètres une position et une chaîne de caractères HTML qui représente le nouveau
            |  contenu à ajouter. La position du nouveau contenu doit être une valeur parmi :
            |___      
                |: {beforebegin}: avant l'élément existant lui-même.
                |: {afterbegin}: juste à l'intérieur de l'élément existant, avant son premier enfant.
                |: {beforeend}: juste à l'intérieur de l'élément existant, après son dernier enfant.
             ___|: {afterend}: après l'élément existant lui-même. 
            |                                                                                                                                                   */
                // Ajout d'un élément au tout début de la liste
                document.getElementById('langages').insertAdjacentHTML("afterbegin", '<li id="javascript">JavaScript</li>'); 
/*          |
            |___________________________________________________________________________________________________________________________________________________|
    
     _______________________
    |:::::::::::::::::::::::|
    |: TRAVAILLER LE STYLE :|___________________________________________________________________________________________________________________________________
    |___                                                                                                                                                        | 
        |: Le style des éléments HTML peut également être modifié à l'aide de JavaScript.
        |: Tous les attributs de style sont accessibles à l’aide de l’[objet] style de l’élément. 
        |___                                                                                                                                                    */
                var x = document.getElementById("demo");
                x.style.color = "6600FF";
                x.style.width = "100px";
/*          |
            |: Toutes les propriétés CSS peuvent être définies et modifiées à l'aide de JavaScript. Rappelez-vous simplement que vous ne pouvez pas 
            |  utiliser de tirets (-) dans les noms de propriété: ceux-ci sont remplacés par les versions de camelCase, où les mots composés 
            |  commencent par une lettre majuscule. Par exemple: la propriété background-color doit être appelée backgroundColor.
            |                                                                                                                                                   */
                pElt.style.fontFamily = "Arial";
                pElt.style.backgroundColor = "black";
/*          |__
            |: Essayons d'utiliser la propriété style pour récupérer les propriétés CSS d'un élément.
            |                                                                                                                                                   */
                var paragraphesElts = document.getElementsByTagName("p");
                console.log(paragraphesElts[0].style.color); // Affiche la couleur du premier paragraphe

/*          |  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            |  !!                               La propriété {style} utilisée en JavaScript représente l'attribut {style} de l'élément.                   !!  
            |  !!       Elle ne permet pas d'accéder aux déclarations de style situées ailleurs, par exemple dans une feuille de style CSS externe.       !!
            |  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            |
            |: La bonne solution pour accéder au style d'un élément consiste à utiliser une fonction nommée {getComputedStyle}.
            |: Elle prend en paramètre un noeud du DOM et renvoie un objet représentant son style. 
            |: On peut ensuite consulter les différentes propriétés CSS de cet objet.                                                                        
            |                                                                                                                                                   */
                var stylePara = getComputedStyle(document.getElementById("para"));
                console.log(stylePara.fontStyle); // Affiche le style de texte de l'élément recheché.
                console.log(stylePara.color); // Affiche la couleur en valeurs RGB
/*          |___________________________________________________________________________________________________________________________________________________|
    
     ________________________
    |::::::::::::::::::::::::|
    |: RETIRER DES ELEMENTS :|__________________________________________________________________________________________________________________________________
    |___                                                                                                                                                        | 
        |: Pour supprimer un élément HTML, vous devez sélectionner le parent de l'élément et utiliser la méthode removeChild (noeux). 
        |___                                                                                                                                                    */
                // <div id="demo">
                // <p id="p1">This is a paragraph.</p>
                // <p id="p2">This is another paragraph.</p>
                // </div> 
                
                var parent = document.getElementById("demo");
                var enfant = document.getElementById("p1");
                parent.removeChild(enfant);                              // Cela supprime le paragraphe avec id = "p1" de la page.
            
/*          |
            |: Une autre façon d’obtenir le même résultat serait d’utiliser la propriété parentNode pour obtenir le parent de l’élément à supprimer:        
            |                                                                                                                                                   */
                var enfant = document.getElementById ("p1");
                enfant.parentNode.removeChild (child);
/*          |___________________________________________________________________________________________________________________________________________________|
    
     __________________________
    |::::::::::::::::::::::::::|
    |: REMPLACER DES ELEMENTS :|________________________________________________________________________________________________________________________________
    |___                                                                                                                                                        | 
        |: Pour remplacer un élément HTML, la méthode element.replaceChild (newNode, oldNode) est utilisée. 
        |___                                                                                                                                                    */
                // <div id="demo">
                // <p id="p1">This is a paragraph.</p>
                // <p id="p2">This is another paragraph.</p>
                // </div>                                                                                                                                            
            
                var p = document.createElement("p");
                var noeud = document.createTextNode("Nouveau texte");
                p.appendChild(noeux);                                   // On ajoute le texte au paragraphe
    
                var parent = document.getElementById("demo");
                var child = document.getElementById("p1");
                parent.replaceChild(p, child);                          // On remplace le paragraphe "p1" par le paragraphe "p"
/*          |___________________________________________________________________________________________________________________________________________________|
    
     _______________________
    |:::::::::::::::::::::::|
    |: ANIMER DES ELEMENTS :|___________________________________________________________________________________________________________________________________
    |___                                                                                                                                                        | 
        |: Maintenant que nous savons comment sélectionner et modifier des éléments DOM, nous pouvons créer une animation simple.
        |: Créons une simple page HTML avec un élément box qui sera animé à l’aide de JS.
        |: Nous allons animer la boîte rouge pour la faire passer du côté droit du conteneur.
        |: Pour créer une animation, nous devons modifier les propriétés d'un élément à intervalles rapprochés. Nous pouvons y parvenir en utilisant 
        |  la méthode setInterval (), qui nous permet de créer un minuteur et d'appeler une fonction pour modifier les propriétés de manière répétée
        |  à des intervalles définis (en millisecondes). Ce code crée une minuterie qui appelle une fonction move () toutes les 500 millisecondes.          
        |___                                                                                                                                                    */
        
                var t = setInterval(move, 10);
/*          |
            |: Nous devons maintenant définir la fonction move (), qui change la position de la boîte:  
            |                                                                                                                                                   */
                var pos = 0;                                    // Position de départ de notre box
                var box = document.getElementById("box");
    
                function move()                                 // La fonction move () incrémente la propriété left de l'élément box de un à chaque appel. 
                {  
                    if(pos >= 66) {                             // Si la position atteint la fin du container...
                        clearInterval(t);           }           // On met fin au timer !
                    else {
                        pos += 1;                               // Sinon, la box continue de se déplacer vers la droite...
                        box.style.left = pos+"px";  }
                }
/*          |___________________________________________________________________________________________________________________________________________________|



/* ##################################################################################################################################################################
/* ###################################################################   GESTION DES EVENEMENTS   ###################################################################
/* ##################################################################################################################################################################

     ___________________________________________________________________________________________________________________________________________________________
    |                                                                                                                                                           |
    |: Vous pouvez écrire du code JavaScript qui s'exécute lorsqu'un événement se produit, par exemple lorsqu'un utilisateur clique sur un élément HTML,      
    | déplace la souris ou soumet un formulaire. Lorsqu'un événement se produit sur un élément cible, une fonction de gestionnaire est exécutée.            
    |: Quel que soit le type d'événement, son déclenchement s'accompagne de la création d'un objet [Event] pouvant être utilisé par la fonction qui gère 
    | l'événement. Cet objet dispose de propriétés qui fournissent des informations sur l'événement, et de méthodes qui permettent d'agir sur celui-ci.
    |: La plupart des propriétés de l'objet [Event] dépendent du type d'événement déclenché.
    |: Quel que soit le type d'événement, 'type' renvoie le type et 'target' renvoie la cible de l'événement
    |
    |: Le code ci-dessous utilise l'objet [Event] pour afficher le type de l'événement déclenché ainsi que le texte de l'élément cible lors d'un clic sur le
    | bouton de notre page web. Cet objet est fourni à la fonction qui gère l'événement sous la forme d'un paramètre nommé 'e'.
    |: Le choix du nom du paramètre est libre, et vous pourrez rencontrer également le nom [event].
    |_______
            |                                                                                                                                                   */
                document.getElementById("bouton").addEventListener("click", function (e) {
                    console.log("Evènement : " + e.type +                                       // type renvoi click
                        ", texte de la cible : " + e.target.textContent);                       // Affiche le texte du bouton
                });
/*          |___________________________________________________________________________________________________________________________________________________|
         ______________________
        |::::::::::::::::::::::|
        |: EVENEMENTS CLAVIER :|________________________________________________________________________________________________________________________________
        |___                                                                                                                                                    |
            |: La solution la plus courante pour réagir à l'appui sur une touche du clavier consiste à gérer les événements de type ("keypress")
            |  déclenchés sur le corps de la page web.
            |
            |: L'exemple suivant permet d'afficher dans la console le caractère associé à la touche frappée. Ici, l'information sur ce caractère
            |  est fournie sous la forme de la propriété 'charCode' de l'objet [Event] (le paramètre 'e').  Il s'agit de la valeur numérique 
            |  (appelée valeur Unicode) associée au caractère. La méthode {String.fromCharCode} permet de traduire cette valeur en une chaîne 
            |  représentant le caractère.                                                                                                                    
            |                                                                                                                                                   */
                document.addEventListener("keypress", function (e) {
                    console.log("Vous avez appuyé sur la touche " + String.fromCharCode(e.charCode));
                });
/*          |
            |: Pour gérer l'appui et le relâchement sur n'importe quelle touche du clavier (pas seulement celles qui produisent des caractères),
            |  on utilise les évènements ("keydown") et ("keyup").
            |: Cette fois-ci, le code de la touche est accessible dans la propriété 'keyCode' de l'objet [Event].
            |                                                                                                                                                   */
                // Affiche des informations sur un événement clavier
                function infosClavier(e) {
                    console.log("Evènement clavier : " + e.type + ", touche : " + e.keyCode);
                }

                // Gestion de l'appui et du relâchement d'une touche du clavier
                document.addEventListener("keydown", infosClavier);             // renvoi keyup ou keydown en fonction de l'appui 
                document.addEventListener("keyup", infosClavier);           // ou du relachement d'une touche du clavier sur la page
                
                // Lors d'un appui prolongé sur une touche, l'événement ("keydown") est déclenché plusieurs fois.
/*          |___________________________________________________________________________________________________________________________________________________|
        
         _____________________
        |:::::::::::::::::::::|
        |: EVENEMENTS SOURIS :|_________________________________________________________________________________________________________________________________
        |___                                                                                                                                                    |
            |: Le clic souris sur n'importe quel élément du DOM déclenche l'apparition d'un événement de type ("click").
            |! Dans le cas d'une interface tactile, l'événement ("click") associé à un bouton est déclenché par l'appui avec le doigt sur ce bouton.
            |: L'objet [Event] associé à un événement de type ("click") contient (entre autres) une propriété {button} qui permet de connaître le bouton 
            | de la souris utilisé, ainsi que des propriétés 'clientX' et 'clientY' qui renvoient les coordonnées horizontales et verticales de l'endroit 
            | où le clic s'est produit. Ces coordonnées sont définies par rapport à la zone de la page actuellement affichée par le navigateur, à la 
            | différence des propriétés 'pageX' et 'pageY' qui sont les coordonnées depuis le haut de page même la page est scrollée.
            |
            |: L'exemple de code ci-dessous affiche des informations sur tous les événements ("click") déclenchés sur la page web.
            |: Ces événements sont gérés par une fonction nommée "infosSouris".
            |                                                                                                                                                   */
                // Renvoie le nom du bouton souris à partir de son code
                function getBoutonSouris(code) {
                    var bouton = "inconnu";
                    switch (code) {
                    case 0:                 // 0 est le code du bouton gauche
                        bouton = "gauche";
                        break;
                    case 1:                 // 1 est le code du bouton du milieu
                        bouton = "milieu";
                        break;
                    case 2:                 // 2 est le code du bouton droit
                        bouton = "droit";
                        break;
                    }
                    return bouton;
                }
                // Affiche des informations sur un événement souris
                function infosSouris(e) {
                    console.log("Evènement souris : " + e.type + ", bouton " +
                        getBoutonSouris(e.button) + ", X : " + e.clientX + ", Y : " + e.clientY);
                }
                // Gestion du clic souris
                document.addEventListener("click", infosSouris);
/*          |
            |: De manière similaire aux événements clavier, on peut utiliser les événements ("mousedown") et ("mouseup") pour détecter l'appui et 
            | le relâchement d'un bouton de la souris.
            |                                                                                                                                                   */
                document.addEventListener("mousedown", infosSouris);
                document.addEventListener("mouseup", infosSouris);

                onclick         //  Lorsque l'utilisateur clique sur un élément
                onmouseover     //  Lorsque la souris de l'utilisateur survole un élément
                onmouseout      //  Lorsque la souris de l'utilisateur arrête de survoler un élément
                onmousedown     //  Lorsque la souris de l'utilisateur clique sur un élément
                onmouseup       //  Lorsque la souris de l'utilisateur arrête de cliquer sur un élément
                onblur          //  Lorsque la souris de l'utilisateur perd le focus d'un élément
                onfocus         //  Lorsque la souris de l'utilisateur obtient le focus d'un élément
/*          |___________________________________________________________________________________________________________________________________________________|

         _________________________
        |:::::::::::::::::::::::::|
        |: EVENEMENTS FORMULAIRE :|_____________________________________________________________________________________________________________________________
        |___                                                                                                                                                    |
            |: Le langage JavaScript permet de gérer les formulaires définis dans une page web afin de renforcer l'interactivité de cette page.
            |: Grâce à JavaScript, nous allons pouvoir manipuler le formulaire et ses données directement côté navigateur client, avant (éventuellement)
            | d'envoyer ces données vers un serveur externe.
            |:  Ainsi, on pourra avertir immédiatement l'utilisateur en cas de saisie erronée, ou bien lui proposer une liste de suggestions
            |  au fur et à mesure de sa frappe, et bien d'autres choses encore.
            |_______________________
            ||°°°°°°°°°°°°°°°°°°°°||
            || Les Zones de Texte ||____________________________________________________________________________________________________________________________|
            ||__                                                                                                                                                |
                |: Une zone de texte permet à l'utilisateur de saisir du texte sur une ou plusieurs lignes.
                |: Une zone monoligne correspond à la balise HTML <input type="text">, une zone multiligne est définie grâce à la balise <textarea>.
                |: En JavaScript, on accède à la valeur d'une zone de texte en utilisant la propriété 'value' de l'élément du DOM correspond.                                                                                                                                               
                |                                                                                                                                               */
                    var pseudoElt = document.getElementById("pseudo").value = "MonPseudo";
/*              |
                |: L'utilisateur qui clique sur une zone de saisie pour y taper une information déclenche l'apparition d'un événement de type {focus}
                |: Inversement,  le changement de cible de saisie provoque l'apparition d'un événement de type {blur} sur l'ancienne zone qui avait le focus.
                |: On peut utiliser ces événements pour afficher à l'utilisateur une aide contextuelle associée à la zone de saisie courante:                                                                                                                                              
                |                                                                                                                                               */
                    // Affichage d'un message contextuel pour la saisie du pseudo
                    pseudoElt.addEventListener("focus", function () {
                        document.getElementById("aidePseudo").textContent = "Entrez votre pseudo";
                    });
                    // Suppression du message contextuel pour la saisie du pseudo
                    pseudoElt.addEventListener("blur", function (e) {
                        document.getElementById("aidePseudo").textContent = "";
                    });
/*              |
                |: On peut modifier la cible de saisie avec les méthodes {focus} (pour donner le focus) et {blur} (pour l'enlever) sur un élément du DOM.
                |                                                                                                                                               */
                    pseudoElt.focus();      // Focus sur la zone de saisie du pseudo
/*          ____________________________
            ||°°°°°°°°°°°°°°°°°°°°°°°°||
            || Les éléments d'options ||________________________________________________________________________________________________________________________|
            ||__                                                                                                                                                |
                |: Ces éléments permettent à l'utilisateur de faire un choix parmi plusieurs possibilités. Ils ont en commun de déclencher un événement
                |  de type {change} lorsque l'utilisateur modifie son choix.                                                                                                 
                |___                                                                                                                                            */
                        // Affichage de la demande de confirmation d'inscription
                        document.getElementById("confirmation").addEventListener("change", function (e) {
                            console.log("Demande de confirmation : " + e.target.checked);                       // Renvoi "true" ou "false"
                        });
/*              ||__________________
                ||''''''''''''''''||
                || Cases à cocher ||____________________________________________________________________________________________________________________________|
                ||__                                                                                                                                            |
                    |: On définit une case à cocher dans un formulaire avec la balise <input type="checkbox">. 
                    |: Lorsque la case change de valeur, l'objet "Event" associé à l'événement dispose d'une propriété booléenne 'checked' qui indique le  
                    | nouvel état de la case (cochée/décochée).                                                                                                 
                    |__                                                                                                                                         */
                        // Affichage de la demande de confirmation d'inscription
                        document.getElementById("confirmation").addEventListener("change", function (e) {
                            console.log("Demande de confirmation : " + e.target.checked);                       // Renvoi "true" ou "false"
                        });
/*              ||_________________
                ||'''''''''''''''||
                || Boutons radio ||_____________________________________________________________________________________________________________________________
                ||__                                                                                                                                            |
                    |: Un groupe de boutons radio permet à l'utilisateur de faire un seul choix parmi plusieurs possibilités. 
                    |: On crée ces boutons avec des balises <input type="radio"> possédant le même attribut 'name' et des attributs 'value' différents.
                    |__                                                                                                                                         */
                        // Affichage du type d'abonnement choisi
                        var aboElts = document.getElementsByName("abonnement");
                        for (var i = 0; i < aboElts.length; i++) {
                            aboElts[i].addEventListener("change", function (e) {
                                console.log("Formule d'abonnement choisie : " + e.target.value);    // Renvoi l'attribut 'value' de l'élément coché
                            });
                        }
/*          ________________________
            ||°°°°°°°°°°°°°°°°°°°°||
            || Listes déroulantes ||____________________________________________________________________________________________________________________________
            ||__                                                                                                                                                |                                 
                |: On construit une liste déroulante au moyen d'une balise <select> dans laquelle on ajoute une balise <option> par choix possible dans la liste
                |: L'exemple de code suivant exploite les événements de type {change} déclenchés sur la liste déroulante pour afficher le nouveau choix :
                |___                                                                                                                                            */
                        document.getElementById("nationalite").addEventListener("change", function (e) {
                            console.log("Code de nationalité : " + e.target.value);
                        }); // Affichage de l'attribut 'value' de la balise <option> associée au choix
/*          _________________________
            ||°°°°°°°°°°°°°°°°°°°°°||
            || Gestion des boutons ||____________________________________________________________________________________________________________________________
            ||__                                                                                                                                                |                                 
                |: Il est possible de désactiver ou activer des boutons
                |___                                                                                                                                            */
                        document.getElementById("submit").disabled = true; // Rend le bouton inactif (la valeur "false" le rendra actif)

/*          ______________________________
            ||°°°°°°°°°°°°°°°°°°°°°°°°°°||
            || Gestion des formulaires  ||______________________________________________________________________________________________________________________|
            ||__                                                                                                                                                |                                 
                |: La balise <form> définissant un formulaire correspond à un élément du DOM.              
                |___________________________________
                ||''''''''''''''''''''''''''''''''||
                || Accès aux champs du formulaire ||____________________________________________________________________________________________________________|
                ||__                                                                                                                                            |
                    |: La balise <form> possède une propriété 'elements' rassemblant les champs de saisie du formulaire.
                    |: On peut l'utiliser pour accéder à un champ à partir de son nom (attribut 'name') ou à partir de son indice. 
                    |___                                                                                                                                        */
                            var form = document.querySelector("form");
                            console.log("Nombre de champs de saisie : " + form.elements.length);    // Affiche le nombre d'éléments présents dans le formulaire
                            console.log(form.elements[0].name);                                     // Affiche le premier élément du formulaire
                            console.log(form.elements.mdp.type);                                    // Affiche "password"
/*              ||____________________________
                ||''''''''''''''''''''''''''||
                || Soumission du formulaire ||__________________________________________________________________________________________________________________|
                ||__                                                                                                                                            |
                    |: Un formulaire est soumis lorsque l'utilisateur clique sur le bouton d'envoi. Ce bouton correspond à une balise <input type="submit">. 
                    |: Une balise <input type="reset"> affiche un bouton qui réinitialise les données du formulaire.
                    |: Avant de soumettre un formulaire, un événement de type {submit} est déclenché sur l'élément du DOM correspondant au formulaire.
                    |: En ajoutant un gestionnaire pour ce type d'événement, on peut accéder aux données du formulaire avant leur envoi.
                    |: On peut même annuler l'envoi ultérieur des données en appelant la méthode {preventDefault} sur l'objet "Event" associé à l'événement. 
                    |___                                                                                                                                        */
                            // Affiche les données saisies
                            form.addEventListener("submit", function (e) {
                                var pseudo = form.elements.pseudo.value;
                                var mdp = form.elements.mdp.value;
                                var courriel = form.elements.courriel.value;
                                console.log("Vous avez choisi le pseudo " + pseudo + ", le mot de passe " +
                                    mdp + " et le courriel " + courriel);
                                e.preventDefault(); // Annulation de l'envoi des données
                            });
/*              ||____________________________________________
                ||''''''''''''''''''''''''''''''''''''''''''||
                || Validation des données pendant la saisie ||__________________________________________________________________________________________________|
                ||__                                                                                                                                            |
                    |: La validation pendant la saisie repose sur l'exploitation des événements {input}, qui se déclenchent sur une zone de saisie à chaque 
                    | fois que sa valeur est modifiée.
                    |: L'exemple de code suivant ajoute un gestionnaire pour les événements {input} sur la zone de saisie du mot de passe. Ce gestionnaire 
                    | vérifie la longueur du mot de passe saisi et affiche à l'utilisateur un message ayant un contenu et une couleur appropriés. 
                    |___                                                                                                                                        */
                            // Vérification de la longueur du mot de passe saisi
                            document.getElementById("mdp").addEventListener("input", function (e) {
                                var mdp = e.target.value;           // Valeur saisie dans le champ mdp
                                var longueurMdp = "faible";
                                var couleurMsg = "red";             // Longueur faible => couleur rouge
                                if (mdp.length >= 8) {
                                    longueurMdp = "suffisante";
                                    couleurMsg = "green";           // Longueur suffisante => couleur verte
                                } else if (mdp.length >= 4) {
                                    longueurMdp = "moyenne";
                                    couleurMsg = "orange";          // Longueur moyenne => couleur orange
                                }
                                var aideMdpElt = document.getElementById("aideMdp");
                                aideMdpElt.textContent = "Longueur : " + longueurMdp;   // Texte de l'aide
                                aideMdpElt.style.color = couleurMsg;                    // Couleur du texte de l'aide
                            });
/*              ||________________________________________________
                ||''''''''''''''''''''''''''''''''''''''''''''''||
                || Validation des données à la fin de la saisie ||______________________________________________________________________________________________|
                ||__                                                                                                                                            |
                    |: La fin de la saisie dans une zone de texte correspond à la perte du focus par cette zone, ce qui déclenche l'apparition d'un événement
                    | de type {blur} que l'on peut exploiter pour contrôler la donnée saisie.
                    |___                                                                                                                                        */
                            // Contrôle du courriel en utilisant la méthode {indexOf}
                            document.getElementById("courriel").addEventListener("blur", function (e) {
                                var validiteCourriel = "";
                                if (e.target.value.indexOf("@") === -1) {   // Le courriel saisi ne contient pas le caractère "@"
                                    validiteCourriel = "Adresse invalide";
                                }
                                document.getElementById("aideCourriel").textContent = validiteCourriel; // Affichage d'un message si le courriel est invalide
                            });

                            // Contrôle du courriel en utilisant une expression régulière
                            document.getElementById("courriel").addEventListener("blur", function (e) {
                                var regexCourriel = /.+@.+\..+/;    // Correspond à une chaîne de la forme xxx@yyy.zzz
                                var validiteCourriel = "";
                                if (!regexCourriel.test(e.target.value)) {
                                    validiteCourriel = "Adresse invalide";
                                }
                                document.getElementById("aideCourriel").textContent = validiteCourriel;
                            });
/*
        ________________________
        ||::::::::::::::::::::||
        || EVENEMENTS FENETRE ||
        ||___                 ||________________________________________________________________________________________________________________________________                                                                                                             
            ||____________________________________                                                                                                              |
            ||°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°||
            || Fin du chargement de la page web ||______________________________________________________________________________________________________________|
            ||__                                                                                                                                                |
                |: Il est possible de détecter la fin du chargement de la page en ajoutant un gestionnaire pour l'événement ("load") sur l'objet [window], 
                | qui représente la fenêtre du navigateur. Cela permet d'éviter d'interagir via JavaScript avec des parties de la page non encore chargées.                                                                                                                                               
                |__                                                                                                                                               */
                    window.addEventListener("load", function () {
                        console.log("Page entièrement chargée");
                    });
/*          ||____________________________
            ||°°°°°°°°°°°°°°°°°°°°°°°°°°||
            || Fermeture de la page web ||______________________________________________________________________________________________________________________|
            ||__                                                                                                                                                |         
                |: On peut parfois vouloir détecter la fermeture d'une page web, qui se produit lorsque l'utilisateur ferme l'onglet qui l'affiche 
                | ou navigue vers une autre page dans cet onglet.
                |: Un cas d'utilisation fréquent consiste à afficher une demande de confirmation. Pour cela, il faut ajouter un gestionnaire pour 
                | l'événement ("beforeunload") sur l'objet [window]:                                                                                                
                |__                                                                                                                                               */
                    window.addEventListener("beforeunload", function (e) {
                        var message = "On est bien ici !";
                        e.returnValue = message;             // Provoque une demande de confirmation (standard)
                        return message;              // Provoque une demande de confirmation (certains navigateurs)
                    });                    // Insérer les 2 lignes de codes ci-dessus est nécessaire pour être pris en compte par tous les navigateurs

/*               !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                 !!       Firefox se comporte de manière spécifique sur ce point : il ne déclenche l'événement ("beforeunload") que si l'utilisateur    !!  
                 !!  a interagi avec la page avant de la fermer, et n'affiche pas la valeur de 'returnValue' dans la boîte de dialogue de confirmation. !!
                 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


                onload          //  Lorsqu'un [objet] est chargé
                onunload        //  Lorsque la valeur d'un élément a été changé. Pour les boutons radio et les cases à cacher, l'évènement onchange
/*      
            |: Événements formulaire    ||   Changement de cible de saisie (focus), envoi d'un formulaire
                                                                                                                                                                */

/*          |
                
            |: Les événements correspondants peuvent être ajoutés aux éléments HTML en tant qu'attributs.
            |: Par exemple: <p onclick = "someFunc ()"> du texte </ p>
            |: Affichons une pop-up d'alerte lorsque l'utilisateur survole un bouton avec la souris:
            |                                                                                                                                                   */
                // HTML = <button onmouseover="show()">Survolez moi!</button>
                function show() {
                    alert("Salut " + user + " !");
                }
/*          |
            |: Les gestionnaires d'événements peuvent être affectés à des éléments:
            |                                                                                                                                                   */
                var x = document.getElementById("demo");
                x.onclick = function () {
                document.body.innerHTML = Date();
                }
/*          |
            |: Les événements correspondants peuvent être ajoutés aux éléments HTML en tant qu'attributs.
            |: Par exemple: <p onclick = "someFunc ()"> du texte </ p>
            |: Affichons une pop-up d'alerte lorsque l'utilisateur survole un bouton avec la souris:
            |                                                                                                                                                   */
                // HTML = <button onmouseover="show()">Survolez moi!</button>
                function show() {
                    alert("Salut " + user + " !");
                }
/*          |___________________________________________________________________________________________________________________________________________________|
    
     _____________________
    |:::::::::::::::::::::|
    |: ONLOAD & UNONLOAD :|_____________________________________________________________________________________________________________________________________
    |___                                                                                                                                                        | 
        |: Les événements onload et onunload sont déclenchés lorsque l'utilisateur entre ou quitte la page. Celles-ci peuvent être utiles lorsque vous
        |  effectuez des actions après le chargement de la page.
        |___ 
                // <body onload="faireQuelquechose()">
            |
            |: De même, l'événement window.onload peut être utilisé pour exécuter du code après le chargement de la page entière.
            |
                // window.onload = function() { du code }
            |___________________________________________________________________________________________________________________________________________________|
    
     ___________________________
    |:::::::::::::::::::::::::::|
    |: L'AUDITEUR D'EVENEMENTS :|_______________________________________________________________________________________________________________________________
    |___                                                                                                                                                        | 
        |: La méthode {addEventListener} attache un gestionnaire d'événements à un élément sans remplacer les gestionnaires d'événements existants. 
        |: Vous pouvez ajouter plusieurs gestionnaires d'événements à un seul élément.
        |___                                                                                                                                                    */
                element.addEventListener(Evènement, fonction, useCapture);
/*          |
            |: Le premier paramètre est le type de l'événement (comme ("click") ou ("mousedown")).
            |: Le deuxième paramètre est la fonction que nous voulons appeler lorsque l'événement se produit.
            |: Le troisième paramètre est une valeur booléenne spécifiant s'il faut utiliser la propagation d'événements ou la capture d'événements (option)
            |: Notez que vous n'utilisez pas le préfixe "on" pour cet événement; utilisez ("click") au lieu de "onclick".                                      
            |                                                                                                                                                   */
                element.addEventListener("click", myFunction);          //  On ajoute une action à l'évenement "onclick"
                element.addEventListener("mouseover", myFunction);      //  On ajoute une autre action au même élément lorsque la souris survole l'élément
    
                function myFunction() {
                    alert("Hello World!");
                }
/*          |
            |: Il est possible d'utiliser une syntaxe un peu plus concise en définissant la fonction appelée au moment de l'appel {addEventListener}
            |: Dans ce cas, la fonction n'est plus identifiée par un nom et ne peut plus être utilisée ailleurs dans le programme.
            |: Il s'agit d'une fonction anonyme. Les fonctions anonymes sont fréquemment utilisées en JavaScript.                                     
            |                                                                                                                                                   */
                var boutonElt = document.getElementById("bouton");
                boutonElt.addEventListener("click", function () {       // Ajout d'un gestionnaire pour l'événement ("click")
                    console.log("clic");
                });
/*          |
            |: Nous pouvons supprimer l'un des auditeurs:
            |                                                                                                                                                   */
                element.removeEventListener("mouseover", myFunction);
/*          |            
            |  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            |  !!    Pour pouvoir utiliser {removeEventListener}, il faut que la fonction qui gère l'événement n'ait pas été définie de manière anonyme.  !!
            |  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!    
            |
            |: Créons un gestionnaire d'événements qui se supprime après avoir été exécuté:
            |                                                                                                                                                   */
                var btn = document.getElementById("demo");
                btn.addEventListener("click", myFunction);
    
                function myFunction() {
                    alert(Math.random());
                     btn.removeEventListener("click", myFunction);
                }
                    // Après avoir cliqué sur le bouton, une alerte avec un nombre aléatoire s'affiche et l'écouteur d'événements est supprimé.
/*          |            
            |  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            |  !!  Internet Explorer version 8 et antérieure ne prend pas en charge les méthodes {addEventListener} et removeEventListener (). Toutefois, !!  
            |  !!        vous pouvez utiliser la méthode {document.attachEvent} pour attacher des gestionnaires d'événements dans Internet Explorer.      !!
            |  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            |___________________________________________________________________________________________________________________________________________________|
    
     ____________________________
    |::::::::::::::::::::::::::::|
    |: PROPRAGATION D'EVENEMENT :|______________________________________________________________________________________________________________________________
    |___                                                                                                                                                        | 
        |: Le DOM représente une page web sous la forme d'une hiérarchie de noeuds. Les événements déclenchés sur un noeud enfant vont se déclencher ensuite 
        | sur son noeud parent, puis sur le parent de celui-ci, et ce jusqu'à la racine du DOM (la variable 'document'). C'est ce qu'on appelle 
        | la propagation des événements.
        |: Il existe deux manières de propager un événement dans le DOM: le bullage et la capture.
        |: La propagation d'événements permet de définir l'ordre des éléments lorsqu'un événement se produit. Si vous avez un élément <p> contenu
        | dans un élément <div> et que l'utilisateur clique sur l'élément <p>, l'événement ("click") de quel élément doit être traité en premier?
        |: Ceci est particulièrement utile lorsque vous avez le même événement géré pour plusieurs éléments de la hiérarchie DOM.
        |___
            |: Avec le bullage, l'événement de l'élément le plus à l'intérieur est traité en premier, puis l'événement de l'élément externe est géré. 
            | L'événement ("click") de l'élément <p> est traité en premier, suivi de l'événement ("click") de l'élément <div>.
            |   
            |: Avec la capture, l'événement de l'élément le plus externe est traité en premier, puis l'intérieur. L'événement ("click") de l'élément <div>
         ___| est traité en premier, suivi de l'événement ("click") de l'élément <p>.
        | 
        |: La méthode {addEventListener} vous permet de spécifier le type de propagation avec le paramètre 'useCapture'.
        |___                                                                                                                                                    */
                addEventListener (event, function, useCapture)
/*          |
            |: La valeur par défaut est "false", ce qui signifie que la propagation par bullage est utilisée. Lorsque la valeur est définie sur "true", 
            | l'événement utilise la propagation de capture.                                                                                                
            |                                                                                                                                                   */
                elem1.addEventListener("click", myFunction, true);      // Propagation de capture
                elem2.addEventListener("click", myFunction, false);     // Propagation de bullage
/*          |
            |: La propagation des événements peut être interrompue à tout moment en appelant la méthode {stopPropagation} sur l'objet [Event] depuis une 
            | fonction qui gère un événement. C'est utile pour éviter qu'un même événement soit géré plusieurs fois.
            |: L'ajout d'une ligne dans le gestionnaire d'événement du bouton empêche l'événement ("click") de se propager dans l'arborescence du DOM:                                                                                               
            |                                                                                                                                                   */
                document.getElementById("propa").addEventListener("click", function (e) {   // Gestion du clic sur le bouton
                    console.log("Gestionnaire bouton");
                    e.stopPropagation(); // Arrêt de la propagation de l'événement
                });
/*          |___________________________________________________________________________________________________________________________________________________|
    
     __________________________________________________________
    |::::::::::::::::::::::::::::::::::::::::::::::::::::::::::|
    |: MODIFICATION DU COMPORTEMENT PAR DEFAUT D'UN EVENEMENT :|________________________________________________________________________________________________
    |___                                                                                                                                                        | 
        |: La plupart des événements sont associés à une action par défaut. Le clic sur un lien déclenche la navigation vers la cible de ce lien, le clic
        |  avec  le bouton droit de la souris affiche un menu contextuel, etc. Il est possible d'annuler ce comportement par défaut en appelant la méthode
        | {preventDefault} sur l'objet [Event].  
        |___                                                                                             
            |                                                                                                                                                   */
                document.getElementById("interdit").addEventListener("click", function (e) {        // Gestion du clic sur le lien interdit
                    console.log("Continuez plutôt à lire le cours ;)");
                    e.preventDefault(); // Annulation de la navigation vers la cible du lien
                });
/*          |            
            |       !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            |       !!      Sans une raison valable, il est fortement déconseillé de modifier le comportement standard des éléments de votre page.    !!  
            |       !!                                  Vous risquez surtout d'agacer prodigieusement vos utilisateurs.                               !!
            |       !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            |___________________________________________________________________________________________________________________________________________________|
    
/* ##################################################################################################################################################################
/* ###################################################################  EXPRESSIONS REGULIERES   ####################################################################
/* ##################################################################################################################################################################

     ___________________________________________________________________________________________________________________________________________________________
    |                                                                                                                                                           |
    |: Une expression régulière, également appelée expression rationnelle, définit un motif auquel on va comparer des chaînes de caractères pour trouver
    |  (ou non) des correspondances.
    |: On définit une expression régulière JavaScript en plaçant son motif entre deux caractères "/". La variable ainsi créée est un [objet].
    |: Sa méthode {test} détecte la présence d'une correspondance avec le motif dans la chaîne de caractères passée en paramètre, et renvoie "true" ou "false"
    |_______
            |                                                                                                                                                   */
                var regex = /@/;                                // La chaîne doit contenir le caractère @
                console.log(regex.test(""));                    // Affiche false
                console.log(regex.test("@"));                   // Affiche true
                console.log(regex.test("sophie&mail.fr"));      // Affiche false
                console.log(regex.test("sophie@mail.fr"));      // Affiche true
/*          |
            |: Voici quelques une des très nombreuses possibilités offertes pour définir le motif d'une expression régulière :
            |___
                |:  abc     La chaîne contient "abc"
                |: [abc]    La chaîne contient soit "a", soit "b", soit "c"
                |: [a-z]     La chaîne contient n'importe quelle lettre minuscule de l'alphabet
                |: [0-9]    La chaine contient un chiffre (ou \d)
                |:  a.c     La chaîne contient "a" suivi d'un caractère (n'importe lequel) suivi de "c"
                |:  a\.c    La chaîne contient "a.c" 
                |:  a.+c    La chaîne contient "a" suivi d'un ou plusieurs caractères (n'importe lesquels) suivi de "c"
                |:  a.*c    La chaîne contient "a" suivi de zéro ou plusieurs caractères (n'importe lesquels) suivi de "c"
             ___|
            |
            |: Les crochets[] définissent un intervalle de caractères. Toute chaîne contenant au moins un caractère dans cet intervalle correspondra au motif.
            |: Les motifs [a-z] et [A-Z] permettent de rechercher n'importe quelle lettre de l'alphabet, respectivement en minuscules ou en majuscules.  
            |: Le caractère "." permet de remplacer n'importe quel caractère.
            |: Le caractère "\" indique que le caractère qui suit doit être recherché en tant que tel. Par exemple, "\." permet de rechercher le caractère "."
            |: Le caractère "+" permet de rechercher une ou plusieurs occurrences de l'expression qui le précède.
            |: Le caractère "*" permet de rechercher zéro ou plusieurs occurrences de l'expression qui le précède.
            |
            |: L'expression régulière "/.+@.+\..+/" pourrait servir à vérififier une adresse E-Mail, et se décompose comme suit :
            |___
                |: Commence par un ou plusieurs caractères (.+)
                |: Contient ensuite le caractère "@" 
                |: Commence par un ou plusieurs caractères (.+)
                |: Contient ensuite le caractère "." (\.)
                |: Finit par un ou plusieurs caractères (.+)
                |_______________________________________________________________________________________________________________________________________________|
   

/* ##################################################################################################################################################################
/* ####################################################################  ANIMATIONS JAVASCRIPT   ####################################################################
/* ##################################################################################################################################################################

    ________________________________________
    |::::::::::::::::::::::::::::::::::::::|
    |: REALISER DES ACTIONS DANS LE TEMPS :|____________________________________________________________________________________________________________________
    |___                                                                                                                                                        | 
        |: La fonction {setInterval} permet d'appeler une fonction à intervalles réguliers (par défaut, en millisecondes).
        |: {clearInterval} permet de stopper une exécution répétée. Son paramètre est l'identifiant de l'action, renvoyée par la fonction {setInterval}
        |: {setTimeout} permet d'exécuter une fonction une seule fois après un certain délai, exprimé en millisecondes. 
        |__                                                                                                                                                     */
            // <span id="compteur">10</span>
            var compteurElt = document.getElementById("compteur");

            // Diminue le compteur jusqu'à "0"
            function diminuerCompteur() {
                // Conversion en nombre du texte du compteur
                var compteur = Number(compteurElt.textContent);
                if (compteur > 1) {
                    compteurElt.textContent = compteur - 1;
                } else {
                    // Annule l'exécution répétée si le compteur arrive à "0"
                    clearInterval(intervalId);
                    // Modifie le titre de la page
                    var titre = document.getElementById("titre");
                    titre.textContent = "BOUM !!!";
                    // Modification du titre au bout de 2 secondes
                    setTimeout(function () {
                        titre.textContent = "Tout est cassé :(";
                    }, 2000);
                }
            }

            // Appelle la fonction diminuerCompteur toutes les secondes (1000 millisecondes)
            var intervalId = setInterval(diminuerCompteur, 1000);
/*  _________________________
    |:::::::::::::::::::::::|
    |: ANIMER DES ELEMENTS :|___________________________________________________________________________________________________________________________________|
    |___                                                                                                                                                        | 
        |: Déplaçons un bloc de gauche à droite sur la page
        |: La fonction {requestAnimationFrame} permet de demander au navigateur d'exécuter dès que possible une fonction qui met à jour une animation. 
        |: Le terme "dès que possible" signifie que le navigateur va optimiser la mise à jour de l'animation afin de la rendre fluide.
        |: La fonction {cancelAnimationFrame} permet de stopper une animation. Elle prend un paramètre l'identifiant de l'animation.
        |___                                                                                                                                                    */
            // #bloc {        
            // width: 20px; height: 40px; background: red;
            // position: relative; /* Permettra de décaler le bloc */
            // left: 0px; /* Initialise la position gauche du bloc à déplacer */  }
            // #cadre { border: 1px solid red; }

            var bloc = document.getElementById("bloc");
            var cadre = document.getElementById("cadre");
            var vitesse = 7;                                                // Valeur du déplacement en pixels
            var largeurBloc = parseFloat(getComputedStyle(bloc).width);     // Conversion en nombre du diamètre du bloc (valeur de la forme "XXpx")
            var animationId = null;                                         // Identifiant de l'animation

            
            function deplacerBloc() {                                       // Déplace le bloc sur sa gauche jusqu'au bord du cadre
                var xBloc = parseFloat(getComputedStyle(bloc).left);        // Conversion en nombre de la position gauche du bloc (valeur de la forme "XXpx")
                var xMax = parseFloat(getComputedStyle(cadre).width);       // Conversion en nombre de la largeur du cadre (valeur de la forme "XXpx")
                if (xBloc + largeurBloc <= xMax) {                          // Si le bloc n'est pas encore au bout du cadre
                    bloc.style.left = (xBloc + vitesse) + "px";             // Déplacement du bloc
                    animationId = requestAnimationFrame(deplacerBloc);      // Demande au navigateur d'appeler {deplacerBloc} dès que possible
                } else {    // Annulation de l'animation
                    cancelAnimationFrame(animationId);
                }
            }

            animationId = requestAnimationFrame(deplacerBloc);              // Début de l'animation
/*       ___
        |
        |     !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        |     !!                                Sachez qu'il existe une alternative toute aussi intéressante : l'utilisation de CSS.                     !!  
        |     !!                        Vous pouvez définir quelle technique d'animation employer en fonction de la complexité de l'animation            !!
        |     !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        |
        |: Si l'animation n'est pas en temps réel et doit simplement se produire à intervalles réguliers, utilisez {setInterval}.
        |: Si l'animation est en temps réel et que vous savez qu'elle peut être effectuée via CSS, adoptez cette technique.
        |: Pour tous les autres cas, utilisez {requestAnimationFrame}.
        |_______________________________________________________________________________________________________________________________________________________|



/* ##################################################################################################################################################################
/* ############################################################  COMMUNIQUER AVEC UN SERVEUR JAVASCRIPT   ###########################################################
/* ##################################################################################################################################################################

     _______________________________________________________________________________________________________________________________________________________________
    |                                                                                                                                                               |
    |: Sur un site web classique, chaque action de l'utilisateur implique le chargement d'une nouvelle page depuis le serveur, ce qui limite l'interactivité
    | avec l'utilisateur.﻿ 
    |: Les applications web modernes interceptent les actions de l'utilisateur, lancent des requêtes HTTP asynchrones et ne mettent à jour qu'une partie de la
    | page web avec leurs résultats.
    |: Les technologies utilisées sont regroupées sous l'acronyme AJAX(Asynchronous JavaScript And XML).﻿﻿﻿﻿﻿﻿﻿﻿﻿
    |: Les requêtes HTTP asynchrones utilisées avec AJAX permettent de ne pas bloquer le navigateur en attendant la réponse du serveur.﻿﻿
    |: Pour des raisons de sécurité, les requêtes AJAX dites "cross-domain" entre deux domaines différents sont interdites par défaut. Les autoriser nécessite
    | un paramétrage explicite du serveur web.
    |: Le format de données 'JSON' (JavaScript Object Notation) constitue le standard actuel pour les échanges de données sur le Web, notamment avec AJAX.
    |: Il s'agit d'une syntaxe pour décrire des informations structurées sous une forme proche des objets JavaScript.
    |: Voici un exemple de document 'JSON' qui décrit deux voitures 
    |___                                                                                                                                                            */
            {  
              "voitures" : [    
                { "modèle" : "Peugeot",     
                  "couleur" : "bleu",      
                  "immatriculation" : 2008,      
                  "révisions" : [ 2012, 2014 ]  
                },    
                { "modèle" : "Citroën", 
                  "couleur" : "blanc",      
                  "immatriculation" : 1999,
                  "révisions" : [ 2003, 2005, 2007, 2009, 2011, 2013 ]    
                }
              ]
            }

/*  _________________________
    |:::::::::::::::::::::::|
    |: REQUETES AU SERVEUR :|_______________________________________________________________________________________________________________________________________
    |___                                                                                                                                                            | 
        |: Voici un exemple de requête Javascript
        |_                                                                                                                                                          */
            // Création d'une requête HTTP
            var req = new XMLHttpRequest();
            // Requête HTTP GET synchrone (bloque le programme jusqu'à ce que la réponse soit disponible) vers le fichier langages.txt publié localement
            req.open("GET", "http://localhost/javascript-web-srv/data/langages.txt", false); 
            // Envoi de la requête
            req.send(null); // [Eventuelle information envoyée au serveur (requêtes 'POST' ou 'PUT'), ou bien "null" dans le cas d'une requête 'GET']
            // Affiche la réponse reçue pour la requête
            console.log(req.responseText);  
/*                                                                                                                                      
            |: L'objet {XMLHttpRequest} permet de créer des requêtes HTTP en JavaScript.
            |: Sa méthode {open} permet de configurer la requête HTTP avant son lancement. ["type de requête", URL cible, requête asynchrone ou non]
            |: Sa méthode {send} envoie la requête HTTP vers l'URL cible fournie à 'open', prend en paramètre l'éventuelle information envoyée au serveur 
            | (requêtes 'POST' ou 'PUT'), ou bien "null" dans le cas d'une requête 'GET'
            |: Sa propriété 'responseText' contient sous forme textuelle la réponse renvoyée par le serveur à la requête HTTP.

        _________________________________________
        ||:::::::::::::::::::::::::::::::::::::||
        ||: REQUETES SYNCHRONE ET ASYNCHRONES :||___________________________________________________________________________________________________________________
        ||__                                                                                                                                                        |         
            |: Pendant un échange synchrone, le demandeur doit attendre que l'information voulue lui soit fournie. Les requêtes HTTP asynchrones utilisées avec 
            | AJAX permettent de ne pas bloquer le navigateur en attendant la réponse du serveur.﻿﻿
            |: il est risqué d'utiliser des requêtes HTTP synchrones en JavaScript : pendant toute la durée de l'échange, la page web semblera bloquée et ne 
            | répondra plus aux actions de l'utilisateur.
            |: Comment savoir quand la réponse sera prête ? Pour y arriver, nous allons employer une technique que vous connaissez déjà : les événements !
            | Grâce à eux, notre programme sera notifié de la disponibilité de la réponse et pourra y réagir.
            |_                                                                                                                                                      */
                var req = new XMLHttpRequest();
                // La requête est asynchrone lorsque le 3ème paramètre vaut true ou est absent
                req.open("GET", "http://localhost/javascript-web-srv/data/langages.txt");
                // Gestion de l'événement indiquant la fin de la requête
                req.addEventListener("load", function () {
                    // Affiche la réponse reçue pour la requête
                    console.log(req.responseText);
                });
                req.send(null);
/*          |_______________________________________________________________________________________________________________________________________________________|
    ___________________________
    |:::::::::::::::::::::::::|
    |:: GESTION DES ERREURS ::|_____________________________________________________________________________________________________________________________________
    |___                                                                                                                                                            | 
        |: La gestion des erreurs est une problématique complexe. Notre premier objectif est de les détecter pour les afficher dans la console du navigateur. 
        |: Voici notre code d'exemple intégrant une gestion assez basique des erreurs.
        |_                                                                                                                                                          */
            var req = new XMLHttpRequest();
            req.open("GET", "http://localhost/javascript-web-srv/data/langages.txt");
            req.addEventListener("load", function () {
                if (req.status >= 200 && req.status < 400) { // Le serveur a réussi à traiter la requête
                    console.log(req.responseText);
                } else {
                    // Affichage des informations sur l'échec du traitement de la requête
                    console.error(req.status + " " + req.statusText);
                }
            });
            req.addEventListener("error", function () {
                // La requête n'a pas réussi à atteindre le serveur
                console.error("Erreur réseau");
            });
            req.send(null);
/*
            |: On distingue deux principaux cas d'erreur :

                1) La requête n'a pas réussi à atteindre le serveur (nom du serveur incorrect, erreur réseau, etc). Ces erreurs déclenchent l'apparition d'un 
                    événement de type ("error") sur la requête. Le gestionnaire associé affiche le message "Erreur réseau" dans la console.
                2) La requête a atteint le serveur, mais son traitement a échoué (ressource demandée non trouvée, problème interne au serveur, etc). C'est le code
                    de retour HTTP de la requête, contenu dans sa propriété 'status', qui indique son résultat. Un code supérieur ou égal à 200 et strictement 
                    inférieur à 400 signale la réussite de la requête.

            |: "404 Not Found" indique que la ressource demandée n'a pas été trouvée sur le serveur.
            |_______________________________________________________________________________________________________________________________________________________|
    __________________________________________
    |::::::::::::::::::::::::::::::::::::::::|
    |:: ECRIRE UNE FONCTION AJAX GENERIQUE ::|______________________________________________________________________________________________________________________
    |___                                                                                                                                                            | 
        |: Imaginez que votre programme JavaScript ait plusieurs requêtes HTTP à effectuer. À chaque appel, il faudrait dupliquer le code précédent en modifiant 
        | uniquement l'URL cible et le traitement en cas de réussite de la requête. Cette duplication alourdirait significativement le code source et le rendrait
        | peu lisible. Pour éviter cela, nous allons faire appel à une fonction, qui va exécuter une requête HTTP asynchrone, autrement dit "AJAX"
        |_                                                                                                                                                          */
            // Prend en paramètres l'URL cible et la fonction callback appelée en cas de succès
            function ajaxGet(url, callback) {
                var req = new XMLHttpRequest();
                req.open("GET", url);
                req.addEventListener("load", function () {
                    if (req.status >= 200 && req.status < 400) {
                        // Appelle la fonction callback en lui passant la réponse de la requête
                        callback(req.responseText);
                    } else {
                        console.error(req.status + " " + req.statusText + " " + url);
                    }
                });
                req.addEventListener("error", function () {
                    console.error("Erreur réseau avec l'URL " + url);
                });
                req.send(null);
            }
/*
            |: La fonction "ajaxGet" permet d'exécuter une requête HTTP asynchrone. Elle prend en paramètres l'URL cible et la fonction appelée en cas de succès
            | de la requête.
            |: Le terme "callback" utilisé ici comme nom du second paramètre est souvent employé pour désigner une fonction appelée ultérieurement, en réaction 
            | à un certain événement.
            |: Cette fonction est dite générique : elle n'est pas spécifique à un contexte ou des données particuliers, et peut être utilisée dans tout programme
            | JavaScript qui a besoin d'effectuer des appels AJAX.
            |: Le code de lancement d'un appel AJAX est considérablement simplifié : il suffit de créer la fonction qui gère le résultat puis d'appeler {ajaxGet}:
                                                                                                                                                                    */
                function afficher(reponse) {
                    console.log(reponse);
                }

                ajaxGet("http://localhost/javascript-web-srv/data/langages.txt", afficher);

/*          |: On peut même utiliser une fonction anonyme pour afficher le résultat de la requête.
                                                                                                                                                                    */
                ajaxGet("http://localhost/javascript-web-srv/data/langages.txt", function (reponse) {
                console.log(reponse);
                });

/*          |: Afin d'éviter de dupliquer la fonction {ajaxGet} sur plusieurs fichiers, nous pouvons creer un fichier externe "ajax.jx" que l'on incluera dans
            | chaque fichier ayant le besoin d'appeler la fonction
            |
            |   !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            |   !!   Le fichier "ajax.js" doit toujours être inclus dans la page web AVANT les autres fichiers Js qui utilisent les fonctions qu'il contient   !!
            |   !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            |_______________________________________________________________________________________________________________________________________________________|                                                                                                                                                   
    ___________________________
    |:::::::::::::::::::::::::|
    |:: APPELS AJAX ET JSON ::|_____________________________________________________________________________________________________________________________________
    |___                                                                                                                                                            | 
        |: Le format de données JSON (JavaScript Object Notation) constitue le standard actuel pour les échanges de données sur le Web, notamment avec AJAX. 
        |: Il s'agit d'une syntaxe pour décrire des informations structurées sous une forme proche des objets JavaScript.
        |: Parce que transmettre des informations sous forme d'un fichier texte se révèle vite limité lorsque ces informations sont structurées on emploie souvent 
        | le format 'JSON'  pour échanger des données entre programmes.
        |______________________________________________
        ||:::::::::::::::::::::::::::::::::::::::::::||
        ||: GESTION DU FORMAT 'JSON' PAR JAVASCRIPT :||_____________________________________________________________________________________________________________|
        ||__                                                                                                                                                        |         
            |: La fonction {'JSON.parse'} permet de transformer une chaîne de caractères conforme au format 'JSON' en un objet JavaScript. 
            |: La fonction {'JSON.stringify'} joue le rôle inverse : elle transforme un objet JavaScript en chaîne de caractères conforme au format 'JSON'. 
                                                                                                                                                                    */
                var avion = {
                    marque: "Airbus",
                    couleur: "A320"
                };
                // Transforme l'objet JavaScript en chaîne de caractères JSON
                var texteAvion = JSON.stringify(avion);     // {"marque":"Airbus","couleur":"A320"} 
                JSON.parse(texteAvion);                     // Transforme la chaîne de caractères JSON en objet JavaScript
/*
            |: Ces fonctions permettent aussi de gérer les tableaux d'objets JSON.
                                                                                                                                                                    */
                var avions = [
                    {
                        marque: "Airbus",
                        couleur: "A320"
                    },
                    {
                        marque: "Airbus",
                        couleur: "A380"
                    }
                ];
                // Transforme le tableau d'objets JS en chaîne de caractères JSON
                var texteAvions = JSON.stringify(avions);   // [{"marque":"Airbus","couleur":"A320"},{"marque":"Airbus","couleur":"A380"}]
                JSON.parse(texteAvions);                    // Transforme la chaîne de caractères JSON en tableaux d'objets JavaScript
/*          |_______________________________________________________________________________________________________________________________________________________|
        ______________________________________________________
        ||::::::::::::::::::::::::::::::::::::::::::::::::::||
        ||: RECUPERER DES DONNEES 'JSON' DEPUIS UN SERVEUR :||______________________________________________________________________________________________________
        ||__                                                                                                                                                        |         
            |: La technique utilisée pour récupérer des données 'JSON' est la même que pour un fichier texte, et nous allons pouvoir réutiliser notre fonction 
            | générique {ajaxGet}. Seul le traitement de la réponse reçue diffère pour s'adapter au format JSON.    
                                                                                                                                                                    */
                ajaxGet("http://localhost/javascript-web-srv/data/films.json", function (reponse) {
                    // Transforme la réponse en tableau d'objets JavaScript
                    var films = JSON.parse(reponse);
                    // Affiche le titre de chaque film
                    films.forEach(function (film) {
                        console.log(film.titre);
                    })
                });                                                     
/*          |_______________________________________________________________________________________________________________________________________________________|

    ______________________________________
    |::::::::::::::::::::::::::::::::::::|
    |:: ENVOYER DES DONNEES AU SERVEUR ::|__________________________________________________________________________________________________________________________
    |___                                                                                                                                                            |         
        |: L'envoi d'informations à un serveur s'effectue grâce à une requête {HTTPPOST} contenant les données à envoyer. Il existe deux techniques d'envoi:
        |___
            |: Intégrer les données directement dans la requête HTTP d'envoi. C'est de cette manière que fonctionne la soumission d'un formulaire HTML.
            |: Transmettre les données au format JSON.
                                                                                                                                                                    */
                // Création d'un objet FormData
                var identite = new FormData();
                // Ajout d'informations dans l'objet
                identite.append("login", "Bob");
                identite.append("password", "azerty");
                // Création et configuration d'une requête HTTP POST vers le fichier post_form.php
                var req = new XMLHttpRequest();
                req.open("POST", "http://localhost/javascript-web-srv/post_form.php");
                // Envoi de la requête en y incluant l'objet
                req.send(identite);
/*
            |: L'intérêt principal de l'objet [FormData] est de simplifier la soumission d'un formulaire avec AJAX:
                                                                                                                                                                    */
                var form = document.querySelector("form");
                // Gestion de la soumission du formulaire
                form.addEventListener("submit", function (e) {
                    e.preventDefault();
                    // Récupération des champs du formulaire dans l'objet FormData
                    var data = new FormData(form);
                    // Envoi des données du formulaire au serveur sous forme [nomElementForm1] => valeur, [nomElementForm2] => valeur, etc..
                    // La fonction callback est ici vide
                    ajaxPost("http://localhost/javascript-web-srv/post_form.php", data, function () {});
                });      
/*          |_______________________________________________________________________________________________________________________________________________________|

    _____________________________________________
    |:::::::::::::::::::::::::::::::::::::::::::|
    |:: ECRIRE UNE FONCTION D"ENVOI GENERIQUE ::|___________________________________________________________________________________________________________________
    |___                                                                                                                                                            |         
        |: Nous allons définir une fonction générique nommée "ajaxPost" que nous pourrons réutiliser à chaque nouvel envoi de données.
        |: Nous ajoutons un paramètre qui indiquera si l'envoi concerne des données au format JSON, en cas d'utilisation dans une API Web.
                                                                                                                                                                    */
            // Prend en paramètres l'URL cible, la donnée à envoyer et la fonction callback appelée en cas de succès
            // Le paramètre 'isJson' permet d'indiquer si l'envoi concerne des données JSON, Js permet d'appeler une fonction sans en définir tous ses paramètres.
            function ajaxPost(url, data, callback, isJson) {
                var req = new XMLHttpRequest();
                req.open("POST", url);
                req.addEventListener("load", function () {
                    if (req.status >= 200 && req.status < 400) {
                        // Appelle la fonction callback en lui passant la réponse de la requête
                        callback(req.responseText);
                    } else {
                        console.error(req.status + " " + req.statusText + " " + url);
                    }
                });
                req.addEventListener("error", function () {
                    console.error("Erreur réseau avec l'URL " + url);
                });
                if (isJson) {
                    // Définit le contenu de la requête comme étant du JSON
                    req.setRequestHeader("Content-Type", "application/json");
                    // Transforme la donnée du format JSON vers le format texte avant l'envoi
                    data = JSON.stringify(data);
                }
                req.send(data);
}

                

                

/* ##################################################################################################################################################################
/* ##################################0################################   SYNTAXES JAVASCRIPT   ######################################################################
/* ##################################################################################################################################################################
     _______________________________________________________________________________________________________________________________________________________________
    |                                                                                                                                                               |
    |: chaineDeCaractère.lenght  => Le fait d'utiliser un point (.) entre la chaîne de caractères et le mot clé "length" s'appelle la ["notation pointée"]
    |: L'opération de création d'un objet à partir d'une classe s'appelle ["l'instanciation"].
    |: Le mode de relation entre objets et prototypes JavaScript est appelé ["délégation"] : L'objet délègue une partie de son fonctionnement à son prototype.
    |: Une ["fonction anonyme"] est une fonction appelée au moment de l'appel et qui ne peut ainsi plus être utilisée ailleurs dans le programme
    |: 
