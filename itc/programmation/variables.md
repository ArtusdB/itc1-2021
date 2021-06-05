---
jupytext:
  text_representation:
    extension: .md
    format_name: myst
    format_version: 0.13
    jupytext_version: 1.10.0
kernelspec:
  display_name: Python 3.8.5 64-bit
  name: python385jvsc74a57bd0916dbcbb3f70747c44a77c7bcd40155683ae19c65e1c03b4aa3499c5328201f1
---

# Variables

## Définition
Une variable en informatique possède 3 caractéristiques :
- un nom
- une valeur
- un type

Par exemple, l'instruction suivante permet de définir une variable nommée `a`, de valeur 42 et de type entier :

```{code-cell} ipython3
a = 42  # définition d'une variable a
```

Lorsque l'on définit une variable de cette façon, la valeur 42 est stockée dans la mémoire RAM et peut être récupérée en écrivant le nom de la variable :

```{code-cell} ipython3
a
```

Python remplace `a` par sa valeur et donne le résultat.  
On peut aussi modifier la valeur de `a` :

```{code-cell} ipython3
a = -4  # modification de a
a
```

```{note}
Même si la définition d'une variable et la modification d'une variable s'écrivent de la même façon en Python (`a = ...`), il s'agit de deux instructions fondamentalement différentes.   
```

| Python | Description | Exemple |
| --- | --- | --- |
| `int` | entier | `0`, `42`, `-7` |
| `float` | nombre à virgule | `3.14`, `-2.718` |
| `bool` | booléen (vrai ou faux) | `True`, `False` |
| `str` | chaîne de caractères | `"blabla"`, `""`, `"info"` |
| `list` | liste | `[1, 2, 3]`, `[3.14, "chaine", [1, 0]]` |

## Types numériques : `int`, `float`

* `int` est utilisé pour les entiers (naturels : positif ou négatif).

| Python | Signification | Exemple |
| --- | --- | --- |
| `+` | addition | `2 + 3` vaut `5` |
| `-` | soustraction | `2 - 3` vaut `-1` |
| `*` | multiplication | `2*3` vaut `6` |
| `**` | puissance | `2**3` vaut `8` |
| `/` | division (dans $\mathbb{Q}$) | `5/2` vaut `2.5` |
| `//` | division **entière** (dans $\mathbb{N}$) | `5//2` vaut `2`  |

Une racine peut être calculée avec `**`. Par exemple, $\sqrt{2} = 2^{\frac{1}{2}}$ :
```{code-cell} ipython3
2**0.5
```

```{tabbed} Exercice
Utiliser Python pour calculer la valeur (approximative) du nombre d'or $\phi = \frac{1 + \sqrt{5}}{2}$
```
```{code-cell} ipython3
# Votre solution
```
```{code-cell} ipython3
:tags: ["hide-cell"]
(1 + 5**0.5)/2
```

---

| Python | Signification | Exemple |
| --- | --- | --- |
| `==` | égal | `0 == 0` vaut `True`, `3.14 == 3` vaut `False` |
| `<` | inférieur strictement | `1 < 2` vaut `True`, `3.14 < 3.14` vaut `False` |
| `>` | supérieur strictement | `1 > 2` vaut `False`, `3.14 > 3.14` vaut `False` |
| `<=` | inférieur ou égal | `1 <= 2` vaut `True`, `3.14 <= 3.14` vaut `True` |
| `>=` | supérieur ou égal | `1 >= 2` vaut `False`, `3.14 >= 3.14` vaut `True` |
| `!=` | différent | `1 != 2` vaut `True`, `3.14 != 3.14` vaut `False` |

```{danger}
Ne pas confondre `a = b`, qui permet de mettre la valeur de `b` dans `a`, et `a == b` qui permet de tester si `a` et `b` ont la même valeur.  
```

| Python | Signification | Exemple |
| --- | --- | --- |
| `or` | ou | `0 == 0 or 3.14 == 3` vaut `True` |
| `and` | et | `0 == 0 and 3.14 == 3` vaut `False` |
| `not` | négation | `not 0 < 1` vaut `False` |
| `<=` | inférieur ou égal | `1 <= 2` est `True`, `3.14 <= 3.14` vaut `True` |
| `>=` | supérieur ou égal | `1 >= 2` est `False`, `3.14 >= 3.14` vaut `True` |
| `!=` | différent | `1 != 2` est `True`, `3.14 != 3.14` vaut `False` |

```{tabbed} Exercice
Que valent les expressions suivantes?
```
```{code-cell} ipython3
:tags: ["hide-output"]
not (1 <= 1 and (1 == 2 or 0 != 1))
```