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