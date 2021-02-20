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