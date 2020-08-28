#############
# VARIABLES #
#############
"""
	L'identifiant se constitue de caractères collés (pas d'espace).

	Les caractères autorisés sont essentiellement :
	    les lettres majuscules et minuscules naturelles : abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ;
	    les chiffres 0123456789 ;
	    le caractère « _ » (appelé « sous-tiret »).

	Le premier caractère du nom d'une variable ne peut pas être un chiffre ; le nom 1erNombre est donc invalide.
	Les mots-clés du langage ne peuvent être utilisés pour nommer des variables. En Python, c'est par exemple le cas du mot for.
	Dans le cas du langage Python, les accents sont acceptés dans les identifiants.
	Vous devez profiter de cette flexibilité pour choisir des noms qui aideront à comprendre votre programme.
	
	Choisir un bon nom :

		Nous vous conseillons de nommer vos variables par une suite de mots ou abréviations accolés les uns aux autres, 
		en mettant en majuscule la première lettre de chaque mot sauf le premier. Voici quelques exemples : 

			longueurFeuille
			nbPiècesJaunes

		Ce style de nommage est très répandu : on l'appelle couramment CamelCase, ou « casse ChatMot » en français, en référence aux bosses du chameau. 

	En Python, toute expression a une valeur, et une absence de valeur vaut "None"
"""
		variable = valeur			# On déclare une variable
		variable = int(input())  	# On récupère l'entier d'une entrée utilisateur 
		variable = float(input())  	# On récupère un nombre à virgule d'une entrée utilisateur 

#########################
# MANIPULER DES DONNÉES #
############################
	# AFFICHER DES DONNÉES #
	# -------------------- #
		print("Bonjour") 						# Afficher le texte "Bonjour"
		print(2+3) 								# 5
		print("11" + "22")						# 1122
		print("Un ", end="") 					# Affiche le texte sans retourner à la ligne
		print(1,2,3,4,5, sep=";", end="|")		# 1;2;3;4;5 |
		print("Coucou", prenom)					# Affiche plusieurs valeurs avec l'instruction [print]
		print("{}-{}-{}".format(15, 12, 10)) 	# 15-12-10

	# ---------------------- #
	# MANIPULER LES CHIFFRES #
	# ---------------------- #

		(9 * 8)  (9 - 8)  (12 / 10)			# 72 - 1 - 1.2
		
		print (1 + 2 * 3 + 4 / 5) == print (1 + (2 * 3) + (4 / 5)) 	# Ordre de priorité des signes: * , / , + , -
		
		(9 > 8)  (9 < 8)  (9 >= 8)  (9 <= 8)  (9 == 8)	(9 != 8) 	

		NbBoites = 50 // 12 	# 4 -> 4 * 12 = 48 	// Le diviseur est 4
		nbReste = 50 % 12 		# 2 -> 50 - (4*12) = 2 // Ce qui reste de la division après le diviseur 4

		nbBilletsDe50Perdu = -666 // 50 	# -14 // On a perdu 14 billets de 50 
		MoneyRestante = -666 % 50 			# Il nous reste 34€ de money sur le dernier billet

		print(10 + 20 // 3 + 42 % 5) == print(10 + (20 // 3) + (42 % 5)) 				# La priorité des opérateurs // et % est la même que celle des opérateurs de multiplication et division.
		print(100 * 200 // 300 // 40 % 50) == print((((100 * 200) // 300) // 40) % 50) 	# Si priorité égale, il faut effectuer le calcul de la gauche vers la droite

	# ------------ #	
	# LES BOOLÉENS #
	# ------------ #

		# En Python le programme suivant : 
		if prix < 10:
	   		print("Pas cher")
		# peut aussi s'écrire:
		estPasCher = (prix < 10)
		if estPasCher:
		   print("Pas cher")
		"""
		La variable estPasCher est appelée une variable booléenne ou un booléen car elle ne peut être que vraie (True) ou fausse (False).
		True et False sont donc des constantes du langage, au même titre que 0, 1 ou encore 42. """ 
			estSenior = (age >= 60)
			estJeune = (age <= 25) and (age >= 12)
			reductionPossible = (estSenior or estJeune)
			if reductionPossible:
			   print("Réduction!")
		# Il est possible de calculer le contraire d'une condition en Python, en utilisant l'opérateur booléen "not" qui renvoie le contraire de la valeur qu'on lui donne : 
			if ( not (reductionPossible) ) and (nbKm >= 5000):
			   print("Cadeau")
		# !!! Un programme ne doit jamais contenir de == True ou == False

	# ------------------------- #
	# LES CHAÎNES DE CARACTÈRES #
	# ------------------------- #

		# COMPARER 2 PHRASES SELON L'ORDRE ALPHABÉTIQUES(ou mots ou lettres):
			if( "Jérôme" < "Julie" ):
				print("Le prénom 'Jérôme' se situe avant celui de 'Julie'")

		# CALCULER LA LONGUEUR D’UNE CHAÎNE DE CARACTÈRES:
			longueur = len(phrase)

		# MODIFIER UNE CHAÎNE EXISTANTE
			caracteres = list(chaineDeCaracteres) 				# Convertit la chaîne en un tableau de caractères
			caracteres[0] = "X" 								# On remplace le 1er caractère de la chaîne par "X"
			chaineDeCaracteres = "".join(caracteres) 			# Convertit le tableau de caractères en une nouvelle chaîne

	# -------- #
	# LES MOTS #
	# -------- #
	# En Python on ne peut pas faire autrement que de lire toute la ligne à la fois. Il faut donc être capable d'extraire les mots ou les nombres situés sur une ligne.

		# EXTRAIRE UN MOT D'UNE LIGNE:
			mots = ligne.split(" ")								# Stocke les mots séparés par un espace de "ligne" dans un tableau
			#	   input().split(" ")   						# Lit la ligne de texte et la couper en mots, en une seule ligne de code
			print mots[0] 										# Retourne le 1er mot de la ligne
			pays, ville =  input().split(" ")					# Attribut les 2 mots d'une phrase directement dans 2 variables

			# LA FONCTION "MAP":
			longueur, largeur = map(int, input().split(" "))	# Map va appeler la fonction "int()" sur chacun des éléments du second argument  

			print("TINTIN"[3]) 									# Retourne le 4ème caractère du mot (l'indice commence à 0)

##############
# CONDITIONS #
##############
	# IF #
	# -- #
		if ( (12 <= age) and (age <= 25) ) or (age >= 60): 	# si
			# Instructions..
		elif (age > 25 and age < 40):						# sinon si
			# Instructions..
		else: 												# si rien n'est vrai alors ... 
			# Instructions

###########
# BOUCLES #
###########
	# ---------------- #
	# WHILE (Tant que) #
	# ---------------- #
		secret = 123456
		motDePasse = 0
		while motDePasse != secret: 				
		   print("Tapez le mot de passe :")
		   motDePasse = int(input())
		print("Vous avez trouvé !")
	# --- #
	# FOR #
	# --- #
		for loop in range(5): 				# Répète 5 fois l'instruction
			Instructions...

		for nombre in range(10, 21, 1):		 
	   		print(nombre)					# 10 11 12 13 14 15 16 17 18 19 20

	   	for nombre in range(100, 111, 2):	# 100 102 104 106 108 110
	   	for nombre in range(20, -21, -5):	# 20 15 10 5 0 -5 -10 -15 -20

	   	# S'il n'est pas précisé, le "saut" vaut 1:
	   	for nombre in range(10, 15):		# 10 11 12 13 14

############
# TABLEAUX #
############

		nbJours = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31] 	# Crée un tableau "nbJours"
		print (nbJours[0], nbJours[1]) 								# 31 29
		print (nbJours[-1]) 										# 31 (1er élément en partant de la fin)

		nouveauTableau = [0] * 7 		# Crée un tableau vierge de taille 7
		nouveauTableau = 20 * 10 		# crée un tableau dont l'index commencera de 20 et d'une taille de 10

		nbJours.sort() 					# Trie le tableau du plus petit au plus grand
		tailleNbJours = len(nbJours)	# calcule la taille d'un tableau

#################
# LES FONCTIONS #
#################
# Il est important de bien choisir les noms des fonctions, pour qu'ils expriment très clairement ce que fait la fonction.

		def nouvelleFormule(argument1,argument2,etc): 			# Création d'une formule
			# instructions
			return # valeur (ou rien == "None")					# Renvoi une valeur (ou pas) et quitte la fonction
		nouvelleFormule(argument1,aurgument2,etc) 				# Appelle la formule


###############
# LES MODULES #
###############
"""
Dans Python, toutes les fonctions (en particulier les fonctions mathématiques) ne sont pas disponibles par défaut. Elles sont rangées dans ce qu'on 
appelle des modules (ou bibliothèques) qu'on peut voir comme des "boites à outils". Quand on veut utiliser un "outil" il faut d'abord "ouvrir la boite". 

"""
#
# Fonctions Mathématiques:
#
		from math import *							# On appelle la bibliothèque math au début du document

		arrondiInférieur = floor(12.3) 				# 12
		arrondiInférieurNégatif = floor(-12.3) 		# -13
		arrondiSupérieur = ceil(12.3)				# 13
		arrondiLePlusProche = round(12.3) 			# 12, au cas ou 12.5, Python choisira toujours le chiffre pair le plus proche!


######################
# MESSAGES D'ERREURS #
######################

	"""
	print("Bonjour" 		=> SyntaxError: unexpected EOF while parsing 
	print "Bonjour") 		=> SyntaxError: invalid syntax
	print("Bonjour)			=> SyntaxError: EOL while scanning string literal
	Vairable non définie	=> NameError: name 'Bonjour' is not defined
	Problème d'indentation 	=> SyntaxError: expected an indented block
							=> SyntaxError: unindent does not match any outer indentation level

	ValueError: invalid literal for int()	=> Nombre entier attendu
	EOFError: EOF when reading a line 		=> Erreur si on lit trop de choses

	"""
