//Description : Le fichier lesFonctions.js comporte les fonctions de vérifications d'entrées lors de l'entrée des donnée du client.
//Auteur : Henrique Fernandes et Rémi Lapointe
//Date : 2/20/2021

//Fonction de vérification du numéro de téléphone
function verifierNumeroDeTelephone(numero) {
    //Vérification de longueur 9 et des chiffres
    if (numero.length == 10 && !isNaN(numero) == true){
        console.log("Numero accepté!");
        return true;
    }
    else {
        alert("Numéro de téléphone invalide");
        console.log("ERREUR: Entrez un numéro valide!");
        return false;
    }
}

//Fonction de vérification des entiers
function verifierEntier(entier) {
    if (!isNaN(entier) && Number.isInteger(parseFloat(entier))) {
        console.log("Entier accepté!");
        return true;
    }
    else {
        console.log("ERREUR: Entrez un entier");
        return false;
    }
}

//Fonction de vérification du code postal
function verifierCodePostal(codePostal) {
    if (codePostal.length == 6) {

        //RegEx qui vérifie si chaque paire est une lettre et un chiffre
        var regEx = /^([A-Z][0-9])+$/
        if (regEx.test(codePostal)){
            console.log("Le code postal est accepté!");
            return true;
        }
        else {
            console.log("ERREUR: Entrez un code postal valide")
            return false;
        }
    }
    else {
        console.log("ERREUR: Entrez un code postal valide")
        return false;
    }

}

function afficherOuCacher() {
    var element = document.getElementById("sousMenu");  //Language DOM
    if (element.className == "cache") {
        element.classList.remove("cache");
    } else {
        element.classList.add("cache");
    }

    //alert("lien cliqué");
    //console.log("lien cliqué")
}

/* 
@param {string} selectId : id du select à charger 
@param {object} liste : liste avec les éléments dont le nom sera chargé dans le select
*/
function chargerListeSelect(selectId, liste) {
    var s = "<option></option>";
    for (var i = 0; i < liste.length; i++) {
        s += '<option value="' + i + '">' + liste[i].lireNom() + '</option>';
    }
    var element = document.getElementById(selectId);
    element.innerHTML = s;
}

function ajouterElement(id, sonTd, laListe){
    var elem = document.getElementById(id).value

    if (elem == ""){
        alert("Vous devez choisir un ingrédient");
        return;
    }

    var liste = document.getElementById(sonTd);       //Créer item
    var item = document.createElement("td");                //Créer liste
    var txtnode = document.createTextNode(elem + ", ");             
    item.appendChild(txtnode); 
    liste.appendChild(item);
    if (id = "fromagePizza"){
        listeDeFrom.push(elem)
        console.log(listeDeFrom)
        return;
    }
    if (id = "garniturePizza"){
        listeDeGarn.push(elem)
        console.log(listeDeGarn)
        return;
    }
    if (id = "pizzas"){
        listeDePizz.push(elem)
        console.log(listeDePizz)
        return;
    }

}
function supprimerElement(id){
    var suppri = document.getElementById(id);
    suppri.innerHTML = "";
    if (id = "fromagePizza"){
        listeDeFrom = []
        console.log(listeDeFrom)
        return;
    }
    if (id = "garniturePizza"){
        listeDeGarn = []
        console.log(listeDeGarn)
        return;
    }
    if (id = "pizzas"){
        listeDePizz = []
        console.log(listeDePizz)
        return;
    }
}

