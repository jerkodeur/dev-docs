/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
/* ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||   INTRODUCTION A JQUERY   |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
    |: jQuery est une bibliothèque (c'est-à-dire un ensemble de codes prêts à l'emploi) conçue pour simplifier l'écriture de codes JavaScript et AJAX.
    |: jQuery s'exécute côté client, Dans la plupart des cas, il n'y aura aucun échange avec un serveur et donc quasiment aucun délai entre le début et la fin de 
    | l'exécution du code jQuery. En général les temps d'exécution sont vraiment très courts.
    |: jQuery permet de manipuler les éléments mis en place en HTML (textes, images, liens, vidéos, etc.) et mis en forme en CSS (position, taille, couleur, etc.)
    |  en utilisant des instructions simples qui donnent accès aux immenses possibilités de JavaScript et d'AJAX.

     -------------------
    ..... AVANTAGES .....
     -------------------
        |: Toutes les instructions jQuery utilisées fonctionneront dans tous les navigateurs disponibles.
        |: La documentation officielle est très fournie et de grande qualité.
        |: La communauté qui gravite autour de jQuery est en perpétuelle expansion et elle fournit un support de qualité.
        |: De nombreux acteurs de premier plan du Web (Microsoft, Google, Amazon, Twitter, Mozilla, etc.) utilisent jQuery.
        |: Une foultitude de plugins est disponible afin d'augmenter les possibilités de base de jQuery.
     

     ----------------------
    ..... INSTALLATION .....
     ----------------------
        |: jQuery est une bibliothèque JavaScript. En d'autres termes, un fichier d'extension '.js'. Pour l'utiliser dans une page HTML, il vous suffit 
        | d'y faire référence en utilisant une balise <script>, en fonction de l'utilisation recherchée :


        ... UTILISATION LOCALE ...
         ------------------------
            |: La meilleure technique pour développer du code jQuery sur son ordinateur consiste à télécharger le fichier jquery.js, à le placer dans un 
    		| dossier de son disque dur et à faire référence à ce fichier dans une balise <script>.
            |: Rendez-vous sur le site de jQuery (https://code.jquery.com/) et téléchargez la dernière version en date en cliquant sur le lien jquery.js
        	
        	   <script src="jquery.js"></script>    // Reférence au fichier jquery dans notre page HTML
    		
    		|: Une version minimisée est aussi disponible. D'une taille inférieure, les espaces, tabulations, et commentaires y ont été supprimés, et les noms 
    		| des variables et des fonctions ont été raccourcis.
    		|: En règle générale, vous utiliserez le fichier jquery.js en développement et le fichier jquery.min.js en production, c'est-à-dire lorsque votre 
    		| code aura été testé, débogué et placé sur le Web.

        ... UTILISATION EN LIGNE ...
         --------------------------
            |: Le plus simple consiste à faire référence au fichier jquery.js sur un CDN (Content Delivery Network).
            |: L'utilisation d'un CDN est intéressante en production, c'est-à-dire lorsque votre code jQuery a été testé et est hébergé sur un serveur Web. 
            |: En effet, en faisant référence à un fichier externe à votre site, vous n'entamez pas sa bande passante. D'autre part, étant donné que les CDN 
            | ont une grande bande passante, ils sont très réactifs. 

				<script src="http://code.jquery.com/jquery.js"></script>									   // Version en ligne complète
        		<script src="http://code.jquery.com/jquery.min.js"></script>								  // Version en ligne minimisée
        		<script src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.7.2.js"></script>			      // Version jQuery spécifique complète
        		<script src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.7.2.min.js"></script>		       // Version jQuery spécifique minimisée


	 ------------------
    ..... SYNTAXES .....
     ------------------
        |: FONCTION jQuery == jQuery() == $()	// Point d'entrée de la bibliothèque jQuery
        |: METHODES jQuery == $(sélecteur).méthode (paramètres)	
        |: OBJET jQuery == Entité retournée par la fonction jQuery, représente un ensemble de zéro, un ou plusieurs éléments issus du document.


     ------------------------------------------
    ..... ATTENDRE LA DISPONIBILITE DU DOM .....
     ------------------------------------------
        |: Le langage jQuery est utilisé pour manipuler (en lecture et en écriture) le DOM, c'est-à-dire l'arborescence du document.
        |: Imaginez que ces manipulations commencent alors que l'arbre n'a pas encore été entièrement obtenu. 
        |: Cette situation erratique pourrait désorganiser l'affichage, produire des erreurs, voire même… bloquer le navigateur !
        |: Pour éviter d'en arriver là, vous devez attendre que l'arbre soit complet. En jQuery, cela se traduit par le code suivant :
        |                                                                                                                                                               */
            jQuery(document).ready(function() {
            // Ici, le DOM est entièrement défini
            });

            // Cette écriture peut se simplifier en remplaçant jQuery par son alias, $, ce qui donne :
            $(document).ready(function() {
            });

            // Enfin, (document).ready peut être omis pour arriver au code suivant :
            $(function() {
            });
/*      
        |: Ces trois instructions sont strictement équivalentes.   
        |: Si vous avez fait référence à une feuille de styles entre les balises <head> et </head>, l'instruction $(function() { s'assure également que la 
        | feuille de styles est chargée. Vous pouvez donc l'interroger et la manipuler comme bon vous semble.

     ---------------------
    ..... HELLO WORLD .....
     ---------------------
        |: Il est une tradition bien ancrée lorsque l'on écrit un cours sur un langage de programmation : le premier exemple affiche un texte sur l'écran : 
        |: « Hello world » !
        |                                                                                                                                                               */
            // Code HTML:   <span id="texteJQ"></span>
            //              <script src="jquery.js"></script>
            //              <script src="jq-hello-world.js"></script></body></html>

            $(function() {  // On attend la disponibilité du DOM
              $('#texteJQ').html('Hello world. Ce texte est affiché par jQuery.'); // Ajoute le texte de la méthode html() au span ayant pour ID "texteJQ"
            });


/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||   SELECTIONNER DES ELEMENTS DU DOM  ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
    |: jQuery repose sur une seule et unique fonction : jQuery(), ou son alias, $(). Cette fonction accepte un ou plusieurs paramètres et retourne un objet que 
    | nous appellerons « objet jQuery ». Les paramètres peuvent être d'un des types suivants :
    
        |: Une fonction, qui sera exécutée dès que le DOM est disponible. Cette technique est très largement utilisée par tous les programmeurs jQuery.
        |: Un sélecteur CSS : l'élément (ou les éléments) qui correspondent au sélecteur sont retournés
        |: Un élément HTML, un document ou l'objet window : un objet jQuery correspondant à cet élément est retourné.
        |: Une (ou plusieurs) balise(s) HTML : un objet jQuery correspondant à cette (ces) balise(s) est retourné.
        
    |: jQuery est fortement lié à trois autres langages : HTML, CSS et JavaScript.
    |: Voici quelques exemples pour sélectionner des éléments du DOM en jQuery                                                                                          */

        $('a').length       //  retourne le nombre de liens hypertextes contenus dans la page.
        $('ul.bleu')[3]     //  retourne la quatrième balise <ul> de classe bleu.
        $('li:first')       //  Premier élément 'li'
        $('p:even')         //  Éléments 'p' pairs
/*
     ---------------------------------------------
    ..... PARCOURIR LES ELEMENTS SELECTIONNES .....
     ---------------------------------------------
        |: Nous allons utiliser la méthode {each()}, qui passe en revue les éléments sélectionnés par une requête jQuery et permet de les modifier en utilisant des 
        | instructions JavaScript. La syntaxe de la méthode {each()} est la suivante :                                                                                  */

            $('img').each(function(index){                  // "index" est une variable JavaScript qui représente la position de l'élément dans la sélection
              this.src = "Chemin de l'image.jpg";           // This correspond à img[index(0,1,2 etc..)]
            });
/*
     ---------------------------------
    ..... CONVERSION JQUERY / DOM .....
     ---------------------------------

        ... CONVERSION D'UN OBJET DU DOM EN UN OBJET JQUERY ...
         -----------------------------------------------------
            |: Le simple fait d'utiliser un sélecteur jQuery convertit un élément (ou un ensemble d'éléments) du DOM en un objet jQuery.                                */

                $('div')        // retourne un objet jQuery qui donne accès à toutes les balises <div> du document
                $("div")[0];    // sélectionne la première balise <div> du document
/*   
        ... CONVERSION D'UNE VARIABLE JAVASCRIPT EN UN OBJET JQUERY ...
         -------------------------------------------------------------                                                                                                                                   
            |: jQuery et JavaScript font bon ménage ensemble, et il est fréquent d'entremêler des instructions jQuery et des instructions JavaScript.                   */

            var variableJS = 'un simple texte';
            var variableJQ = $(variableJS); // convertit une variable JavaScript en un objet jQuery en « l'enveloppant » avec l'alias '$()'
/*     
        ... CONVERSION D'UN OBJET JQUERY EN UN ELEMENT DU DOM ...
         -------------------------------------------------------                                                                                                                                         
            |: Il est parfois nécessaire d'appliquer un traitement JavaScript à un objet jQuery. 
            |: Étant donné que seules les méthodes jQuery peuvent être appliquées aux objets jQuery, une conversion jQuery vers DOM est alors nécessaire.
            |: Pour cela, vous appliquerez la méthode {.get()} à un sélecteur jQuery.
                                                                                                                                                                        */
                var spans = $('span').get();    // Convertit les objets <span> jQuery en un tableau JavaScript
                spans[0].innerHTML              // Permet de sélectionner la première balise <span> du document.

/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
/* ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||  MODIFIER LE CONTENU D'UN ELEMENT  ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
    ..... GETTERS ET SETTERS .....
     ----------------------------
        |: Plutôt que de différencier les méthodes chargées de lire (ces méthodes sont dites getters) et de modifier (ces méthodes sont dites setters) 
        | les valeurs HTML ou CSS, les concepteurs de jQuery ont choisi de leur donner le même nom.                                                                     */

            $('h2').css('font-size');               // aucune valeur n'est précisée. La première méthode est donc un getter
            var taille = $('h2').css('font-size');  // On peut mémoriser la valeur de la propriété dans une variable JavaScript
            $('h2').css('font-size','2em');         // la valeur « 2em » est précisée dans les paramètres de la méthode css(). voici donc un setter
/*
        |: Si aucune valeur n'est précisée dans les arguments de la méthode, elle retourne la valeur qui correspond au premier argument.
        |: Si une valeur est précisée dans les arguments de la méthode, le premier argument de la méthode est initialisé avec cette valeur. 
        | S'il n'existe pas, il est créé. S'il existe, il est modifié en conséquence.

        ... UTILISATIONS DES SETTERS ...
         ------------------------------                                                                                                                                        
            |: Les méthodes setters peuvent se présenter sous trois formes différentes :                                                                                */

                $('#logo').attr('src','logo.gif');      // affecter la valeur « logo.gif » à l'attribut {src} de l'élément d'identifiant "logo".
                $('#logo').attr({src: 'logo.gif', alt: 'Logo de la société', width: '200px'}); // crée ou modifie plusieurs attributs dans l'élément d'identifiant logo.
                $("a").attr({target:function(){…}});    // utilise une fonction JavaScript pour créer ou modifier l'attribut {target} des balises <a> du document
/*
     ------------------------------------
    ..... ACCEDER AUX PROPRIETES CSS .....
     ------------------------------------
        |: Pour créer ou modifier les propriétés CSS des balises HTML, l'on utilise la méthode jQuery {css()}                                                           */

             var taille = $('.class').css('font-size');
             $('.class').css('font-size', '40px');
/*
     ------------------------------------------
    ..... TRAVAILLER AVEC L'ATTRIBUT CLASS .....
     ------------------------------------------
        |: Comme tout programmeur (ou apprenti programmeur) Web, vous utilisez certainement l'attribut class pour donner la même apparence à plusieurs balises HTML.
        |: Par exemple, pour sélectionner tous les éléments de classe 'vert', vous utiliserez le sélecteur jQuery $('.vert')
        |: Trois méthodes consacrées aux classes vont vous permettre d'aller plus loin :

        ... AJOUTER OU SUPPRIMER DES CLASSES ...
         --------------------------------------                                                                                                                                        
            |=> {addClass()} ajoute une classe dans les éléments sélectionnés
            |=> {removeClass()} supprime (si elle existe) une classe des éléments sélectionnés
            |=> {toggleClass()} accomplit deux actions : si la classe n'existe pas dans les éléments sélectionnés, elle y est ajoutée. Sinon, elle est supprimée.        */

                $('#id').addClass('vert grand');                        // Ajoute les classes 'vert' et 'grand' à l'id
                $('#id').removeClass('vert')                            // Supprime la classe 'vert' de l'id
                $('#id').toggleClass('vert').toggleClass('grand');      // Ajoute la classe 'vert' et enlève la classe 'grand' à l'id
/*
        ... TESTER L'EXISTENCE DE CLASSES ...
         -----------------------------------                                                                                                                                        
            |: La méthode {hasClass()} permet de tester si la sélection est d'une certaine classe (renvoi 'true' ou 'false').                                                                      */

                if ($('#id').hasClass('rouge'))
                  alert('le span #id est de classe rouge');
                else
                  alert("le span #id n'est pas de classe rouge");
/*
            |: Si vous devez tester l'appartenance à plusieurs classes, vous utiliserez la méthode {is()}.                                                              */

                if ($('#id').is('.grand.rouge'))
                  alert('le span #id est de classe grand et rouge');
                else
                  alert("le span #id n'est pas de classe grand et/ou rouge");
/*
     -----------------------------------------
    ..... TRAVAILLER AVEC LES FORMULAIRES .....
     -----------------------------------------
        |: Vous utiliserez la méthode val() pour tester/modifier la valeur des zones de texte, boutons radio, cases à cocher, listes déroulantes 
        | et zones de liste contenues dans un document HTML                                                                                                             */

             $('#IdZoneDeTexte').val()                      // Lit le nom de la zone de texte
             $('#IdZoneDeTexte').val('Michel')              // Insère ou modifie le nom de la zone de texte avec 'Michel'
             $(':radio#Id:checked').val()                   // Lit l'état du bouton radio Id. Renvoie true si le bouton est sélectionné, sinon false.
             $(':radio').val(['Id'])                        // Sélectionne le bouton 'Id'
             $('#IdListeDeroulante').val()                  // Lit l'élément sélectionné dans la liste déroulante.
             $('#IdListeDeroulante').val('valeurListe')     // Sélectionne 'valeurListe' dans la liste déroulante.
/*
     ----------------------------------------------------------------
    ..... TRAVAILLER AVEC LES VALEURS STOCKEES DANS LES ELEMENTS .....
     ----------------------------------------------------------------
        |: Lorsque vous définissez un sélecteur jQuery, vous obtenez un objet jQuery qui fait référence à zéro, un ou plusieurs éléments. Si ces éléments contiennent 
        | des valeurs textuelles, vous pouvez les lire ou les modifier en utilisant deux méthodes jQuery :


        ... text() ...
         ------------                                                                                                                                       
            |: Retourne/modifie la valeur textuelle stockée dans l'élément.                                                                                             */

                var premier = $('p:first').text();                      // Récupère la valeur du premier paragraphe

                $('p').text(function(index,actuel) {                    // index = n° de la valeur en cours, actuel = valeur en cours de traitement.
                  alert('Paragraphe ' + (index+1) + ' : '+actuel);      // Parcours chaque paragraphe et en retourne son index et sa valeur.
                });
/*
        ... html() ...
         ------------                                                                                                                                     
            |: Retourne/modifie le code HTML stocké dans l'élément.                                                                                                     */

                alert($('p').html());   //  Affiche le code HTML du premier élément (ex: <a href"">lien</a>)

                $('p').html(function(index,actuel) { 
                    alert('Paragraphe ' + (index+1) + ' : '+actuel);    // Affiche individuellement le code HTML de chaque élément.
                });
/*
                !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                !!!  Contrairement à la méthode {text()}, {html()} ne balaie pas tous les éléments, mais se contente de lire le premier !!!
                !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
/* ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||   POSITION ET TAILLE DES ELEMENTS  ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
    |: Pour gérer la position des éléments dans une page HTML, vous utiliserez les méthodes suivantes :

        |=> offset() : position absolue d'un élément dans la page (getter et setter) 
        |=> position() : position relative d'un élément dans son parent (getter seulement).

    |: Les positions retournées par ces méthodes ont deux composantes : l'abscisse 'left' et l'ordonnée 'top'.

     --------------------------------------------------------
    ..... CONNAITRE LA POSITION DES ELEMENTS SUR LA PAGE .....
     --------------------------------------------------------
        |=> offset().left et offset().top pour connaître la position absolue d'un élément.
        |=> position().left et position().top pour connaître la position d'un élément dans son parent.                                                                   */

            var posAbsolue=$('#parent').offset();       // Renvoi la position par rapport au début de la page
            var posRelative=$('#enfant').position();    // Renvoi la position par rapport à la position de l'élément parent
            $('span').text('Parent : x=' + posAbsolue.left + ', y=' + posAbsolue.top + ' Enfant : x=' + posRelative.left + ', y=' + posRelative.top);
/*
     -------------------------------------------
    ..... MODIFIER LA POSITION DES ELEMENTS .....
     -------------------------------------------
        |: Nous avons vu que la méthode offset() pouvait être utilisée en tant que setter, et donc pouvait modifier les coordonnées absolues d'un élément. 
        | Pour cela, il suffit d'indiquer les nouvelles coordonnées dans les paramètres de la méthode {offset()}.                                                       */

            var posEnfant = $('#enfant').offset();
            posEnfant.top = 100;
            posEnfant.left = 100;
            $('#enfant').offset(posEnfant);
/*
     -----------------------------------------------
    ..... CONNAITRE LES DIMENSIONS DES ELEMENTS .....
     -----------------------------------------------
        |=> width() : largeur de l'élément, de la fenêtre ou du document, sans inclure les marges (padding, border et margin). Cette méthode peut être utilisée 
        | comme getter (pour connaître la largeur d'un élément) ou comme setter (pour modifier la largeur d'un élément).
        |=> innerWidth() : largeur de l'élément, en incluant le padding gauche et droit.
        |=> outerWidth() : largeur de l'élément, en incluant le padding gauche et droit et border.
        |=> outerWidth(true) : largeur de l'élément, en incluant padding gauche et droit, border et margin gauche et droit.
        |=> height() : hauteur de l'élément, de la fenêtre ou du document, sans inclure les marges (padding, border et margin). Cette méthode peut être utilisée 
        | comme getter (pour connaître la hauteur d'un élément) ou comme setter (pour modifier la hauteur d'un élément).
        |=> innerHeight() : hauteur de l'élément, en incluant le padding supérieur et inférieur.
        |=> outerHeight() : hauteur de l'élément, en incluant border et padding supérieur et inférieur.
        |=> outerHeight(true) : hauteur de l'élément, en incluant border, padding supérieur et inférieur et margin supérieur et inférieur.                              */

            var dimensions = 'Largeur=' + $('div').width() + 'Hauteur=' +$('div').height(); // Affiche la longueur sans inclure aucune marge.
/*
     ----------------------------------------------
    ..... MODIFIER LES DIMENSIONS DES ELEMENTS .....
     ----------------------------------------------
        |: Vous utiliserez pour cela les méthodes width() et height() en tant que setters                                                                               */

            $('div').width('400px');
            $('div').height('200px');


/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||   ASSOCIER DES DONNEES AUX BALISES  ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
    |: Utilisée en setter, la méthode jQuery $.data() permet d'associer une ou plusieurs données textuelles à n'importe quel élément du DOM.
    |: Il peut s'agir de données complémentaires quelconques que vous retrouverez par la suite en utilisant la méthode $.data() en getter. 
    |: Rassurez-vous, ces données ne surchargent pas la mémoire de l'ordinateur : elles sont détruites lorsque l'élément auquel elles sont liées est retiré du DOM 
    | ou lorsque la page Web change.                                                                                                                                    */

        //  Associer une donnée unique à un élément
        $.data(div, 'nom', nom1: 'Jéjé');   // 'nom' est le nom de la « variable » dans laquelle sera stockée la donnée, nom_don est le nom associé à la donnée
        var val1 = $.data(div, 'nom').nom1; // On récupère la donnée associée à l'élément 'div'

        // Associer plusieurs données à un élément
        var div = $('div');
        $.data(div, 'newMembre', {prenom: Jéjé, age: 41, sexe: homme}); // Ne pas oublier les accolades lorsqu'il y a plusieurs données à mémoriser !
        var prenom = $.data(div, 'newMembre').prenom;
        var age = $.data(div, 'newMembre').age;
        var sexe = $.data(div, 'newMembre').sexe;
        $('div').text(`Prenom: ${prenom}, age: ${age}, sexe: ${sexe}`);  //  On modifie le texte du div avec les nouvelles données
/*
     -----------------------------------------
    ..... SUPPRIMER DES DONNEES ASSOCIEES .....
     -----------------------------------------
                                                                                                                                                                        */
        $.removeData(div, 'newMembre');  


/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
/* ||||||||||||||||||||||||||||||||||||||||||||||||||||||||  INSERER ET MODIFIER DES ELEMENTS DU DOM ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
    ..... INSERER DU CONTENU .....
     ----------------------------
        |=> append()     =   Insère du contenu à la fin de la sélection ;
        |=> prepend()    =   Insère du contenu au début de la sélection ;
        |=> before()     =   Insère du contenu avant la sélection ;
        |=> after()      =   Insère du contenu après la sélection.                                                                                                       */

            $('hr').after('<br><br>');  // Insertion de deux sauts de ligne après chaque balise <hr>
/*
     ------------------------------
    ..... INSERER DES ELEMENTS .....
     ------------------------------
        |=> elementAInserer.appendTo(cible)      =   Insère un élément à la fin de la cible ;
        |=> elementAInserer.prependTo(cible)     =   Insère un élément au début de la cible ;
        |=> elementAInserer.insertBefore(cible)  =   Insère un élément avant la cible ;
        |=> elementAInserer.insertAfter(cible)   =   Insère un élément après la cible.                                                                                   */

            $('<li>Deuxième élément bis</li>').insertAfter($('li=>nth-child(2)')); // Ajout d'un élément de liste à puces après le deuxième élément
/*
     -----------------------------
    ..... DEPLACER DU CONTENU .....
     -----------------------------
        |=> 'sel' sélectionne l'élément avant ou après lequel doit se faire le déplacement et 'depl' représente l'élément à déplacer=>
        |=> $('sel').append(depl);
        |=> $('sel').prepend(depl);
        |=> $('sel').before(depl);
        |=> $('sel').after(depl);                                                                                                                                        */

            $('#deux').after($('#un')); // Deplace l'ID 'un' après l'ID 'deux'
/*        
     --------------------------------
    ..... REMPLACER DES ELEMENTS .....
     --------------------------------                                                                                                                                   */

        $('hr').replaceWith('<br>'); // Remplace la balise <hr> par un saut de ligne, fonctionne pour les balises orphelines. 

        $('h2').each(function(){    // Pour des balises ouvrantes et fermantes, la syntaxe est la suivante !
          var elemH2 = $(this);
          elemH2.replaceWith('<h3>' + elemH2.text() + '</h3>');
        });
/*
     --------------------------------
    ..... DUPLIQUER DES ELEMENTS .....
     --------------------------------
        |: Si vous voulez non pas déplacer, mais dupliquer un élément existant, vous appliquerez la méthode {clone()} à un sélecteur et, selon l'effet recherché,
        | vous la ferez suivre de la méthode {appendTo()}, {prependTo()}, {insertBefore()} ou {insertAfter()}                                                       
        |: Si l'élément dupliqué a un ou plusieurs descendants, ils font eux aussi partie du clonage.                                                                   */

            $('#deux').clone().insertBefore($('#un'));  // On duplique le paragraphe d'identifiant '#deux' et on l'insère avant l'identifiant 'un'
/*
     --------------------------------
    ..... ENTOURER DES ELEMENTS .....
     --------------------------------
        |: La méthode {wrap()} permet d'entourer un élément par un ou plusieurs autres éléments créés à la volée.                                                   
        |: Ces éléments peuvent être du code HTML, un sélecteur, un élément jQuery ou un élément du DOM. Ils encadrent les éléments à entourer.                         */

            $('sel').wrap('elwrap');    // 'sel' est un sélecteur jQuery et 'elwrap' représente le (les) éléments (ouvrants et fermants) à insérer autour de la sélection
            $('li').wrap('<i></i>');    // Transforme le texte des balises <li> en italique
            $('li').wrap('<font color="red"><b><i><u></u></i></b></font>'); // Transforme le même texte en rouge, gras, italique et souligné
/*
        ... wrapInner() ...
         -----------------                                                                                                                                       
            |: Pour entourer le contenu d'un élément par un autre élément créé à la volée                                                                               */

                // Balisage d'origine =         <p>Le texte du paragraphe</p>
                    $('p').wrapInner('<i></i>');
                // Balisage après wrapInner() = <p><i>Le texte du paragraphe</i></p>
/*
        ... wrapAll() ...
         ---------------                                                                                                                                       
            |: Entoure l'ensemble des éléments selectionnés                                                                                                             */

            // HTML:
                // <p>Paragraphe 1</p>
                // <p>Paragraphe 2</p>
                    $('p').wrapAll('<div></div>');

            // RESULTAT:
                // <div>
                // <p>Paragraphe 1</p>
                // <p>Paragraphe 2</p>
                // </div>
/*
     --------------------------------
    ..... SUPPRIMER DES ELEMENTS .....
     --------------------------------
        |: La méthode {remove()} permet de supprimer les éléments retournés par un sélecteur jQuery.                                                                    */

            $('h2').remove();   // Supprime tous les titres <h2> du document
            $('p').remove(':contains("quelconque")');   // supprime tous les paragraphes qui contiennent le mot « quelconque »
            $('li:nth-child(2)').remove();  // Supprime la troisième puce dans l'unique liste à puces du document

/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
/* ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||   GESTION DES EVENEMENTS   ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
    |: Quel que soit l'événement à gérer, vous devrez mettre en place une méthode qui ressemblera à ceci :                                                              */

        $(sel).mge(function() { // 'mge' comme méthode de gestion des évènements
          // Une ou plusieurs instructions jQuery pour gérer l'événement lorsqu'il se produit 
        }
/*
     ---------------------------
    ..... EVENEMENTS SOURIS .....
     ---------------------------
        |=> click()                      ==>     Clic gauche
        |=> dblclick()                   ==>     Double-clic
        |=> mousedown()                  ==>     Appui sur le bouton gauche ou droit de la souris alors que le pointeur est au-dessus de l'élément
        |=> mouseenter() ou mouseover()  ==>     Début de survol de l'élément
        |=> mouseleave() ou mouseout()   ==>     Arrêt de survol de l'élément
        |=> mousemove()                  ==>     Déplacement du pointeur au-dessus de l'élément
        |=> mouseup()                    ==>     Relâchement du bouton gauche ou droit alors que le pointeur est au-dessus de l'élément
        |=> scroll()                     ==>     Utilisation de la roulette alors que le pointeur se trouve au-dessus d'un élément concerné par ce type d'événement     */

            $(window).click(function() {
                console.log('Vous avez cliqué dans un endroit de la page');
            });
/*
        ... WHICH ET TYPE ...
         -------------------                                                                                                                                       
            |: Dans certains cas particuliers, il peut être nécessaire de savoir quel bouton de la souris a été pressé. Pour cela, vous ferez appel à la méthode 
            | {event.which}, qui renvoie l'une des valeurs suivantes :

                |=> 1 ==>    bouton gauche pressé
                |=> 2 ==>    bouton central pressé
                |=> 3 ==>    bouton droit pressé

            |: Pour connaître le type d'événement qui a été levé par la procédure de gestion événementielle, vous utiliserez la méthode {event.type}.
            |: La valeur renvoyée pourra être "click", "dblclick", "mousedown", "mouseenter", "mouseover", "mouseleave", "mouseout", "mousemove" ou "mouseup".          */

                $('#target').mousedown(function(e){
                  $('sel').html('Événement : ' + e.type + '. Bouton pressé : ' +  e.which );
                });
/*
     ----------------------------
    ..... EVENEMENTS CLAVIER .....
     ----------------------------
        |=> keydown()                    ==>     Appui sur une touche du clavier
        |=> keyup()                      ==>     Relâchement d'une touche du clavier préalablement enfoncée
        |=> keypress()                   ==>     Maintien d'une touche du clavier enfoncée                                                                               */

            $('#target').keydown(function(){
              $('sel').css('background-color', 'green');
            });
/*
        |: Il peut être nécessaire de savoir quelle touche du clavier a été pressée. Pour cela, vous ferez appel à la méthode {event.which} qui renvoie précisément
        | cette information. Pour connaître le type d'événement qui a été levé par la procédure de gestion événementielle, vous utiliserez la méthode {event.type}. 
        |: La valeur renvoyée pourra être keydown, keypress ou keyup, en fonction de la méthode événementielle utilisée.                                                */

            $('#saisie').keypress(function(e) {
              $('sel').text(e.which);  // Renvoi le code de la touche saisie
            });                                                                                                                                                         
/*
        |: Si vous voulez obtenir non pas le code du caractère mais le caractère lui-même, assurez-vous que vous utilisez la méthode {keypress()} :                     */

            $('#saisie').keypress(function(e) {
                var c = String.fromCharCode(e.which);
                $(sel).text(c); // Renvoi la touche pressée
/*
     -------------------------------
    ..... EVENEMENTS D'ELEMENTS .....
     -------------------------------
        |=> focus()                      ==>     Réception de focus par l'élément
        |=> blur()                       ==>     Perte de focus par l'élément
        |=> focusin()                    ==>     Réception de focus par l'élément ou un de ses enfants
        |=> focusout()                   ==>     Perte de focus par l'élément ou un de ses enfants
        |=> resize()                     ==>     Redimensionnement d'un élément
        |=> change()                     ==>     Lorsqu'un élément change                                                                                                */
            
            $(window).resize(function() {   
              var taille = 'Taille de la fenêtre : ' + $(window).width() + 'px X ' + $(window).height() + 'px';
              $('sel').text(taille);    // Affiche la largeur et la hauteur de la page en fonction de son redimensionnement 
            });

            $('select').change(function() { // Lorsqu'un élément de la liste déroulante est sélectionné
                $('sel').text('Vous venez de sélectionner "' + $(this).val() +'".');    // Affichage de la valeur sélectionnée
            });
/*
     -------------------------------
    ..... EVENEMENTS DE PAGES .....
     -------------------------------
        |: Appliquée à l'élément window, la méthode événementielle {load()} permet de tester le complet chargement d'une page, en incluant les textes, 
        | images et autres objets qui la composent. Quant à la méthode {unload()}, elle est déclenchée lorsque l'internaute a demandé un changement de page.            */

            $(window).load(function() {
                alert('La page est entièrement chargée');
            });
            $(window).unload(function() {
                alert('Vous avez demandé à changer de page');
            });

            $('#image1').load(function() {                  // Lorsque l'image est entièrement chargée
              alert(this.width + ' x ' + this.height);
            }
/*
     ----------------------------------
    ..... EVENEMENTS PERSONNALISES .....
     ----------------------------------
        |: Pour convertir une méthode événementielle traditionnelle quelconque en son équivalent on() : il suffit de spécifier le nom de l'événement dans le premier 
        | argument de la méthode, entre apostrophes, et de spécifier la fonction événementielle dans le deuxième argument.                                              */

            $(sel).on('click', function() {…});

            // Va créer une ombre sous les boutons du div 'droite' lors du passage de la souris, celle-ci disparaîtra lorsque la souris quittera la zone du bouton
            $('#droite').on('mouseover', 'button', function() {
              $(this).css('box-shadow','2px 2px 5px 0px black');
              $(this).mouseout( function () {
                $(this).css('box-shadow', 'none');
              });
/*
        |: La méthode on() a plusieurs avantages. Elle permet de :

            |: Limiter l'écriture en associant une même méthode événementielle à plusieurs éléments
            |: Relier plusieurs méthodes événementielles à un élément en une seule instruction
            |: Désactiver une méthode événementielle précédemment attachée avec la méthode on();
            |: Relier plusieurs méthodes événementielles entre elles

        ... UNE MÉTHODE POUR GÉRER PLUSIEURS ÉVÉNEMENTS ...
         -------------------------------------------------                                                                                                                                       
            |: Il suffit de passer les méthodes événementielles dans le premier argument de la méthode on() en les mettant entre apostrophes et en les séparant par 
            | une espace.                                                                                                                                               */

                $('img').on('mouseenter mousemove', function() { … });
/*
        ... PLUSIEURS MÉTHODES EN UNE SEULE INSTRUCTION ...
         -------------------------------------------------                                                                                                                                       
            |: Permet d'associer plusieurs événements et plusieurs fonctions de traitement aux éléments sélectionnés par un sélecteur jQuery:                           */

                $('img.grand').on({mouseenter:traitement1, mousemove:traitement2});
/*
        ... DÉSACTIVER UNE MÉTHODE DE GESTION ÉVÉNEMENTIELLE ...
         ------------------------------------------------------                                                                                                         */

                $('boutonActiver').on('click', function() {
                  $('#image').click(traitement);                // Active une fonction lors du click sur l'image
                });
                $('boutonDesactiver').on('click', function() {
                  $('#image').off('click', traitement);         // Désactive la fonction "traitement" lors du clic sur l'image
                });
/*
        ... ÉTIQUETER PLUSIEURS MÉTHODES ÉVÉNEMENTIELLES ...
         ------------------------------------------------------
            |: si un ou plusieurs plugins sont utilisés, il se peut qu'ils définissent leurs propres méthodes événementielles et qu'ils les attachent aux mêmes 
            | sélecteurs que vous. Si vous utilisez la méthode off() en précisant un nom d'événement, toutes les méthodes événementielles correspondant à cet événement
            | seront supprimées : les vôtres, mais aussi celles qui sont peut-être définies dans les plugins que vous utilisez. Du coup, ces plugins risquent de ne 
            | plus fonctionner !
            |: Deux possibilités s'offrent à vous:                                                                                                                      */

                // En définissant une fonction de traitement à l'évènement
                $('img').on('mouseenter', actions);
                $('img').off('mouseenter', actions);                    // on désactive la fonction de l'évènement

                // En affectant un "espace de nom" à vos méthodes événementielles (.nomDeLevenement)
                $('img').on('mouseleave.depanPC', function() {});
                $('img').off('mouseleave.depanPC');
                $('img').off('mouseenter.depanPC mouseleave.depanPC');  // Supprime plusieurs méthodes événementielles
                $('img').off('.depanPC');                               // supprime toutes les méthodes événementielles rattachées un espace de noms
                $('img').off('click.depanPC.depanMAC');                 // supprime tous les évènements liés au click et aux espaces de nom spécifiés
                $('a').off('.depanPC.depanMAC');                        // Supprime tous les évènements liés au espaces de noms spécifiés
/*
     ---------------------------------------
    ..... GESTION ÉVÉNEMENTIELLE UNIQUE .....
     ---------------------------------------
        |: Il est parfois nécessaire de réagir à un événement la première fois qu'il se produit, puis de l'ignorer par la suite.                                        */

             $('img').one('click', function() {
              $('sel').text('Vous avez cliqué sur l\'image. Désormais, je resterai insensible aux clics.').fadeIn(1000).fadeOut(5000);
            });
/*
     -----------------------------------
    ..... DÉCLENCHER UN ÉVÈNEMENT .....
     -----------------------------------
        |: Dans certains cas, il peut être nécessaire de déclencher un événement sans le concours de l'utilisateur, en utilisant une instruction jQuery.                */
             
            $('img').click(function(event,texte) {
              if (texte == undefined)
                texte = "par vous";
              $('#message').text('L\'image a été cliquée ' + texte).fadeIn(1000).fadeOut(1000);
            });
            $('button').click(function() {
              $('img').trigger('click', 'par jQuery');  // Déclenche l'évenement 'click' de l'image lors du clic sur le bouton et modifie le texte de la fonction
            });
/*
        |: Il est parfois nécessaire de passer plusieurs arguments à la méthode trigger(). Dans ce cas, mettez-les entre crochets, comme ceci :                         */

            $(sel).trigger('ev', ['param1', 'param2', 'param3', 'etc.']);
/*
            !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            !!!  Seuls les événements suivants sont déclenchables: blur, change , click, dblclick, error, focus, keydown, keypress, keyup, select et submit  !!
            !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
/*
     --------------------------------------------
    ..... CRÉER DES ÉVÉNEMENTS PERSONNALISÉS .....
     --------------------------------------------
        |: La méthode on() peut également être utilisée pour définir des méthodes événementielles personnalisées                                                        */

            $('#bonjour').on('bonjour_jquery', function() {     // Défintion de l'évènement personnalisé 'bonjour_jquery'
              alert('jQuery vous dit bonjour !');
            });

            $('#bonjour').click(function() {
              $('#bonjour').trigger('bonjour_jquery');      // Déclencle l'évènement 'bonjour_jquery' lors du click sur la zone '#bonjour'
            }); 
/*
        |: L'on peut passer des paramètres à une procédure événementielle personnalisée:                                                                                */
            
            $('#bonjour').on('bonjour_jquery', function(event, param) {
              alert(param + ', jQuery vous dit bonjour !');
            });
            $('#bonjour').click(function() {
              $('#bonjour').trigger('bonjour_jquery', 'Michel');
            }); 
/*
     ---------------------------------
    ..... DÉLÉGATION D'ÉVÉNEMENTS .....
     ---------------------------------
        |: jQuery est fréquemment utilisé pour ajouter des éléments dans une page Web. Plutôt que d'attacher un gestionnaire d'événements à chacun des éléments 
        | insérés, vous pouvez définir un écouteur d'événements sur le parent. Pour cela, vous devez utiliser la méthode on() en lui transmettant trois arguments :     

            |=> 'del' est l'élément sur lequel les enfants seront écoutés 
            |=> 'ev' est le nom de l'événement concerné 
            |=> 'sel' est un sélecteur qui indique le type des enfants écoutés 
            |=> 'function()' est la fonction à exécuter lorsque l'événementevest détecté.                                                                                */

            $('#del').on('ev', 'sel', function () {
              //Une ou plusieurs instructions
            });

            $('#master').on('click', 'div', function(){
                $(this).after('<div>Ce &lt;div&gt; a les mêmes caractéristiques que son parent</div>');
/*
        |: Pour supprimer une délégation d'événements, vous utiliserez la méthode off():                                                                                */

            $('#suppr').on('click', function() {
              $('#master').off('click','div');
            });

/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
/* ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||  ANIMATIONS ET EFFETS  ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
    ..... APPARITION ET DISPARITION .....
     -----------------------------------                                                                                                                                */

            $('div').hide(1000);                        // Cache les <div> avec un fondu d'une durée de une seconde
            $('div').show('fast');                      // Affiche les <divs> avec un fondu d'une durée 200 millisecondes
            $('div').show('slow');                      // Affiche les <divs> avec un fondu d'une durée 600 millisecondes
/*
        |: Vous pouvez modifier les valeurs par défaut de 'slow' et 'fast', ainsi que de créer de nouvelles valeurs prédéfinies:                                        */

            jQuery.fx.speeds.slow = 1500;               // Redéfinit la valeur 'slow' et lui affecte une durée de 1500 millisecondes
            jQuery.fx.speeds['super-slow'] = 3000;      // Ajoute une valeur 'super-slow' et lui affecte une durée de 3000 millisecondes
/*
        |: En précisant un deuxième paramètre dans les méthodes show() et hide(), vous pouvez choisir un modèle de progression de l'animation.                          */

            show('slow','linear');                      // Vitesse de progression constante de l'animation
            hide(1000,'swing');                         // Vitesse par défaut
/*
        ... APPARITION/DISPARITION EN CASCADE ...
         ---------------------------------------                                                                                                                                       
            |: Il est possible d'utiliser une fonction de rappel dans les méthodes show() et hide(). Elle appelée lorsque l'affichage / la dissimulation est terminé.   */

                $('img').hide('slow', function message() {
                    alert('Les images sont maintenant cachées');
                });
    /*
            |: En faisant référence au premier élément lors de l'exécution de la fonction hide(), et en définissant une fonction de rappel qui fait référence aux
            | autres éléments avec la méthode next(), il est possible de faire disparaître un à un les éléments concernés par le sélecteur. Un peu comme dans un 
            | jeu de dominos : le premier domino s'écroule, entraînant dans sa chute le deuxième domino, qui entraîne dans sa chute le troisième, et ainsi de suite.    */

                $('#cache').click(function() {
                  $('img').first().hide('slow', function hideNextOne() {    // Lorsque la première image a complètement disparue ...
                    $(this).next('img').hide('slow', hideNextOne);          // On cache la suivante en rappelant la fonction de rappel et ainsi de suite... 
                  });    
                });
/*
     ------------------------
    ..... FONDU ENCHAÎNÉ .....
     ------------------------
        |: Les méthodes fadeIn() et fadeOut() sont complémentaires des méthodes hide() et show(). Elles agissent toutes deux progressivement sur l'opacité d'un élément.
        | La première affiche l'élément et la deuxième fait disparaître l'élément, la vitesse par défaut est de 400 millisecondes.                                      */

            $('sel').fadeIn();              $('sel').fadeIn('fast');            $('sel').fadeIn(1200,'linear');
            $('sel').fadeOut();             $('sel').fadeOut('slow');           $('sel').fadeOut(1000,'swing');
/*
        ... MODIFICATION DE L'OPACITÉ ...
         -------------------------------                                                                                                                                       
            |: Pour modifier progressivement l'opacité d'un élément sans aller jusqu'à sa disparition ou sa complète opacité, vous utiliserez la méthode fadeTo()       */

                $('sel').fadeTo(durée, opacité, function() {} );    
                // 'durée' est la durée de l'animation. Indiquez un entier (millisecondes) ou une chaîne (fast, normal ou slow (200, 400 ou 600 millisecondes)) ;
                // 'opacité' est un nombre décimal compris entre 0 (transparent) et 1 (opaque).
                // Si nécessaire, vous pouvez définir une fonction de rappel, qui sera appelée à la fin de l'animation ('function')
/*                
     --------------------------------------
    ..... DÉPLIER/REPLIER DES ÉLÉMENTS .....
     --------------------------------------
        |=> 'slideDown()' augmente la hauteur et la largeur de la sélection jusqu'à atteindre la dimension « native » de chaque élément
        |=> 'slideUp()' diminue la hauteur et la largeur de la sélection jusqu'à ce qu'elle disparaisse ;
        |=> 'slideToggle()' inverse l'animation : si les objets sélectionnés ont une taille nulle, leur hauteur et leur largeur sont augmentées jusqu'à ce qu'ils 
        | atteignent leur dimension. Par contre, s'ils ont une taille non nulle, leur hauteur et leur largeur sont diminuées jusqu'à ce qu'ils disparaissent.

     ----------------------------------------------
    ..... DÉFINIR UN DÉLAI AVANT UNE ANIMATION .....
     ----------------------------------------------                                                                                                                     */

            $('#afficheMessage').click(function() {
                 $('#message').fadeIn('slow').delay(2000).fadeOut('slow');  // le message apparaît pendant 2 secondes puis disparaît ...
               });
/*
     ---------------------------------------------
    ..... DÉFINIR UNE ANIMATION PERSONNALISÉE .....
     ---------------------------------------------                                                                                                                      */

            $('sel').animate({ prop1: val1, prop2: val2, etc. }, durée, modèle, function() {
              //Une ou plusieurs instructions
            });
/*
        |=> 'sel' est un sélecteur jQuery.
        |=> 'prop1', 'prop2' sont des propriétés CSS et 'val1', 'val2' les valeurs associées. Une valeur numérique sera interprétée comme un nombre de pixels. 
        | Une valeur du type « +=50 » demandera d'ajouter progressivement 50 pixels à la propriété. Vous pouvez également utiliser show, hide et toggle 
        | pour respectivement afficher, dissimuler et inverser la propriété.
        |=> 'durée' est la durée de l'animation (entier en millisecondes ou chaîne [fast], [normal] ou [slow]).
        |=> 'modèle' est le modèle de progression de l'animation (swing, linear ou un modèle issu d'un plugin).
        |=> 'function()' contient une ou plusieurs instructions qui seront exécutées lorsque l'animation sera terminée.
        |<!> 
        |   Dans cette syntaxe, 'durée', 'modèle' et la fonction sont facultatifs. Si vous ne spécifiez qu'un ou plusieurs couples propriétés/valeurs CSS, 
        |   l'animation durera 400 millisecondes. 
        |<!>                                                                                                                                                            */

            $('sel').animate({ prop1: val1, prop2: val2 etc. }, {options}); 
/*
        |=> 'sel' est un sélecteur jQuery ;
        |=> 'prop1', 'prop2' sont des propriétés CSS et 'val1', 'val2' les valeurs associées ;
        |=> 'options' est un objet qui peut contenir une ou plusieurs des propriétés suivantes :

            |=> [duration] : durée de l'animation (entier en millisecondes ou chaîne fast, normal ou slow) ;
            |=> [easing]   : modèle de progression de l'animation (swing, linear ou un modèle issu d'un plugin) ;
            |=> [complete] : fonction appelée lorsque l'animation est terminée ;
            |=> [step]     : fonction appelée à chaque étape de l'animation ;
            |=> [queue]    : valeur booléenne qui indique si l'animation doit (true) ou ne doit pas (false) être placée dans une file d'attente réservée aux animations. 
            |  Si la valeur 'false' est attribuée à cette propriété, l'animation démarre immédiatement. Dans le cas contraire, elle est en attente de déclenchement.
            |=> [specialEasing] : un ou plusieurs couples propriétés CSS/modèle de progression.

     ----------------------------------------
    ..... RÉPÉTER UNE ANIMATION SANS FIN .....
     ----------------------------------------                                                                                                                           */

        function bis() {
           $('#balle').animate({left: '+=200'}, 'slow')
                      .animate({top: '+=200'}, 'slow')
                      .animate({left: '-=200'}, 'slow')
                      .animate({top: '-=200'}, 'slow', bis);    // Grâce à le fonction de rappel 'bis', l'animation reprends du début et fait donc une boucle
         };
/*                                                                                                                                                                       
     --------------------------------------------
    ..... ARRÊTER ET REPRENDRE UNE ANIMATION .....
     --------------------------------------------
        |: La méthode stop() permet d'arrêter une animation. Selon les paramètres qui lui sont passés, cette méthode peut supprimer ou non les animations en attente 
        | et/ou afficher l'état final de l'animation. Voici sa syntaxe :                                                                                                */

            $('sel').stop(efface, fin);
/*
        |=> 'efface' : valeur booléenne qui indique si les animations en attente d'exécution doivent être (true) ou non (false) supprimées de la file d'attente
        |=> 'fin'    : valeur booléenne qui indique si l'animation doit prendre son état final (true) ou non (false). Si ce paramètre n'est pas spécifié, 
        |  l'animation reste dans l'état où elle se trouvait au moment de son arrêt.                                                                                    */

            $('img').stop(false, true);
            
/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
/* ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||  FILES D'ATTENTE ET TIMER  ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
    ..... LES FILES D'ATTENTE JQUERY .....
     ------------------------------------
        |: Les animations jQuery sont asynchrones, c'est-à-dire qu'elles s'exécutent en tâche de fond
        |: Si vous enchaînez deux animations en utilisant une instruction du type suivant :                                                                             */

            $('sel').animate(…).animate(…);
/*
        |: … alors la deuxième animation commence quand la première est terminée. Il s'agit là du comportement par défaut de jQuery : les animations sont placées dans 
        | une file d'attente et s'enchaînent, les unes à la suite des autres.
        |:  Si vous souhaitez que plusieurs animations s'exécutent en même temps, il suffit d'indiquer les propriétés CSS à modifier dans le premier argument 
        | de la méthode animate() :                                                                                                                                     */

            $('sel').animate({ prop1: val1, prop2: val2, } …);
/*
        |: Si vous voulez exécuter plusieurs animations en même temps, chacune ayant une vitesse d'exécution qui lui est propre, vous devez utiliser une technique 
        | particulière, basée sur l'utilisation de la propriété [queue] dans la deuxième syntaxe de la méthode animate() :                                              */

            $('sel').animate({ prop1: val1, prop2: val2, prop3: val3, etc. }, {queue: …});
/*
        |: Voyons chaque possibilité en code:                                                                                                                           */

            $('#enchainer').click( function() {
                $('img').animate({ 'border-width': '100'}, 1500 ).animate({ 'width': '-=100'}, 1500); // Enchaîne deux animations
            });

            $('#nePasEnchainer').click( function() {
              $('img').animate({ 'border-width': '100'}, { queue: false, duration: 1500 })  // Comme [queue] est défini sur 'false', les deux animations sont simultanées
                      .animate({ 'width': '-=100'}, 2000);                                  // ...  Mais ne dure pas aussi longtemps ...
            });

            $('#executerEnMemeTemps').click( function() {                               // Les deux animations sont simultanées, et dure aussi longtemps
              $('img').animate({ 'border-width': '100', 'width': '-=100' }, 1500);
            });
/*                                                                                                                                                                       
        ... ÉTAT DE LA FILE D'ATTENTE ...
         -------------------------------                                                                                                                                       
            |: Quand plusieurs animations s'enchaînent sur un même objet, elles sont placées dans une file d'attente, prêtes à s'exécuter les unes après les autres. 
            | Pour connaître l'état de la file d'attente pour un objet particulier, vous lui appliquerez la méthode queue() sans aucun argument.                        */

                var resultat = $('#monElement').queue();    // Retourne un tableau avec les éléments en liste d'attente
                resultat.length                             // Retourne le nombre d'animations en attente d'exécution
/*      
        ... MANIPULER LA FILE D'ATTENTE ...
         ---------------------------------
            |=>     queue()         ==>     Ajoute une animation dans la file d'attente ;
            |=>     dequeue()       ==>     Joue puis supprime une animation de la file d'attente ;
            |=>     clearQueue()    ==>     Vide la file d'attente.                                                                                                     */

                    $('#anim1').click( function() {
                      $('img1').toggle(5000)                                        // Fait apparaître ou disparaître l'image 1
                               .queue(function() {                                  // On définit des animations en file d'attente
                                 // Des animations ...
                               });
                    });

                    $('#annuler').click( function() {
                        $('img').clearQueue();                                      // On annule les animations de la liste d'attente des images
                    });

                    $('#remplacer').click( function() {
                      $('img2').queue(function() {
                                   // Des animations ...
                                   $(this).dequeue();                               // Joue immédiatement les animations puis les suppriment de la liste d'attente
                                   });
                    });
/*                                                                                                                                                                       
     ----------------------------------
    ..... METTRE EN PLACE UN TIMER .....
     ----------------------------------                                                                                                                                 */
        
            function nom() {
              // Une ou plusieurs instructions JavaScript et/ou jQuery
            }
            setInterval(nom, période);  // Nom de la fonction à répéter, temps entre deux exécutions consécutives des instructions contenues dans la fonction.
/*
        ... Une horloge élémentaire ...
         -----------------------------                                                                                                                                       
            |: Nous allons réaliser une horloge numérique élémentaire en utilisant la fonction JavaScript setInterval(). L'heure sera mise à jour toutes les secondes   */

                function Horloge() {
                    var laDate = new Date();
                    var h = laDate.getHours() + ":" + laDate.getMinutes() + ":" + laDate.getSeconds();
                    $('#heure').text(h);
                    setInterval(Horloge, 1000);
                  }
                     // Répète la fonction 'horloge' toutes les secondes

/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||  LES CHAÎNES DE CARACTÈRES  ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
    ..... MANIPULER DES CHAÎNES DE CARACTÈRES .....
     ---------------------------------------------                                                                                                                      */

        $.trim(leTexte);                // Supprime les espaces au début et à la fin d'une chaîne.
        $('div:contains("texte")')      // Sélectionne le ou les 'div' qui contient(nent) un mot ou un texte particulier
/*
        ... REMPLACER UN TEXTE ...
         ------------------------                                                                                                                                       
            |: Il est possible de remplacer un texte par un autre ou un élément par un autre en utilisant la méthode replaceWith()                                      */

                // 'contenu'  est une chaîne HTML, un élément du DOM ou un objet jQuery qui remplacera le ou les éléments sélectionnés.
                $('sel').replaceWith('contenu');

                // <img id="un" src="girafe.jpg">
                $('#un').replaceWith('<img id="unbis" src="chat.jpg">');
/*
                !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                !!   replaceWith() remplace sans supprimer si on lui fournit du code HTML. Par contre,  !!
                !!            il supprime et remplace si on lui fournit un sélecteur jQuery.            !!
                !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||  LES FORMULAIRES  ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
    ..... FOCUS D'UN ÉLÉMENT .....
     ----------------------------
        |: Si vous êtes amenés à créer une page de login, vos utilisateurs apprécieront que la première zone de texte (celle du nom) soit sélectionnée par défaut.      */

            $('#user').focus();                             // Donne le focus à un élément

            $('input, textarea').focus( function() {        // Si un élement 'input' ou 'textarea' à le focus ... 
                //              .blur( function() {         //  " "   " " "    " "    ""   " " "   perd le focus ... 
                // Des instructions
            });
/*
     ------------------------------
    ..... VIDER UN FORMULAIRE .....
     ------------------------------                                                                                                                                     */

            function efface_formulaire () {
              $(':input')                                       // Sélectionne toutes les balises <input> du document ...
               .not(':button, :submit, :reset, :hidden')        // ... en dehors des éléments button, submit, reset et hidden
               .val('')                                         // Les valeurs de ces éléments (si elles existent) sont supprimées :
               .prop('checked', false)                          // Supprime l'attribut 'checked'
               .prop('selected', false);                        // Supprime l'attribut 'selected'
            }

/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||  LES TABLEAUX  |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
    ..... LA FONCTION $.grep() .....
     ------------------------------
        |: Cette fonction trouve les éléments du tableau qui satisfont un ou plusieurs critères.                                                                         */

            var tableau2 = $.grep(tableau, function(élément, index) { … }, inv); 
            //'inv' indique si le critère doit (true) ou ne doit pas (false ou n'est pas spécifié) être inversé.

            tableau2 = $.grep(tableau, function(el,ind) {   
                    return (ind > 4);                               // ne sélectionne que les éléments dont l'index est supérieur à 5
                //  return (el != 'Mathis' && el !='Yanis');        // Seuls les éléments différents de « Mathis » et « Yanis » sont conservés   
                }//, true);                                         // avec 'true' ce serait les éléments d'indice inférieur à 5 qui seraient affichés                   

            $('#deux').text(tableau2.join(', '));                   // joint les données stockées dans le tableau en les séparant par une virgule
/*                                                                                                                                                                       
     -----------------------------
    ..... LA FONCTION $.map() .....
     -----------------------------
        |: Cette fonction recopie en partie ou en totalité un tableau en lui appliquant un traitement, une présentation                                                 */

            tableau2 = $.map(tableau, function(el,ind) {
                    return (el.toUpperCase());                      // Retourne les données du tableau en majuscule
                //  return (ind + ' : ' + el.toLowerCase());        // Retourne l'index de chaque donnée du tableau suivi de ':' et de son élément en minuscule
/*                                                                                                                                                                       
     ---------------------------------
    ..... LA FONCTION $.inArray() .....
     ---------------------------------
        |: Vous recherchez un élément dans un tableau ? La fonction inArray() est là pour vous...                                                                       */

            var position = $.inArray('valeur', tableau, index)

            var tableau = ['Luca', 'Emma', 'Mathis', 'Jade', 'Léa', 'Enzo', 'Chloé'];
            
            $.inArray('Emma',tableau)       // 1
            $.inArray('Léa',tableau)        // 4
            $.inArray('Luca',tableau, 5)    // -1 car Luca se trouve en position 0 et non après la position 5
            $.inArray('Alfred',tableau)     // -1 car Alfred n'est pas dans le tableau
/*                                                                                                                                                                       
     -------------------------------
    ..... LA FONCTION $.merge() .....
     -------------------------------
        |: Il est parfois nécessaire de regrouper les informations qui se trouvent dans deux tableaux. La fonction merge() est là pour vous faciliter la tâche          */

            $.merge(tableau1, tableau2);
/*
        |: 'tableau1' et 'tableau2' sont les deux tableaux à regrouper. Lorsque la fonction a été exécutée, le premier tableau contient ses propres données 
        | et celles du deuxième tableau.

/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||   AJAX  ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
    |: AJAX est l'acronyme d'Asynchronous JavaScript and XML. 
    | Le langage JavaScript est utilisé pour demander des données au serveur. Ces données lui sont retournées de façon asynchrone sous une forme XML.
    |: Pour que les échanges AJAX fonctionnent, vous devrez utiliser un serveur, deux possibilités s'offrent à vous:

        |=> Installer un serveur Web sur votre ordinateur.
        |=> Poster vos pages sur un serveur Web distant.    

     ----------------------------
    ..... CHARGER UN FICHIER .....
     ----------------------------
                                                                                                                                                                        */
            $('sel').load('nom_page', function() {
                //une ou plusieurs instructions
            });

            // <div id="premier"></div>
            $('#majPremier').click(function() {
                $('#premier').load('maj1.html', function() {    // Va remplacer le div 'premier' par le texte contenu entre les balises <body> du document 'maj1.html'
                    alert('La première zone a été mise à jour');
                });
            });
/*                                                                                                                                                                       
     ----------------------------------------
    ..... CHARGER UNE PARTIE D'UN FICHER .....
     ----------------------------------------
        |: En modifiant légèrement la syntaxe de la méthodeload(), il est possible d'utiliser une partie seulement des données auxquelles donne accès la requête AJAX
                                                                                                                                                                            */
            $('sel').load('nom_page sel2', function() {
              //Une ou plusieurs instructions
            });

            // Ve remplacer le div 'premier' par le contenu de l'id 'modif1' du document 'maj.html'
            $('#majPremier').click(function() {
              $('#premier').load('maj.html #modif1', function() {
                alert('La première zone a été mise à jour');
              });
            });
/*                                                                                                                                                                       
     --------------------------------------------------
    ..... PASSER DES PARAMÈTRES À UN PROGRAMME PHP .....
     --------------------------------------------------
        |: Cette technique est particulièrement adaptée si vous programmez en PHP. En utilisant jQuery pour créer des adresses URL contenant un ou plusieurs  
        | paramètres (http://site.fr/page.php?id=10&p=2), vous pourrez interroger une base de données en PHP et retourner les informations dépendant des paramètres 
        | passés dans l'URL


        ... Première forme de la méthode load() ...
         ----------------------------------------
            |: La requête utilisée est de type 'HTTP GET', c'est à dire que les données recherchées apparaissent dans l'adresse URL                                                                                                                                     
                                                                                                                                                                        */
            $('sel').load(url,param);
/*
                |=> [url] est le nom de la page PHP qui sera utilisée pour faire la mise à jour ;
                |=> [param] est une chaîne qui contient un ou plusieurs couples paramètres/valeurs (ex: 'id=5', 'p=14').
            
            // Donnera par exemple: http://site.fr/page.php?id=5&p=14


        ... deuxième forme de la méthode load() ...
         ---------------------------------------- 
        |: Il est également possible de passer un objet en deuxième argument de la méthodeload(). Par exemple, vous pourriez passer deux couples paramètres/valeurs 
        | en utilisant l'instruction suivante :                                                                                                                                      
                                                                                                                                                                        */
            $('sel').load('http://www.site.com/page.php',{ id:50, nom: 'durand'});
/*
        |! Dans ce cas, les valeurs sont passées par une requête HTTP POST (absente de l'adresse URL) et devront donc être récupérées de la sorte par le programme PHP


     ------------------------------
    ..... REQUÊTES GET ET POST .....
     ------------------------------

        ... La fonction $.get() ...
         -------------------------                                                                                                                                    
            |: En parallèle de la méthode load(), vous pouvez utiliser la fonction jQuery $.get() pour obtenir des données envoyées par le serveur en utilisant 
            | une requête HTTP GET
                                                                                                                                                                        */
                $.get(adresse, données, function() {
                    // Une ou plusieurs instructions
                });
/*
        ... La fonction $.post() ...
         --------------------------                                                                                                                                    
            |: La fonction$.post() est toute indiquée si vous voulez envoyer des données de grande taille et/ou sensibles (entendez par là qui contiennent des 
            | mots de passe ou d'autres données du même type) au serveur
                                                                                                                                                                        */
                // Exemple d'utilisation de la fonction post() pour envoyer des données saisies dans un formulaire                                                                                                                                                        
                $.post('traiteFormulaire.php', { nom: 'Pierre34', heure: '2pm', post: 'Texte récupéré dans un formulaire HTML destiné à être posté dans un forum' },
                   function(data) {
                     alert(data);   //  Affiche les données envoyées au serveur
                   });

/*
     ----------------------------------------------------------
    ..... FAIRE PATIENTER L'UTILISATEUR AVEC UNE ANIMATION .....
     ----------------------------------------------------------
        |: Certaines requêtes AJAX peuvent demander quelques secondes pour s'exécuter. Pour faire patienter la personne qui en est à l'origine, il est courant 
        | d'utiliser une image GIF animée...

            !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            !!           Si vous désirez une image différente, je vous conseille de vous rendre sur le site ajaxload.info pour obtenir une image GIF         !!
            !!                                              en parfait accord avec la charte graphique de votre site.                                        !!
            !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

        |: Pour gérer l'affichage de cette image, il suffit d'y faire référence lorsque la requête AJAX est déclenchée, puis de l'effacer lorsque l'exécution 
        | de la requête AJAX est terminée.                              
                                                                                                                                                                        */
            $('element').click(function() {
                $('div').html('<img src="http://www.mediaforma.com/sdz/jquery/ajax-loader.gif">'); // Ou l'adresse de l'image ...
                var param = // Définission des paramètres
                $('div').load('site ou récupérer les données.php',param);
            });                                                                                                                                                           
/*
     -----------------------------------------------
    ..... CHARGER UN SCRIPT ET DES DONNÉES JSON .....
     -----------------------------------------------
        
        ... Charger un script ...
         -----------------------                                                                                                                                       
            |: La fonction $.getScript() permet de charger (de façon asynchrone) puis d'exécuter un fichier JavaScript.                                         
                                                                                                                                                                        */
                // Syntaxe de base                                                                                                                                                        
                $.getScript('adresse');
                                                                                                                                                        
                // Syntaxe avec fonction de retour. Cette fonction est exécutée lorsque le code JavaScript a été chargé et exécuté 
                $.getScript('adresse', function() {
                  // Une ou plusieurs instructions
                });
/*
        ... Charger des données codées en JSON ...
         ----------------------------------------
            |: voici un exemple de données au format JSON:

                 { 
                   'menu': 'Fichier', 
                   'commande': [ 
                       {
                           'nomCde': 'Nouveau', 
                           'action':'CreateDoc'
                       }, 
                       {
                           'nomCde': 'Ouvrir', 
                           'action': 'OpenDoc'
                       }
                    ] 
                 }

            |: un fichier JSON est composé d'un ensemble de paires 'nom':'valeur' organisées de façon hiérarchique.

                |=> Les noms [menu] et [commande] se trouvent au même niveau hiérarchique.
                |=> Les noms [nomCde] et [action] sont des enfants du nom [commande].

            |: Pour bien comprendre comment accéder aux données d'un fichier codé en JSON, nous allons raisonner sur un exemple simple qui comporte quatre paires 
            | 'nom':'valeur' de même niveau :

                {
                  "nom": "Pierre Durand",
                  "age": "27",
                  "ville": "Paris",
                  "domaine": "HTML5, CSS3, JavaScript"
                }

            |: Et voici le code HTML/jQuery utilisé pour manipuler ces données :
                                                                                                                                                                            */
                $('#charger').click(function() {
                    $.getJSON('fichier.json', function(donnees) {
                        $('#r').html('<p><b>Nom</b> : ' + donnees.nom + '</p>');
                        $('#r').append('<p><b>Age</b> : ' + donnees.age + '</p>');
                        $('#r').append('<p><b>Ville</b> : ' + donnees.ville + '</p>');
                        $('#r').append('<p><b>Domaine de compétences</b> : ' + donnees.domaine + '</p>');
                    });
                });  
/*
     ------------------------------
    ..... LA FONCTION $.ajax() .....
     ------------------------------                  
        |: $.ajax() permet d'envoyer des requêtes HTTP AJAX à un serveur Web. Ce qui la différencie de ses « collègues », c'est la finesse des paramètres qui peuvent
        | lui être communiqués. Deux Syntaxes sont possibles:
                                                                                                                                                                            */
            $.ajax(adresse, {options});
            $.ajax({options});
/*
        |: … où adresse est l'adresse à laquelle la requête doit être envoyée, et options correspond à une ou plusieurs des options suivantes :
                                                                                                                                                                            
            |=> type : type de la requête, GET ou POST (GET par défaut).
            |=> url : adresse à laquelle la requête doit être envoyée.
            |=> data : données à envoyer au serveur.
            |=> dataType : type des données qui doivent être retournées par le serveur : xml, html, script, json, text.
            |=> success : fonction à appeler si la requête aboutit.
            |=> error : fonction à appeler si la requête n'aboutit pas.
            |=> timeout : délai maximum (en millisecondes) pour que la requête soit exécutée. Passé ce délai, la fonction spécifiée dans le paramètre error sera exécutée.

        |: Beaucoup d'autres options peuvent être utilisées. Pour en avoir une liste exhaustive, consultez la documentation officielle. 
        | (https://api.jquery.com/jQuery.ajax/) 
                                                                                                                                                                            */
            $('#action').click(function() {
                $.ajax({
                    type: 'GET',
                    url: 'adresse de l\'url',
                    timeout: 3000,
                    success: function(data) {
                      alert(data); },
                    error: function() {
                      alert('La requête n\'a pas abouti'); }
                });    
            });                                                                                                                                                                      

 /*
     ------------------------------------------------
    ..... ÉVÉNEMENTS ASSOCIÉS À UNE REQUÊTE AJAX .....
     ------------------------------------------------                  
        |: Cette technique permet d'exécuter du code à différentes étapes de l'exécution d'une requête AJAX. 
        |: Elle repose sur la mise en place de méthodes de gestion événementielle. Le tableau suivant donne un aperçu des méthodes utilisables : 

                |=> $(document).ajaxSend(function(ev, req, options))             ==> Requête sur le point d'être envoyée
                |=> $(document).ajaxStart(function())                            ==> Début d'exécution de la requête
                |=> $(document).ajaxStop(function())                             ==> Fin de la requête
                |=> $(document).ajaxSuccess(function(ev, req, options))          ==> La requête a abouti
                |=> $(document).ajaxComplete(function(ev, req, options))         ==> La requête est terminée
                |=> $(document).ajaxError(function(ev, req, options, erreur))    ==> La requête n'a pas abouti

            |=> [ev] représente l'événement ;
            |=> [req] représente la requête ;
            |=> [options] contient les paramètres passés à la requête ;
            |=> [erreur] est le nom de l'erreur détectée par jQuery.

        |: Voici un peu de code pour vous aider à comprendre comment utiliser ces méthodes événementielles et dans quel ordre elles sont exécutées :
                                                                                                                                                                        */
            // <div id="donnees"></div>                                                                                                                                  
            // <div id="message"></div>

            $(document).ajaxStart(function() {
                    $('#message').html('Méthode ajaxStart exécutée<br>');
                  });
                  $(document).ajaxSend(function(ev, req, options){
                    $('#message').append('Méthode ajaxSend exécutée, ');
                    $('#message').append('nom du fichier : ' + options.url + '<br>');   // = 'affiche.htm'
                  });
                  $(document).ajaxStop(function(){
                    $('#message').append('Méthode ajaxStop exécutée<br>');
                  });
                  $(document).ajaxSuccess(function(ev, req, options){
                    $('#message').append('Méthode ajaxSuccess exécutée<br>');
                  });
                  $(document).ajaxComplete(function(ev, req, options){
                    $('#message').append('Méthode ajaxComplete exécutée<br>');
                  });
                  $(document).ajaxError(function(ev, req, options, erreur){
                    $('#message').append('Méthode ajaxError exécutée, ');
                    $('#message').append('erreur : ' + erreur + '<br>');
                  });
                  $('#donnees').load('affiche.htm'); // Affiche le texte contenu dans 'affiche.htm' s'il n'y a pas d'erreur avant.
                });                                                                                                                                                                                                                                                                                                                                                                                                                   


/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
/* ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||   jQuery UI   |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
    |: jQuery UI est en quelque sorte un vaste assemblage de plugins accessibles à travers un seul fichier JavaScript.
    |: Pour avoir un aperçu des possibilités offertes par jQuery UI, rendez-vous sur le site officiel (https://jqueryui.com/demos) et testez les différentes 
    | fonctionnalités proposées.
    |: Pour utiliser cette bibliothèque, il vous suffit d'y faire référence avec une balise <script> qui pointe vers le CDN Google:

        |=> <script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/jquery-ui.min.js"></script>

     --------------------------------
    ..... EXEMPLES D'UTILISATION .....
     --------------------------------

        ... DÉPLACER ET REDIMENSIONNER DES ÉLÉMENTS ...
         ---------------------------------------------                                                                                                                                       
            |: La méthodedraggable()permet à n'importe quel élément du DOM d'être librement déplacé dans la page
                                                                                                                                                                        */
                $('img').draggable();   // Rend l'image déplacable sur la page  
/*        
        ... REDIMENSIONNEMENT ...
         -----------------------                                                                                                                                       
            |: La méthode resizable() permet de redimensionner un objet quelconque. 
            |: Bien qu'elle soit utilisable sur tous les objets du DOM, vous l'utiliserez surtout pour permettre à l'utilisateur de redimensionner des images. 
                                                                                                                                                                        */
                $('img').resizable();   // Rend l'image redimensionnable       
/*        
        ... AFFICHAGE EN ACCORDÉON ...
         ----------------------------                                                                                                                                       
            |: Imaginez un empilement de balises <div> dont le contenu d'une seule est visible à la fois et vous aurez une idée assez précise de ce que peut produire 
            | la méthode accordion(). 
                                                                                                                                                                        */
                // <div id="accordeon">
                //   <h3><a href="#">Titre du bloc 1</a></h3>
                //   <div>Contenu du bloc 1</div>
                //   <h3><a href="#">Titre du bloc 2</a></h3>
                //   <div>Contenu du bloc 2</div>
                // </div>
                $("#accordeon").accordion(); // Va afficher le contenu de chaque div puis le refermer lors du clic sur un autre div en un menu déroulant fléché        
/*        
        ... SÉLECTION DE DATE ...
         ----------------------------                                                                                                                                       
            |: La méthode datepicker() transforme une simple zone de texte <input type="text"> en un calendrier dans lequel l'utilisateur peut choisir une date. 
            | La date choisie est alors copiée dans la zone de texte.
            |: Il suffit de l'appliquer à une zone de texte quelconque, après avoir fait référence à un thème et aux bibliothèques jQuery et jQuery UI                                                                                                                                                               
                                                                                                                                                                        */
                // <head>
                // <link rel="stylesheet" href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.12/themes/base/jquery-ui.css">
                // <body>
                // Date <input type="text" id="datepicker">
                $( "#datepicker").datepicker();
/* 
            |: Et pour l'avoir en Français...       
                                                                                                                                                                        */
                $.datepicker.regional['fr'] = {
                  closeText: 'Fermer',
                  prevText: 'Précédent',
                  nextText: 'Suivant',
                  currentText: 'Aujourd\'hui',
                  monthNames: ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
                  monthNamesShort: ['Janv.','Févr.','Mars','Avril','Mai','Juin','Juil.','Août','Sept.','Oct.','Nov.','Déc.'],
                  dayNames: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
                  dayNamesShort: ['Dim.','Lun.','Mar.','Mer.','Jeu.','Ven.','Sam.'],
                  dayNamesMin: ['D','L','M','M','J','V','S'],
                  weekHeader: 'Sem.',
                  dateFormat: 'dd/mm/yy',
                  firstDay: 1,
                  isRTL: false,
                  showMonthAfterYear: false,
                  yearSuffix: ''
                };

                $.datepicker.setDefaults($.datepicker.regional['fr']);
/*
        ... DES BOÎTES DE DIALOGUE ...
         ----------------------------                                                                                                                                       
            |: La méthode dialog() permet de créer des boîtes de dialogue de bien meilleur aspect que celles affichées avec la fonction JavaScript alert(). 
            |: Voici comment la mettre en œuvre :

                |=> Créez une balise <div>
                |=> Définissez le titre de la boîte de dialogue dans son attribut [title].
                |=> Appliquez la méthode dialog() à la balise<div>.
                                                                                                                                                                        */
                $('sel').dialog();  //Ouvre une boite de dialogue
                $('sel').dialog({ autoOpen: false; }); //Crée une instance de la boîte de dialogue sans l'ouvrir
                $('sel').dialog('open'); // Ouvre la boîte de dialogue
                $('sel').dialog('close'); // Ferme la boîte de dialogue
/*  
            |: Voici quelques autres options utilisables dans les paramètres de la méthode dialog():

                |=> height, width   ==> Hauteur et largeur de la boîte de dialogue à l'ouverture.
                |=> modal           ==> Initialisé à 'true', rend la boîte de dialogue modale (Interdit l'accès à la page). La valeur par défaut est 'false'.
                |=> position        ==> Position de la boîte de dialogue sur la page (elle est centrée par défaut).
                |=> zindex          ==> Z-index de la boîte de dialogue (1000 par défaut).
                |=> buttons         ==> Un ou plusieurs boutons affichés dans la boîte de dialogue.

            |: Supposons maintenant que vous vouliez créer une boîte de dialogue modale comportant deux boutons (Oui et Non) et positionnée en (100, 100):
                                                                                                                                                                        */
                $( "#dialog" ).dialog({
                      modal: true,
                      buttons: {
                        "Oui": function() { // Lorsque l'utilisateur clique sur le 'Oui', l'arrière-plan de la page devient jaune, et la boîte de dialogue se ferme.
                          $('body').css('background', 'yellow');
                          $( this ).dialog( "close" );
                        },
                        "Non": function() { // Lorsqu'il clique sur le bouton 'Non', l'arrière-plan reste inchangé et la boîte de dialogue se ferme.
                          $( this ).dialog( "close" );
                        }
                      }
                    });   
/*
        ... AFFICHER DES ONGLETS ...
         --------------------------                                                                                                                                       
            |: En utilisant des onglets, vous pouvez afficher un grand nombre d'informations dans un espace réduit. Pour visualiser l'ensemble de ces informations, 
            | il vous suffit de basculer d'onglet en onglet.
            | Pour définir des onglets, vous devez imbriquer plusieurs <div> enfants (une par onglet) dans une <div> parent.
            | L'identifiant et l'intitulé des différents onglets sont définis dans une liste à puces insérée dans la balise <div> parent:
                                                                                                                                                                        */
                //    <div id="onglets">
                //      <ul>
                //        <li><a href="#onglet-1">Titre onglet 1</a></li>
                //        <li><a href="http://www.site.com/page2.htm">Titre onglet 2</a></li>
                //      </ul>
                //      <div id="onglet-1">
                //        <!--contenu -->
                //      </div>
                //      <div id="onglet-2">
                //        <!--contenu -->
                //      </div>
                //    </div>
                    
                    $('#onglets').tabs();
/*
        ... ANIMATION ...
         ---------------                                                                                                                                       
            |: jQuery UI étend les méthodes show(), hide() et toggle() et vous permet d'aller beaucoup plus loin
                                                                                                                                                                        */
                show(effet, options, vitesse, retour); // OU hide() ou toggle()
/*
                |=> [effet] est l'un des effets suivants: blind, clip, drop, explode, fold, puff, slide, scale, size et pulsate. 
                |=> [options] représente les options à appliquer à l'effet. Ce paramètre est optionnel.    
                |=> [retour] est une fonction de retour, exécutée lorsque l'effet est terminé. Ce paramètre est optionnel.

            |! Pour appliquer un effet à un élément sans le faire apparaître ou disparaître, passez par la méthode effect(), en utilisant la même syntaxe.

        ... ANIMATION DE COULEURS ...
         ---------------------------                                                                                                                                       
            |: Vous avez appris à animer des éléments avec la méthode animate(). jQuery UI étend cette méthode : vous pourrez désormais animer la couleur des éléments !
            |: Les propriétés sur lesquelles vous pouvez agir sont les suivantes :

                |=> backgroundColor, borderBottomColor, borderLeftColor, borderRightColor, borderTopColor, color, outlineColor
                                                                                                                                                                        */
                $('#contenu').animate({
                      backgroundColor: '#aaeae1',
                      color: 'black'
                    }, 1000 );
/*
        ... MODÈLES DE PROGRESSION ...
         ----------------------------                                                                                                                                       
            |: Avec jQuery, vous n'avez accès qu'à deux modèles de progression pour vos animations :swingetlinear. La bibliothèque jQuery UI propose un bien plus 
            | grand nombre de modèles de progression : 

                |=> easeInOutQuad       |=> easeInOutCubic      |=> easeOutCubic        |=> easeInOutCubic
                |=> easeInQuart         |=> easeOutQuart        |=> easeInOutQuart
                |=> easeInQuint         |=> easeOutQuint        |=> easeInOutQuint
                |=> easeInSine          |=> easeOutSine         |=> easeInOutSine
                |=> easeInExpo          |=> easeOutExpo         |=> easeInOutExpo
                |=> easeInCirc          |=> easeOutCirc         |=> easeInOutCirc
                |=> easeInElastic       |=> easeOutElastic      |=> easeInOutElastic
                |=> easeInBack          |=> easeOutBack         |=> easeInOutBack
                |=> easeInBounce        |=> easeOutBounce       |=> easeInOutBounc

            |: Vous pouvez les utiliser dans toutes les méthodes d'animation: show(), hide(), fadeIn(), fadeOut(), fadeTo(), slideUp(), slideDown() et animate(). 
            | Pour avoir une idée de l'effet des modèles de progression, rendez-vous sur (https://api.jqueryui.com/easings/) et cliquez sur les vignettes.
                                                                                                                                                                        */
                $('img').animate({ left: '+=200'}, 3000, 'easeOutElastic' );                                                                                                                                                        
                                                                                                                                                                        

/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||   CRÉER UN PLUGIN  |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
    ..... LE SQUELETTE D'UN PLUGIN .....
     ----------------------------------
        |: Les objets jQuery reposent tous sur le prototype 'jQuery.fn'. En d'autres termes, si vous ajoutez une nouvelle fonction JavaScript à l'objet jQuery.fn, 
        | elle devient une méthode jQuery ! Par exemple, le code suivant définit la méthode "gis()":   
                                                                                                                                                                        */
            jQuery.fn.gis = function(param1, param2, param3, ...)
            {
              // Une ou plusieurs instructions JavaScript
            }
/*
        |: Si vous sauvegardez ce code dans un fichier d'extension .js et que vous y faites référence dans une page Web à l'aide d'une balise <script>, vous pouvez 
        | directement l'utiliser en faisant quelque chose comme ceci :
                                                                                                                                                                        */
            $('p').gis(5, 'abc', 10);
/*
        ... CONFLITS ENTRE PLUSIEURS BIBLIOTHÈQUES JAVASCRIPT ...
         -------------------------------------------------------                                                                                                                                       
            |: De nombreuses bibliothèques JavaScript utilisent le signe '$' pour faire référence à une variable ou une fonction qui leur est propre. Lorsqu'une page 
            | Web utilise une bibliothèque de ce type ainsi que jQuery, il se produit un conflit qui peut entraîner des dysfonctionnements de l'une ou l'autre des 
            | bibliothèques. Heureusement, il est possible de demander à jQuery de ne pas utiliser l'alias « $ » à la place du mot « jQuery ». 
            |: Pour cela, on utilise la méthode noConflict():                                                                                                           
                                                                                                                                                                        */
                // <script src="uneBibliothequeJavaScript.js"></script>
                // <script src="jquery.js"></script>
                // <script>
                $.noConflict();
                    // Ici, vous pouvez insérer une ou plusieurs instructions
                    // Qui utilisent le signe $ en accord avec les spécifications 
                    // De la bibliothèque uneBibliothequeJavaScript.js
                // </script>
/*
            |: Cela signifie simplement qu'au lieu d'utiliser le signe '$' vous utiliserez le mot « jQuery ». Cette situation est parfaitement tolérable si vous 
            | développez de petits plugins qui ne dépassent pas une centaine de lignes de code. Mais elle devient vite insupportable au-delà. 
            |: La fonction suivante permet de convertir automatiquement tout les signes '$' par le mot 'jquery'.
                                                                                                                                                                        */
                (function($) {
                  // Entrez ici le code de votre plugin jQuery
                })(jQuery);
/*
            |: Lors de l'appel du paramètre de la fonction, la valeur « jQuery » lui est transmise. Étant donné que, dans la définition de la fonction, le paramètre a 
            | pour nom « $ », toutes les instructions situées à l'intérieur de la fonction remplaceront automatiquement le signe $ par « jQuery ». Il est donc possible 
            | de continuer à utiliser l'alias « $ » dans le plugin si vous incluez son code à l'intérieur de la fonction anonyme.

     ---------------------------------------------------
    ..... PARCOURIR LES ÉLÉMENTS ISSUS DU SÉLECTEUR .....
     ---------------------------------------------------
        |: Les méthodes jQuery sont appliquées à un sélecteur. Par exemple, l'instruction suivante applique la méthode "gis()" à toutes les balises de classe 'premier'
                                                                                                                                                                        */
            $('.premier').gis();
/*
        |: Voici le squelette de vos futurs plugins jQuery:
                                                                                                                                                                        */
            (function($) {
              $.fn.gis = function(paramètres)
              {
                this.each(function() {   // On passe en revue les différents éléments susceptibles d'être retournés par le sélecteur
                  $(this).wrap('<b><i><u></u></i></b>');    // Le texte apparaîtra en gras, italique et souligné.
                });
                Return this;            // On retourne l'objet sur lequel a été appliquée notre méthode
              };
            })(jQuery);     // On remplace tous les '$' du plugin par 'jquery'

/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
/* ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||   DÉBOGUER LE CODE JQUERY  ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
    ..... DÉBOGUER AVEC LA FONCTION alert() .....
     -------------------------------------------
        |: À tout moment, vous pouvez utiliser la fonction JavaScript alert() pour afficher une boîte de message dans laquelle apparaîtra la valeur d'une variable 
        | JavaScript. C'est la technique la plus simple pour tester ponctuellement la valeur d'une variable.
        |: Si votre code n'atteint jamais une instruction donnée, vous pouvez utiliser la fonction alert() pour savoir quelle est la dernière instruction exécutée :
                                                                                                                                                                        */
            alert('passé ici : 01');
            // Une ou plusieurs instructions
            alert('passé ici : 02');
            // Une ou plusieurs instructions
            alert('passé ici : 03');
            // Une ou plusieurs instructions
            etc.
/*
     ----------------------
    ..... TRY ET CATCH .....
     ----------------------
        |: Lorsque vous mettez au point un code particulièrement « sensible », c'est-à-dire que vous soupçonnez d'être à l'origine de bogues, vous pouvez le placer 
        | dans une structure try … catch:
                                                                                                                                                                        */
            var message='';
            try
            {
              alort('un message');
            }
            catch(err)
            {
              message='Une erreur s\'est produite.\n\n';
              message+='Description : ' + err.message + '\n\n';
              message+='Cliquez sur OK pour poursuivre.';
              alert(message)
            }
/*
     -------------------------------------
    ..... CAPTURER TOUTES LES ERREURS .....
     -------------------------------------
        |: En étendant cette technique, il est possible d'afficher une boîte de message pour chacune des erreurs qui pourraient se produire dans le code. 
        |: Voici les instructions à utiliser :
                                                                                                                                                                        */
           function gestionErreurs(err)
           {
             alert('Erreur : \n' + err);
             return true;
           }
           window.onerror = gestionErreurs;
/*
        |: Lorsqu'une erreur se produit dans le code JavaScript/jQuery, la fonction gestionErreurs() est exécutée. Une boîte de message décrivant l'erreur est 
        | alors affichée.

     -----------------------------
    ..... UTILISER LA CONSOLE .....
     -----------------------------
        |: En utilisant la console de Firefox, accessible via l'onglet Console de Firebug, vous allez pouvoir afficher des données comme avec la fonction alert(), 
        | mais sans interrompre l'exécution du code. Pour cela, vous utiliserez la fonction JavaScript log()
                                                                                                                                                                        */
            console.log("des données");
/*
     ----------------------------------------
    ..... UTILISER LE DÉBOGUEUR FIREFOX  .....
     ----------------------------------------
        |: Voir doc Firefox !


/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||   LES METHODES JQUERY  |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------
                                                                                                                                                                        */
        $('span.red').html;             // Modifie le texte de la balise 'span' et de classe 'red'
        $('p').css('color','yellow');   // Modifie la couleur des paragraphes en jaune
        $('div').hide();                // Dissimule la balise <div>
        $('div').show();                // Affiche la balise <div> cachée
        $('sel').fadeIn();              // Affiche progessivement un élément
        $('sel').fadeOut();             // Dissimule progessivement un élément
        $('a').attr('href');            // Sélectionne le contenu de l'attribut 'href' de <a>
        $('a').removeAttr('href');      // Supprime l'attribut 'href'
        $('IdZoneDeTexte').val('Jean'); // Insère ou modifie le nom de la zone de texte avec 'Jean' (formulaire)
        $('div').each(function (){});   // Parcours chaque élément et y applique une fonction 
        $('#id').focus();               // Donne le focus à l'id
        $('img:first').next('img');     // Sélectionne l'image suivante (la deuxième)
        $.trim(leTexte);                // Supprime les espaces au début et à la fin d'une chaîne
        $('div:contains("texte")')      // Sélectionne le ou les 'div' qui contient(nent) un mot ou un texte particulier


/*   
    |<!> Il est possible de << Chaîner >> des méthodes <!>                                                                                                            
                                                                                                                                                                        */
        $('.rouge').css('background','red').css('color','yellow'); // Modifie le fond en rouge et le texte en jaune pour tous les éléments de classe 'rouge'