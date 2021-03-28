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
        console.log("ERREUR: Entrez un numéro valide!");
        return false;
    }
}

//Test 1
verifierNumeroDeTelephone("222333444");
//Entrée: "222333444"
//Résultat attendu: "ERREUR: Entrez un numéro valide!"
//Résultat obtenu: "ERREUR: Entrez un numéro valide!"

//Test 2
verifierNumeroDeTelephone("2223334444");
//Entrée: "2223334444"
//Résultat attendu: ""Numero accepté!"
//Résultat obtenu: "Numero accepté!"

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

//Test 3
verifierEntier("123");
//Entrée: "123"
//Résultat attendu: "Entier accepté!"
//Résultat obtenu: "Entier accepté!"

//Test 4
verifierEntier("3.2");
//Entrée: "3.2"
//Résultat attendu: "ERREUR: Entrez un entier"
//Résultat obtenu: "ERREUR: Entrez un entier"

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

//Test 5
verifierCodePostal("J3G4P5");
//Entrée: "J3G4P5"
//Résultat attendu: "Le code postal est accepté!"
//Résultat obtenu: "Le code postal est accepté!"

//Test 6
verifierCodePostal("JGP345");
//Entrée: "JGP345"
//Résultat attendu: "ERREUR: Entrez un code postal valide"
//Résultat obtenu: "ERREUR: Entrez un code postal valide"



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
    var element = document.getElementById("taillePizza");
    element.innerHTML = s;
}