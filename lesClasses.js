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

//classe Taille
class Taille {
    constructor(nom, diamètre, facteur) {
        this.nom = nom;
        this.diamètre = diamètre;
        this.facteur = facteur;
    }

    trouverDiamètre(){
        if (this.nom == "Petit"){
            this.diamètre = 12;
            return this.diamètre;
        }
        else if (this.nom == "Medium"){
            this.diamètre = 14;
            return this.diamètre;
        }
        else if (this.nom == "Grande"){
            this.diamètre = 16;
            return this.diamètre;
        }
        else{
            console.log("Erreur!");
        }
    }

    trouverFacteur(){
        if (this.nom == "Petit"){
            this.facteur = 1;
            return this.facteur;
        }
        else if (this.nom == "Medium"){
            this.facteur = 2;
            return this.facteur;
        }
        else if (this.nom == "Grande"){
            this.facteur = 3;
            return this.facteur;
        }
        else{
            console.log("Erreur!");
        }
    }
}

//classe Pizza
class Pizza {
    constructor(numéroPizza, taille, croute, fromages, garnitures, prixTotal, tempsCuisson, facteur) {
        this.numéroPizza = numéroPizza;
        this.taille = taille;
        this.croute = croute;
        this.fromages = fromages;
        this.garnitures = garnitures;
        this.prixTotal = prixTotal;
        this.tempsCuisson = tempsCuisson;
        this.facteur = facteur;
    }

    trouverTotal(){
        if (this.taille == "Petit"){
            this.prixTotal = ((this.croute.prix * this.facteur) + this.fromages.prix + this.garnitures.prix)*this.facteur;
            return this.prixTotal;
        }
        else if (this.taille == "Medium"){
            this.prixTotal = (this.croute.prix + (this.fromages.prix * this.facteur) + this.garnitures.prix)*this.facteur;
            return this.prixTotal;
        }
        if (this.taille == "Grande"){
            this.prixTotal = (this.croute.prix + this.fromages.prix + (this.garnitures.prix * this.facteur))*this.facteur;
            return this.prixTotal;
        }
        else{
            this.prixTotal = "Erreur!";
            return this.prixTotal;
        }
    }
}

//Test
//Pizza1
console.log("Pizza 1: ");
console.log("--------------------");
var taillePizza = new Taille ("Medium");
console.log("Le diamètre est : " + taillePizza.trouverDiamètre() + " po");
console.log("Le facteur est : " + taillePizza.trouverFacteur());

var pizza = new Pizza (1, taillePizza.nom, listeCroute[0], listeFromages[1], listeGarnitures[1], 0,  15, taillePizza.trouverFacteur());
console.log("Prix total de la pizza est de : " + pizza.trouverTotal() + " $");

//Passe une ligne
console.log();

//Pizza2
console.log("Pizza 2: ");
console.log("--------------------");
var taillePizza2 = new Taille ("Grande");
console.log("Le diamètre est : " + taillePizza2.trouverDiamètre() + " po");
console.log("Le facteur est : " + taillePizza2.trouverFacteur());

var pizza2 = new Pizza (1, taillePizza2.nom, listeCroute[2], listeFromages[2], listeGarnitures[2], 0,  15, taillePizza2.trouverFacteur());
console.log("Prix total de la pizza est de : " + pizza2.trouverTotal() + " $");

//Liste des pizzas
var listePizza = [
    {numéroPizza: pizza.numéroPizza, taille: pizza.taille, croute: pizza.croute, fromages: pizza.fromages, garnitures: pizza.garnitures, prixTotal: pizza.prixTotal, tempsCuisson: pizza.tempsCuisson}, 
    {numéroPizza: pizza2.numéroPizza, taille: pizza2.taille, croute: pizza2.croute, fromages: pizza2.fromages, garnitures: pizza2.garnitures, prixTotal: pizza2.prixTotal, tempsCuisson: pizza2.tempsCuisson}
];


//classe Commande
class Commande {
    constructor(numéroCommande, dateCommande, heureCommande, pizzas, totalCommande, client) {
        this.numéroCommande = numéroCommande;
        this.dateCommande = dateCommande;
        this.heureCommande = heureCommande;
        this.pizzas = pizzas;
        this.totalCommande = totalCommande;
        this.client = client;
    }

    calculerTpsTvq(){
        this.totalCommande + ((this.totalCommande * this.tps) + (this.totalCommande * this.tvq));
        return this.totalCommande;
    }

}
//Attribuer la valeur du total de la commande sans les taxes
var total = 0;
for (pizza of listePizza){
    total += pizza.prixTotal;
}   
var totalCommande = total;

//Création de la commande
var commande1 = new Commande(1, "2/12/2021", "10:58", listePizza, totalCommande, 0, 0);

//Attribuer la valeur du total de la commande avec les taxes
commande1.totalCommande = commande1.calculerTpsTvq();

//Passer une ligne
console.log();

//Total de la commande avec taxes
console.log("Total de la commande avec taxes: ");
console.log(commande1.totalCommande + " $");
//Entrée: "commande1.totalCommande"
//Résultat attendu: "77.03325"
//Résultat obtenu: "77.03325"

//classe Client
class Client {
    constructor(nom, prenom, numeroTelephone, courriel) {
        this.nom = nom;
        this.prenom = prenom;
        this.numeroTelephone = numeroTelephone;
        this.courriel = courriel;
    }
}

//Test
var client1 = new Client("Lambert", "Tom", "5142356543", "ltom@gmail.com")
console.log("Je m'appelle " + client1.nom + " " + client1.prenom);
//Résultat attendu : Je m'appelle Tom Lambert
//Résultat obtenu : Je m'appelle Tom Lambert