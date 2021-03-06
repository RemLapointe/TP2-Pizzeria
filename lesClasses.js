/**
 * Description : Les classes pour savoir quoi mettre sur la pizza
 * Auteurs : Henrique Ferndandes, Rémi Lapointe
 * Date : 20 Février 2021
 */

 //classe Aliment
 class Aliment {
    constructor(nom, poids) {
        this.nom = nom;
        this.poids = poids;
    }
}

//classe Croute
class Croute extends Aliment {
    constructor(nom, poids, type, prix, taille) {
        super(nom, poids);
        this.type = type;
        this.prix = prix;
        this.taille = taille;
    }
}
//Liste des croutes
var listeCroute = [
    {nom: "Enfant", poids: 8, type: "mince", prix: 6, taille: "3cm"},
    {nom: "Ado", poids: 10, type: "épaisse", prix: 8, taille: "6cm"},
    {nom: "Adulte", poids: 12, type: "épaisse", prix: 10, taille: "8cm"}
];
//classe fromage
class Fromage extends Aliment {
    constructor(nom, poids, prix) {
        super(nom, poids);
        this.prix = prix;
    }
    
}
//Liste des fromages
var listeFromages = [
    {nom: "Parmesan", poids: 2, prix: 2},
    {nom: "Cheddar", poids: 2, prix: 3},
    {nom: "Brie", poids: 3, prix: 4},
    {nom: "Mozzarella", poids: 2, prix: 3}
];

//classe garniture
class Garniture extends Aliment {
    constructor(nom, poids, prix) {
        super(nom, poids);
        this.prix = prix;
    }
}
//Liste des garnitures
var listeGarnitures = [
    {nom: "Poivron", poids: 2, prix: 2},
    {nom: "Champignon", poids: 1, prix: 2 },
    {nom: "Oignon", poids: 1, prix: 2},
    {nom: "Jambon", poids: 2, prix: 3},
    {nom: "Bacon", poids: 1.5, prix: 3},
    {nom: "Pepperoni", poids: 1.5, prix: 3},
    {nom: "Sauce Tomate", poids: 1, prix: 1}
];

//classe Epices
class Epices extends Aliment {
    constructor(nom, poids) {
        super(nom, poids);    
    }
}
//Liste des épices
var listeEpice = [
    {nom: "Sel", poids: 0.2},
    {nom: "Poivre", poids: 0.2},
    {nom: "Ciboulette", poids: 0.2},
    {nom: "Piquant", poids: 0.2}
];

//classe Pizza
class Pizza {
    constructor(numéroPizza, taille, croute, fromages, garnitures, prixTotal, tempsCuisson) {
        this.numéroPizza = numéroPizza;
        this.taille = taille;
        this.croute = croute;
        this.fromages = fromages;
        this.garnitures = garnitures;
        this.prixTotal = prixTotal;
        this.tempsCuisson = tempsCuisson;
    }
}

//Calcul du prix des aliments de la pizza temporaire selon la taille
if (pizzaTemp2.taille == "M"){
    var prixTotal = (pizzaTemp2.croute.prix + pizzaTemp2.fromages.prix + pizzaTemp2.garnitures.prix)*2;
}else if (pizzaTemp2.taille == "G"){
    var prixTotal = (pizzaTemp2.croute.prix + pizzaTemp2.fromages.prix + pizzaTemp2.garnitures.prix)*3;
}else if (pizzaTemp2.taille == "P"){
    var prixTotal = (pizzaTemp2.croute.prix + pizzaTemp2.fromages.prix + pizzaTemp2.garnitures.prix);
}

//Première pizza
//Variable pizza temporaire pour manipulation de la pizza1
var pizzaTemp1 = new Pizza(1, "M", listeCroute[0], listeFromages[1], listeGarnitures[1], 0,  15);

//Creation de la pizza1 avec attributs de pizzaTemp1
var pizza1 = new Pizza(pizzaTemp1.numéroPizza, pizzaTemp1.taille, pizzaTemp1.croute, pizzaTemp1.fromages, pizzaTemp1.garnitures, prixTotal, pizzaTemp1.tempsCuisson);

//Deuxième Pizza
//Variable pizza temporaire pour manipulation de la pizza2
var pizzaTemp2 = new Pizza(2, "G", listeCroute[2], listeFromages[3], listeGarnitures[0], 0,  20);

//Creation de la pizza2 avec attributs de pizzaTemp2
var pizza2 = new Pizza(pizzaTemp2.numéroPizza, pizzaTemp2.taille, pizzaTemp2.croute, pizzaTemp2.fromages, pizzaTemp2.garnitures, prixTotal, pizzaTemp2.tempsCuisson);

//Liste des pizzas
var listePizza = [
    {numéroPizza: pizza1.numéroPizza, taille: pizza1.taille, croute: pizza1.croute, fromages: pizza1.fromages, garnitures: pizza1.garnitures, prixTotal: pizza1.prixTotal, tempsCuisson: pizza1.tempsCuisson},
    {numéroPizza: pizza2.numéroPizza, taille: pizza2.taille, croute: pizza2.croute, fromages: pizza2.fromages, garnitures: pizza2.garnitures, prixTotal: pizza2.prixTotal, tempsCuisson: pizza2.tempsCuisson}
];

//classe Commande
class Commande {
    constructor(numéroCommande, dateCommande, heureCommande, pizzas, totalCommande) {
        this.numéroCommande = numéroCommande;
        this.dateCommande = dateCommande;
        this.heureCommande = heureCommande;
        this.pizzas = pizzas;
        this.totalCommande = totalCommande;
    }
}

//Vérification du total de la commande
var totalCommande = pizza1.prixTotal + pizza2.prixTotal;
//Création de la commande
var commande1 = new Commande(1, "2/12/2021", "10:58", listePizza, totalCommande);

//classe Client
class Client {
    constructor(nom, prenom, numeroTelephone, courriel, commande) {
        this.nom = nom;
        this.prenom = prenom;
        this.numeroTelephone = numeroTelephone;
        this.courriel = courriel;
        this.commande = commande;
    }
}