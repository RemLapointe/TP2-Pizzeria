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
    lireAliments() {
        return "nom: " + this.nom + ", poids: " + this.poids;
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
    lireCroute() {
        return this.lireAliments() +
            ", type: " + this.type +
            ", taille: " + this.taille +
            ", prix: " + this.prix;
    }
    lireNom(){
        return this.nom;
    }
}

//Liste des croutes
var fausseCroute1 = new Croute ("Enfant", 8, "mince", 6, "3cm")
var fausseCroute2 = new Croute ("Ado", 10, "épaisse", 8, "6cm")
var fausseCroute3 = new Croute ("Adulte", 12, "épaisse", 10, "8cm")
var listeCroute = [fausseCroute1, fausseCroute2, fausseCroute3];
//classe fromage
class Fromage extends Aliment {
    constructor(nom, poids, prix) {
        super(nom, poids);
        this.prix = prix;
    }
    lireFromage() {
        return this.lireAliments() + ", prix: " + this.prix;
    }
    lireNom(){
        return this.nom;
    }
}
//Liste des fromages
var fausseFromage1 = new Fromage("Parmesan", 2, 2);
var fausseFromage2 = new Fromage("Cheddar", 2, 3);
var fausseFromage3 = new Fromage("Mozzarella", 2, 3);
var listeFromages = [fausseFromage1, fausseFromage2, fausseFromage3];

//classe garniture
class Garniture extends Aliment {
    constructor(nom, poids, prix) {
        super(nom, poids);
        this.prix = prix;
    }
    lireGarniture() {
        return this.lireAliments() + ", prix: " + this.prix;
    }
    lireNom(){
        return this.nom
    }
}
//Liste des garnitures
var fausseGarniture1 = new Garniture("Poivron", 2, 3);
var fausseGarniture2 = new Garniture("Champignon", 1, 1);
var fausseGarniture3 = new Garniture("Oignon", 1, 2);
var listeGarnitures = [fausseGarniture1, fausseGarniture2, fausseGarniture3];

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
    lireTaille() {
        return "nom:" + this.nom + ", diametre:" + this.diametre +
            ", facteur:" + this.facteur;
    }
    lireNom(){
        return this.nom;
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
    lireNom() { // on le nomme "lireNom" pour simplifier la codification
        return "Pizza # " + this.numéroPizza;
    }
    lirePizza() {
        return "numéro: " + this.numéroPizza +
            ", taille: {" + this.taille.lireTaille() + "} " +
            ", croûte: {" + this.croute.lireCroute() + "} " +
            ", fromages: [" + this.lireFromages() + "] " +
            ", garnitures: [" + this.lireGarnitures() + "] " +
            ", prix complet: " + this.prixTotal +
            ", temps de cuisson: " + this.tempsCuisson;
    }
    lireFromages() {
        var s = "";
        for (const i in this.fromages) {
            s += "{" + this.fromages[i].lireFromage() + "}, ";
        }
        s = s.substr(0, s.length - 2);
        return s;
    }
    lireGarnitures() {
        var s = "";
        for (const i in this.garnitures) {
            s += "{" + this.garnitures[i].lireGarniture() + "}, ";
        }
        s = s.substr(0, s.length - 2);
        return s;
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
var taillePizzaP = new Taille ("Petite");
var taillePizzaM = new Taille ("Medium");
console.log("Le diamètre est : " + taillePizzaM.trouverDiamètre() + " po");
console.log("Le facteur est : " + taillePizzaM.trouverFacteur());

var pizza1 = new Pizza (1, taillePizzaM.nom, listeCroute[0], listeFromages[1], listeGarnitures[1], 0,  15, taillePizzaM.trouverFacteur());
var pizza3 = new Pizza (3, taillePizzaP.nom, listeCroute[2], listeFromages[1], listeGarnitures[2], 0,  15, taillePizzaP.trouverFacteur());
console.log("Prix total de la pizza est de : " + pizza1.trouverTotal() + " $");

//Passe une ligne
console.log();

//Pizza2
console.log("Pizza 2: ");
console.log("--------------------");
var taillePizzaG = new Taille ("Grande");
console.log("Le diamètre est : " + taillePizzaG.trouverDiamètre() + " po");
console.log("Le facteur est : " + taillePizzaG.trouverFacteur());

var pizza2 = new Pizza (2, taillePizzaG.nom, listeCroute[2], listeFromages[2], listeGarnitures[2], 0,  15, taillePizzaG.trouverFacteur());
console.log("Prix total de la pizza est de : " + pizza2.trouverTotal() + " $");

//Liste taille
var listeTaille = [taillePizzaP, taillePizzaM, taillePizzaG]

//Liste des pizzas
var listePizza = [pizza1, pizza2, pizza3];


//classe Commande
class Commande {
    constructor(numéroCommande, dateCommande, heureCommande, pizzas, totalCommande, client, tps, tvq) {
        this.numéroCommande = numéroCommande;
        this.dateCommande = dateCommande;
        this.heureCommande = heureCommande;
        this.pizzas = pizzas;
        this.totalCommande = totalCommande;
        this.client = client;
        this.tps = 0.05;
        this.tvq = 0.09975;
    }

    calculerTpsTvq(){
        this.totalCommande = this.totalCommande + ((this.totalCommande * this.tps) + (this.totalCommande * this.tvq));
        return this.totalCommande;
    }

    lireCommande() {
        return "numéro: " + this.numéroCommande +
            ", client: {" + this.client.lireClient() + "}" +
            ", date: " + this.dateCommande + ", heure: " + this.heureCommande +
            ", pizzas: [" + this.lirePizzas() + "]" +
            ", montant total: " + this.totalCommande;
    }
    lirePizzas() {
        var s = "";
        for (const i in this.pizzas) {
            s += "{" + this.pizzas[i].lirePizza() + "}, ";
        }
        s = s.substr(0, s.length - 2);
        return s;
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

//Passer une ligne
console.log();

//Total de la commande avec taxes
console.log("Total de la commande: ");
console.log("--------------------");
console.log("Total avec les taxes : " + Math.round(commande1.calculerTpsTvq()*100)/100 + " $");

//classe Client
class Client {
    constructor(nom, prenom, numeroTelephone, courriel) {
        this.nom = nom;
        this.prenom = prenom;
        this.numeroTelephone = numeroTelephone;
        this.courriel = courriel;
    }
    lireClient() {
        return "nom: " + this.nom + ", prénom: " + this.prenom +
            ", téléphone: " + this.numeroTelephone + ", courriel: " + this.courriel;
    }
    lireNom(){
        return this.nom
    }
}
var fausseClient1 = new Client("Eliot", "Billy", 4501231234, "be@mail.ca");
var fausseClient2 = new Client("Uzumaki", "Naruto", 4507896789, "nu@mail.ca");
var fausseClient3 = new Client("Uchiha", "Sasuke", 4501582765, "su@mail.ca");
var listeClient = [fausseClient1, fausseClient2, fausseClient3];


var listeDeFrom = []
var listeDeGarn = []
var listeDePizz = []