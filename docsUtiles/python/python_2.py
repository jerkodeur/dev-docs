
** LANGAGE PYTHON **



# ================

< DEFINITION DES VARIABLES: >



# =============================
"""
Dans les langages de programmation, le choix du nom d'une variable est assez libre. Voici les règles générales.

    L'identifiant se constitue de caractères collés (pas d'espace).

    Les caractères autorisés sont essentiellement :
        les lettres majuscules et minuscules naturelles : abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ;
        les chiffres 0123456789 ;
        le caractère « _ » (appelé « sous-tiret »).

    Le premier caractère du nom d'une variable ne peut pas être un chiffre ; le nom 1erNombre est donc invalide.

    Les mots-clés du langage ne peuvent être utilisés pour nommer des variables. En Python, c'est par exemple le cas du mot for.

	Dans le cas du langage Python, les accents sont acceptés dans les identifiants.											 

	Lorsqu'on a besoin d'une nouvelle variable, on cherchera toujours à trouver un nom pour cette variable qui décrive le mieux possible ce qu'elle 
		représente. Il ne faut pas hésiter à mettre à la suite plusieurs mots pour construire un nom précis. Nous vous conseillons de nommer vos variables 
		par une suite de mots ou abréviations accolés les uns aux autres, en mettant en majuscule la première lettre de chaque mot sauf le premier. 
	
Voici quelques exemples : longueurFeuille / nbPiècesJaunes / maxHauteurPiquets
"""
< DECLARATION ET RECUPERATION DES VARIABLES: >



# ==============================================
	prenom = "jerome" |ou|  prenom = input() --> # Déclaration d'une variable de texte (Input = Entrée)
	age = "12" |ou| age = int(input()) --> # Déclaration d'une variable contenant un nombre entier
	moyenneAge = "15.25" |ou| float(input()) --> # Déclaration d'une variable de nombre décimal
"""
  	Le problème est que la fonction input est très lente car elle gère des fonctionnalités avancées destinées à une interface en ligne de commande. 
  	Ainsi, dans certains cas, elle ne vous permettra pas d'être suffisamment efficace.
	Il faudra donc utiliser une fonction plus basique """
		import sys	# Elle se trouve dans le module sys, qu'il faut importer
		ligne = sys.stdin.readline()
"""
	Cette nouvelle fonction est jusqu'à 8 fois plus rapide que la précédente ! Tout comme input, elle retourne la prochaine ligne sur l'entrée ; par contre elle laisse le retour à la ligne (\n) à la fin. 
	Si vous convertissez la chaîne en une ou plusieurs valeurs (entiers, flottants), cela ne devrait pas vous déranger ; sinon, faites attention. 
	Notez que l'on peut aussi plus simplement remplacer la fonction input par sys.stdin.readline au tout début de son programme :  """
		import sys
		input = sys.stdin.readline

< DEFINIR UNE VARIABLE BOOLEENE: >



# ==================================
# Exemple 1:
estSenior = (age >= 60)
estJeune = (age <= 25) and (age >= 12)
reductionPossible = (estSenior or estJeune)
if reductionPossible:
	print("Réduction!")
elif not(reductionPossible):
	print("Pas de réduction possible")
# Exemple 2:
toujoursVraie = True
if toujoursVraie:
   print("La variable toujoursVraie vaut 'True'")
"""
 On a donc stocké dans la variable estPasCher la valeur de la comparaison prix < 10 pour la réutiliser plus tard dans un if.
	La variable estPasCher est appelée une variable booléenne ou un booléen car elle ne peut être que vraie ou fausse, ce qui correspond en Python aux valeurs True et False .
	Ainsi en Python, (3 < 10) vaut True et (11 == 7) vaut False . True et False sont donc des constantes du langage, au même titre que 0, 1 ou encore 42.
	On peut donc affecter directement la valeur True ou False à une variable
 Il est possible de calculer le contraire d'une condition en Python, en utilisant l'opérateur booléen not qui renvoie le contraire de la valeur qu'on lui donne
 	Lorsqu'on utilise l'opérateur booléen not pour avoir le contraire d'une condition, on dit qu'on a pris la négation de la condition.
"""

< AFFICHAGE ET FORMATAGE DE DONNEES: >



# ====================================
	print() # Renvoi à la ligne
	print("Bonjour")	 ↳ Bonjour
	print("Bonjour", variable)	↳ Bonjour _valeur de la variable_ # un espace est automatiquement creér entre chaque valeur #
	for loop in range(2):
		print("Bonjour", end=" ")	↳ Bonjour Bonjour
	print(1, 2, 3, 4, 5, sep=";", end=" | ")	↳  1;2;3;4;5 | # "sep" permet de définir ce qui va séparer les valeurs , "end" permet d'indiquer la terminaison de la ligne
	print("{}-{}-{}".format(nombre1, nombre2, nombre3))		↳ nombre1-nombre2-nombre3
	vers = "Maitre Corbeau, sur un arbre perche,"  """ OU """ vers = input()
	print(vers) ↳ Maitre Corbeau, sur un arbre perche,
	pays, ville = input("France Paris").split(" ")
	print("Vous habitez à {} ({})".format(ville, pays)) ↳ Vous habitez à Paris (France)
	print (pays[0]) ↳ F # Affiche la première lettre de la variable "Pays"
	print (ville[0]) ↳ P # Affiche la première lettre de la variable "Ville"
	longueur, largeur = map(int,input("5 10").split(" ")) # La fonction map() va appeler la fonction int() (son premier argument) sur chacun des élements du tableau 
	print (longueur * largeur) ↳ 50						  # donné comme second argument, et va retourner le tableau contenant tous les entiers.
	print ("jerome".upper()) ↳ JEROME 	# Notez que ces fonctions ne passeront en majuscule (resp. minuscule) que les caractères qui sont en minuscule (resp. majuscule).
	print ("JEROME".lower()) ↳ jerome 	# Il n'y a donc pas pas besoin de tester la casse des caractères avant de pouvoir les utiliser !
	print ("Coucou toi".replace('o','h')) ↳ Chuchu thi # remplace un caractere par un autre

# Il est possible de faire plus rapide que print mais on ne gagne que 50 % de temps, ce qui n'est pas si intéressant. Cela peut cependant servir parfois ; ainsi, voici comment faire : 
	import sys
	texte = "ABCDE"
	entier = 42
	sys.stdout.write("Texte : ")
	sys.stdout.write(texte)
	sys.stdout.write(str(entier) + "\n")	↳ Texte : ABCDE42

	Il faut donc utiliser sys.stdout.write. Cette fonction prend un et un seul paramètre (alors que print pouvait en prendre n'importe quelle quantité, et comportait les deux options sep et end) : 
	la chaîne de caractères à afficher. Pour afficher une valeur, il faut donc la convertir en chaîne de caractères avec la fonction str. Si l'on veut afficher plusieurs textes,
	il faut appeler plusieurs fois la fonction, ou concaténer les chaînes de caractères à afficher. Notez que cette fonction n'insère pas de retour à la ligne à la fin de l'affichage 
	comme le faisait print : il faut donc rajouter le \n soi-même si l'on s'en sert.

< MANIPULATION DES NOMBRES: >
                                                                                        
                                                                                        
                                                                                        
                                                                                        # =============================
"""
 Priorité des signes mathématiques:
 	1) Multiplications(ou //) et divisions(ou %)
 	2) additions et soustractions
 	3) Pour les cas les plus complexes, il faut effectuer le calcul de la gauche vers la droite (règle usuelle en mathématiques).
 		> print(1 + 2 * 3 + 4 / 5) == print(1 + (2 * 3) + (4 / 5))
 		> print(10 + 20 // 3 + 42 % 5) == print(10 + (20 // 3) + (42 % 5))
 		> print(100 * 200 // 300 // 40 % 50) == print((((100 * 200) // 300) // 40) % 50)
"""
	print(2 + 3) ↳ 5 # Les autres signes sont le "-"(soustraction) et "/"(division)
	print(42 / 10) ↳ 4.2 # Les nombres décimaux sont à utiliser avec des ".". Le résultat d'une division sera toujours un chiffre décimal (float())
	print(666 // 13) ↳ 51 # Indique le quotient de la division (floor(666/13))
	print(666 % 13) ↳ 3 # Indique le reste de la division (666-(13*51))
	# Exemple d'utilisation	de la division euclidienne:
	nombre = int(input())
	if (nombre % 2) == 0:
   		print("Le nombre est pair")
 	# Si on oublie le int(...) et que l'on écrit juste input() à la place de int(input()), on peut avoir de grosses surprises, comme le montre l'exemple suivant:
	valeur1 = input()			[11]             
	valeur2 = input()			[22]	
	print(valeur1 + valeur2)	↳ 1122
	# ----------------------------------
	from math import *
	arrondiInf = floor(-12.3)	↳ -13 	# Arrondi à l'entier inférieur
	arrondiSup = ceil(12.3)		↳ 13	# Arrondi à l'entier supérieur
	arrondiPro = round(12.3)	↳ 12	# Arrondi à l'entier le plus proche, si la valeur se termine par .5, Python choisira toujours l'arrondi pair par défaut (0.5 --> 0, 1.5 --> 2)
	# ----------------------------------
	nombre += 1 # Ecriture simplifiée de nombre = nombre + 1
	"-=, *=, **=(puissance), /=, //=, %/ sont aussi possible !"
	nombre *= nombre2 + 3 # nombre = nombre * (nombre2 + 3)

< FONCTIONS TOUTES FAITES>

                                                                                        
                                                                                        
                                                                                        
                                                                                        # ==========================
	caractere.islower() --> est en minuscules 	# mot.islower() --> tout le mot est en miniscule ...
	caractere.isupper() --> est en majuscule
	caractere.isalpha() --> est une lettre
	caractere.isdigit() --> est un chiffre

< CARACTERES, SYMBOLES ET SIGNES SPECIAUX>

                                                                                        
        
        
# ==============================
	print("Il m'a dit \"Bonjour\" !") 	# la barre oblique \ permet d'afficher le caractère (") qui est deja utilisé pour afficher le print
	print('Il a dit "Bonjour" !') 		# Est une autre solution qui évite d'utiliser la barre oblique
	/n == insérer un retour à la ligne 	
	/t == insérer une tabulation 
	// == Permet de rajouter une barre oblique, le premier annulant le caractère spécial du second pour le transformer en simple caractère
	print("""Il m'a dit "Bonjour" !""") # 	Si la chaîne contient à la fois des guillemets simples et des guillemets doubles, alors on peut utiliser des triples guillemets

< IMPORTATION DE MODULES >




# ==========================
"""
	Dans Python, toutes les fonctions (en particulier les fonctions mathématiques) ne sont pas disponibles par défaut. 
		Elles sont rangées dans ce qu'on appelle des modules (ou bibliothèques) qu'on peut voir comme des "boites à outils". 
		Quand on veut utiliser un "outil" il faut d'abord "ouvrir la boite"
		Elle peut se traduire par "importer tout ce qui est dans le module".
		Cette commande est à placer tout en haut du fichier et permet ensuite d'utiliser dans votre programme toutes les fonctions 
			ou constantes définies dans ce module. On dit qu'on a importé le module. 
"""
	from math import * # Permet d'accéder aux fonctions mathématiques

< UTILISATION DES BOUCLES >




# ===========================
	" For " 	# for nombre in range(<debut>, <fin>, <saut>):
	*******
#	 	Va faire prendre à la variable nombre toutes les valeurs entre <debut> (inclus) et <fin> (non inclus) en faisant des sauts de <saut> à chaque fois
#
		for loop in range(5): # Va répéter 5 fois la même instruction
			print(loop, end=" ") ↳ 0 1 2 3 4 # Si pas précisé, la boucle démarre à 0
		for nombre in range(0, 10, 2):
   			print(nombre, end = " ") ↳ 0 2 4 6 8
   		for nombre in range(20, -21, -5):
   			print(nombre end = ".") ↳ 20.15.10.5.0.-5.-10.-15.-20
#
	" WHILE "
	*********
# 		On a parfois besoin de répéter certaines instructions jusqu'à ce qu'un certain changement ce soit produit. Comme demander un mot de passe tant que l'utilisateur n'a pas donné le bon.
#		On a ici utilisé dans la phrase le terme « tant que », ce qui signifie qu'on a bien une condition pour savoir quand s'arrêter. On ne peut pas utiliser notre boucle « répéter » habituelle, 
#		car on ne sait pas combien de fois l'utilisateur va se tromper ! On va donc faire intervenir une autre boucle : la boucle « tant que », Elle se nomme while dans les langages de programmation .
#
		secret = 123456
		motDePasse = 0
		while motDePasse != secret: # Tant que le mot de passe est différent du mot de passe secret, la boucle continue...
			print("Tapez le mot de passe :")
   			motDePasse = int(input())
		print("Vous avez trouvé !")

< TESTS ET CONDITIONS >




# =======================
# 	Les différents signes de comparaison sont les suivants:
# 		<	Strictement inférieur à
# 		>	Strictement supérieur à
# 		<=	Inférieur ou égal à
# 		>=	Supérieur ou égal à
# 		==  Strictement égal à
# 		!=	Différent de
#	
		if nbOeufs > 0 and nbOeufs <= 6 :	# SI le nombre d'oeufs est supérieur à 0 ET inférieur ou égal à 6
			print("Une boîte de 6 oeufs suffit")
		elif nbOeufs > 6 and nbOeufs <= 12 : # Sinon SI le nombre d'oeufs est supérieur à 0 ET inférieur ou égal à 6 
			print("Une boîte de 12 oeufs sera nécessaire")
		else :							# Si les conditions ne sont pas respectées:
			print("Plusieurs boîtes nécessaires")
#
# 	Il faut faire bien attention à ne pas confondre l'opérateur == avec le simple =, car les deux ont des rôles très différents :
#    	= 	sert à affecter une valeur à une variable ;
#    	== 	sert à tester l'égalité de deux valeurs.
# 	Une condition est toujours soit vraie, soit fausse. Une valeur qui ne peut être que vraie ou fausse est appelée valeur booléenne. 
# 		Cela donne donc son nom aux opérateurs booléens qui permettent de manipuler ces valeurs, de la même manière que les opérateurs numériques permettent de manipuler les nombres. 
# 		L'opérateur AND est donc un opérateur booléen. 							

< UTILISATION DES TABLEAUX >



# ==========================
# 	Pour créer un tableau, on utilise le code suivant : 
		nbJours = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31] # le 1er enregistrement est le numéro [0]
		print(nbJours[0]) ↳ 31
		print(nbJours[5]) ↳ 30
		nbJours.sort() # trie le tableau de la plus petite à la plus grande valeur
		print(nbJours[0]) ↳ 29
		print(nbJours[-1]) ↳ 31 # Renvoie la première valeur du tableau en partant de la fin
		print(len(nbJours)) ↳ 12 # Renvoie le nombre de cellule du tableau
		print(*nbJours, sep="\n") # affiche toutes les valeurs de nbJours avec un retour à la ligne entre chaque

		prix = [0] * 7 # On déclare un tableau de 7 cellules pour la variable "prix" avec pour valeur par défaut "0"
		prix[0] = 124 # On Modifie la valeur de la 1er cellule
		prix[3] = int(input()) # La valeur de l'utilisateur modifie la 4eme cellule du tableau

		noteInitiale = 20
		notes = [noteInitiale] * 1000 # La valeur initiale des cellules est défini à 20

		ligne = "Nous allons découper cette ligne en plusieurs mots"
		mots = ligne.split(" ") # Nous découpons la ligne en fonction des espaces
		print(mots[2]) ↳ ligne # On affiche le 3eme mot de la ligne
		print (ligne.split(" ")[4]) ↳ fonction # On affiche le 5eme mot de la ligne

		liste = [item % 10 for item in range(nbItems)] # Introduire une boucle dans une liste

# 	Modifier une chaîne existante
		texte = "Exemple de texte"
		print(texte)
		caracteres = list(texte) # On convertit une chaîne de caractères en tableau de caractères
		caracteres[8] = "X"
		caracteres[9] = "X"
		texte = "".join(caracteres) # On peut alors convertir le tableau de caractères en une chaîne de caractères
		print(texte) ↳ Exemple XX texte

< UTILISER LES FONCTIONS >



# ==========================
	def ligneEtoiles(): # Fonction qui va créer une ligne avec 40 astérisques
   		for iCol in range(40):
    		print("*", end = "")
   		print() 
   	ligneEtoiles() ↳ ************************************** # On appelle la fonction

   	def ligneCaractere(Caractere): # On va rendre notre fonction paramétrable avec un argument "caractere"
    	for iCol in range(40):
      		print(Caractere, end = "")
    	print()
    ligneCaractere("-") ↳ -------------------------------------- # On place la valeur entre les parenthèses

    def lignePerso(Caractere, longueur):
   		for iCol in range(longueur):
      		print(Caractere, end = "")
   		print()
   	lignePerso("+", 25) ↳ +++++++++++++++++++++++++ # On appelle la fonction en indiquant le nombre et le caractère utilisé pour créer une ligne

   	def valeurAbsolue(valeur):
   		if valeur >= 0:
      		valAbsolue = valeur
   		else:
      		valAbsolue = -valeur
   		return valAbsolue # Retourne la valeur absolue
   	distance1 = valeurAbsolue(10); 
   	distance2 = valeurAbsolue(-10);
# Dans le cas des fonctions qui ne retournent pas de valeur, il est également possible d'utiliser l'instruction return. Elle n'est alors suivie d'aucune valeur 
# et a simplement pour effet de quitter la fonction immédiatement, lorsqu'elle est exécutée. En réalité, en Python, toute expression a une valeur, et une absence de valeur vaut None. 

< OUTILS DIVERS >



# =================
	" Convertir un caractère vers/depuis un nombre "
	------------------------------------------------
#	En Python, les chaînes de caractères sont en réalité codées en UTF-8, un code (ou encodage) plus général que l'ASCII et qui permet de représenter 
#	plus de caractères, par exemples les caractères chinois. En UTF-8, Les caractères d'indices inférieurs à 128 sont exactement les mêmes que en ASCII.
#	Ce qui est intéressant c'est qu'il est possible de convertir un caractère vers son code ASCII, et inversement.
		caractere = "U"
		code = ord(caractere)
		print(code)			↳	85

		code = 111
		caractere = chr(code)
		print(caractere)	↳	o
#	Cours Python: http://www.france-ioi.org/algo/course.php?idChapter=566&iOrder=2


< MESSAGES D ERREURS POSSIBLES: >



# =================================
	print("Bonjour" --> # SyntaxError: unexpected EOF while parsing (parenthèse manquante)
	print "Bonjour") --> # SyntaxError: invalid syntax (parenthèse manquante)
	print("Bonjour) "--> # SyntaxError: EOL while scanning string literal (guillemet manquant)
	print(Bonjour) --> # NameError: name 'Bonjour' is not defined (variable "Boujour" inconnue)
	for loop in range(5):
	print("Bonjour !")	# SyntaxError: expected an indented block (Mauvaise indentation)
	 print("Comment vas-tu ?") # SyntaxError: unindent does not match any outer indentation level (Différentes indentations utilisées)
	ValueError: invalid literal for int() with base 10: 'coucou' # La valeur recherchée n'est pas un entier
	EOFError: EOF when reading a line # Erreur de fin du fichier : fin du fichier atteinte en lisant une ligne. On a essayé de lire trop de choses.
	print((1,5) + 2) --> # TypeError: can only concatenate tuple (not "int") to tuple (Utilisation d'une virgule à la place d'un point en tant que nombre décimal)
	IndexError: list index out of range # Erreur d'indice : l'indice du tableau est en dehors de l'intervalle  (La donnée recherchée n'existe pas)
"""
Les messages décrivent très souvent la source exacte du problème, en anglais : il faut les lire et essayer de comprendre leur signification.
	Un message d'erreur vous donnera aussi toujours le numéro de la ligne qui a causé le souci. 
		Ce numéro n'est pas toujours exact : l'ordinateur peut n'être dérangé qu'après votre erreur. 
		Il vous faudra donc souvent regarder avant l'emplacement indiqué.																		 """


< ASTUCES  >
       
       
       
# ============
 """
 1) Le niveau d'indentation :
	Augmente (Tab) lorsque l'on rentre dans la boucle,
 	Diminue (Maj+Tab) lorsqu'on sort de la boucle.
 2) Les espaces autour des opérateurs arithmétiques (+, -, *, /) ne sont pas obligatoires, mais ils rendent le programme plus facile à lire. 
