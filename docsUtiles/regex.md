UTILISER LES EXPRESSIONS RÉGULIÈRES
===================================
##### L'expression doit être contenue entre 2 délimiteurs (Ex:'#'):
	#mot recherché# options
##### Caractères spéciaux devant être échappés par '\\' en PCRE (sauf s'il sont entre crochets):
	# ! ^ $ () [] {} ?+* . \ | 
	[-a-z] | [a-z-] Le signe '-' doit se trouver en début ou fin de crochet
	[\[\]] Si un des caractères '[]' doit être recherché, il doit être aussi échappé

Rechercher des caractères
-------------------------
code                       | Caractéristiques
:--:                       | :--------------: 
__.__                      | N'importe quel caractère
__abc__ ou __(abc)__       | La chaîne contient "abc"
__a\|b__                   | Contient "a" ou "b"
__[abc]__                  | La chaîne contient soit "a", soit "b", soit "c"
__[^abc]__                 | Ne contient pas l'un des caractères
__[a-z]__                  | La chaîne contient n'importe quelle lettre minuscule de l'alphabet
__[a-zA-Z]__               | Contient n'importe quelle lettre minuscule ou majuscule de l'alphabet
__[0-9]__                  | La chaine contient un chiffre (ou \d)
--  --  --  --  --   --   -| --   --   --   --   --   --   --   --   
__[=_e_=]__                | Contient "e" ou "é" ou "è" ou "ê" ou "ë"
__[[:punct:]]__            | Caractères de ponctuation ( @ & $ % # !? /\\ ;.,<> ~ " '{}()[] \|\`\_- +\*=)
--  --  --  --  --   --   -| --   --   --   --   --   --   --   --   
__\s__ (__\S__)            | Contient (pas) un espace
__\d__ (__\D__)            | Contient (pas) un chiffre décimal
__\w__ (__\W__)            | Contient (pas) un caractère de mot (A-Za-z0-9\_)
__\u__ _(perl)_ ou __\U__  | Contient un caractère en majuscule
__\l__ _(perl)_ ou __\L__  | Contient un caractère en minuscule
__\t__                     | Contient une tabulation 
__\n__                     | Saut de ligne
__\r__                     | Retour chariot

Outils de recherche:
--------------------
code              | Caractéristiques
:--:              | :--------------: 
__a{3}__          | Recherche "aaa" (3\* le caractère "a")
__a{1,3}__        | Contient [1-3] fois a ("a","aa","aaa")
__a{2,}__         | Contient au moins 2 fois "a"
--  --  --  --  --| --   --   --   --   --   --   --   --   
__?__             | Rechercher [0-1] occurrences de l'expression qui le précède.
__+__             | Rechercher [1+] occurrences de l'expression qui le précède.
__*__             | Rechercher [0+] occurrences de l'expression qui le précède.
--  --  --  --  --| --   --   --   --   --   --   --   --   
__a\*+__          | Autant de fois que possible, sans donner de retour
__a\*?__          | Aussi peu que possible, étendu si besoin
--  --  --  --  --| --   --   --   --   --   --   --   --   
__\b__ ou __\B__  | L'expression se situe au début ou fin d'un mot
__^a__            | La ligne commence par "a" (Doit être placé au début du regex)
__a$__            | La ligne se termine par l'expression indiqué, le "$" doit se trouver en dernière lettre (ici "a")
--  --  --  --  --| --   --   --   --   --   --   --   --   
__b(.)b\1__       | "bébé", "bobo", "bibi" etc..  Le \1 correspondant au même caractère que (.)

_Le "\\" indique que le caractère suivant doit être recherché en tant que tel. Par exemple, "\\." permet de rechercher un point_
   
Options:
--------
code | Caractéristiques
:--: | :--------------:
__i__ | Ne fait pas attention à la casse
__s__ | Le '.' indique absolument tous les caractères (même les sauts de ligne (\n))

Utiliser les variables crées par les parenthèses:
-------------------------------------------------
code | Caractéristiques
:--: | :--------------:
($1)($2)($3($4)) | Les expressions placées entre parenthèses peuvent réutilisées lors du remplacement du regex
$0 | Correspond à l'ensemble du regex
(?:_regex_) | Avec '?:' en début de parenthèse, elle n'est pas capturante, donc ne __génère pas de variable__

 
EXEMPLES:
---------
code              | Expression recherchée
:--:              | :-------------------: 
 __a\\.c__  | a.c  
 __a.+c__   | a \| 1(+) caractère(s) \| c  
 __a.\*c__  | a \| 0(+) caractère(s) \| c  
 __a.c__    | a \| 1 caractère       \| c
__b(a)b\1__			| "_baba_"
