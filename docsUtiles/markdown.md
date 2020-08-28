---
---
### LE LANGUAGE MARKDOWN
---
---
#
#### FORMATAGE DE TEXTE
---
    **Texte_en_gras** OU __Texte_en_gras__
    _Texte_en_italique_ OU * Texte_en_italique
**Texte_en_gras**
_Texte_en_italique_

---
#### INSÉRER UNE LIGNE VERTICALE
---
###### Pour insérer une ligne vertical, il faut juste ajouter 3 tirets ou plus de suite sur une ligne :
#
    ---
    ----------
---
#### FORCER LE TEXTE À PASSER À LA LIGNE
---
###### Pour forcer le texte à passer à la ligne, il suffit d'ajouter deux espaces consécutifs en fin de ligne...
#
    Voici une ligne de texte.. (Les points remplacent les espaces)
    Voici une autre ligne obtenue grâce aux deux espaces en fin de ligne
    Et voici encore une autre ligne, sans quoi le texte se suivrait !
Voici une ligne de texte
Voici une autre ligne obtenue grâce aux deux espaces en fin de ligne
Et voici encore une autre ligne, sans quoi le texte se suivrait !

---
#### LES TITRES
---
###### Pour transformer du texte en titre il suffit de le faire précéder d'un ou plusieurs '#' correspondant au niveau désiré:
    # = H1 OU:
    H1
    ==
    ## = H2 OU:
    H2
    --
    ### = H3
    #### Etc...
# = H1
## = H2
### = H3
##### Etc...
#
---
#### LES LIENS
---
###### Il existe plusieurs manières d'insérer un lien en Markdown:
#
    1) [Voici une façon de formater un lien](Adresse_du_lien "titre_du_lien_optionnel")

    2) [Ce texte sert de référence de lien]
       [Ce texte sert de référence de lien]: Adresse_du_lien "titre_du_lien_optionnel"

    3) [Et en voici une autre][1]
  1 [Voici une façon de formater un lien](Adresse_du_lien "titre_du_lien_optionnel")
  2 [Ce texte sert de référence de lien]
  3 [Et en voici une autre][1]

__Attention!__ Les références des liens se place en fin de page...

---
#### INSÉRER DES IMAGES
---
###### Pour insérer une image il suffit d'insérer "**!**" avant le chemin de l'image. La syntaxe est la suivante:
#
	1) ![Texte_alternatif_optionnel](chemin_de_l_image "titre_optionnel")
	2) ![]

	2) ![Un chou Fleur !][id_de_reference]
	   [id_de_reference]: chemin_de_l_image "Du choux-fleur"
![Un chou Fleur !](chemin_de_l_image "titre_optionnel")
![Chou Fleur][id_de_reference]

---
#### AJOUTER UNE CITATION
---
###### Pour insérer une citation, il suffit d'insérer le carctère { **>** } devant chaque ligne concernée
#
    > Ceci est un texte cité. Vous pouvez répondre
    > à cette citation en écrivant un paragraphe
    > normal juste en-dessous !
> Ceci est un texte cité. Vous pouvez répondre
> à cette citation en écrivant un paragraphe
> normal juste en-dessous !

---
#### INSÉRER UN BLOC DE CODE
---
###### Pour ajouter du texte sans en modifier la mise en forme il suffit d'insérer au moins **4 espaces** ou une **tabulation** au début de la ligne
#
        var i=11;
        while (i<=20) {
            document.write(i + " ");
            i++; }
        document.write("<br>");
* Une autre manière de faire est d'entourer le code de  { **```** }
###### Il est possible de définir de quel langage est issu le texte et ainsi lui appliquer la coloration adéquate
#
        ```js
            Du code JavaScript
        ```
```js
    var i=11;
    while (i<=20) {
        document.write(i + " ");
        i++; }
    document.write("<br>");
```
* Il est également possible d'insérer du code à l'intérieur d'une ligne en l'entourant de d'un seul { **`** }

---
#### LES LISTES
---
###### LES LISTES A PUCES (1):
#
    * Rome
    * Paris
        + Bobigny
        - Nanterre
* Rome
* Paris
    + Bobigny
    - Nanterre

_(1)  ( *, + , - ) Afficheront le même résultat_

---
###### LES LISTES NUMEROTEES:
#
	1. Rome
	2. Paris
	3. Madrid
1. Rome
2. Paris
3. Madrid

---
#### LES TABLEAUX
---
###### Chaque colonne doit être entouré de { **|** }, les { **:** } déterminent le centrage des données de la colonne... Les tableaux ne font pas partie de la spécification _Markdown_ de base, mais sont utilisés ainsi sur _GitHub Mardown_
#
    Noms | ages | Prénoms
    :--- |:---:| ---:
    Petié|42 ans|Jérôme
    Coquilon| 72 ans |Dany
    ____________|___________|___________
    Centré à Gauche|Centré au centre|Centré à droite|
Noms | ages | Prénoms
:--- |:---:| ---:
Petié|42 ans|Jérôme
Coquilon| 72 ans |Dany
____________|___________|___________
`Centré à Gauche`|`Centré au centre`|`Centré à droite`

---
#### UTILISER DU HTML
---
###### Vous pouvez également utiliser du Html dans vos documents écrits en Markdown
#
		<ol>
		<li><b>Ceci est un texte écrit en gras</b></li>
		<li><i>Et voici un texte écrit en italique grâce au HTML</i></li>
		</ol><hr />
<ol>
	<li><b>Ceci est un texte écrit en gras</b></li>
	<li><i>Et voici un texte écrit en italique grâce au HTML</i></li>
</ol><hr />







[1]: Adresse_du_lien "La référence peut être un numéro..."
[id_de_reference]: https://assets.afcdn.com/recipe/20170607/67526_w300h300c1.jpg "Du choux-fleur"
[Ce texte sert de référence de lien]: Adresse_du_lien "Le texte est le même que la référence"