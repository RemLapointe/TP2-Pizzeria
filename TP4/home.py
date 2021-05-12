def ajouterObject(objectJson, fichier):
    file = open(fichier, "r")
    data = json.load(file)          
    file.close()

    data.append(objectJson)
    #print(data)

    file = open(fichier, "w")
    json.dump(data, file, indent=4)        
    file.close()

def obtenirListe(fichier):
    file = open(fichier, "r")
    liste = json.load(file)
    file.close()
    return liste


from flask import Flask, render_template, request, redirect
import json

app = Flask(__name__)

@app.route("/")
def rediriger():
    return redirect("http://127.0.0.1:5000/croute") 



@app.route("/croute", methods=["POST", "GET"])
def croute():
    retourCroute = ""


    if request.method == "POST":
        crouteJson = json.loads(request.form["instanceCroute"])         #json.loads -> met string en objet
        #print(crouteJson)

        ajouterObject(crouteJson, "croutes.json")


        if crouteJson['nom'] != "" and crouteJson['prix'] != "" and crouteJson['poids'] != "" and crouteJson["type"] != "":
            retourCroute = 'Croute enregistré'
        else:
            retourCroute = ""


        return render_template("croute.html", retourMsg=retourCroute)
    else:
        return render_template("croute.html", retourMsg=retourCroute)


@app.route("/fromage", methods=["POST", "GET"])
def fromage():
    retourFromage = ""
    if request.method == "POST":
        fromageJson = json.loads(request.form["instanceFromage"])
        
        ajouterObject(fromageJson, "fromages.json")

        if fromageJson['nom'] != "" and fromageJson['prix'] != "" and fromageJson['poids'] != "":
            retourFromage = 'Fromage enregistré'
        else:
            retourFromage = ""

        return render_template("fromage.html", retourMsg=retourFromage)
    else:
        return render_template("fromage.html", retourMsg=retourFromage)


@app.route("/garniture", methods=["POST", "GET"])
def garniture():
    retourGarniture = ""
    if request.method == "POST":
        garnitureJson = json.loads(request.form["instanceGarniture"])
        
        ajouterObject(garnitureJson, "garnitures.json")

        if garnitureJson['nom'] != "" and garnitureJson['prix'] != "" and garnitureJson['poids'] != "":
            retourGarniture = 'Garniture enregistrée'
        else:
            retourGarniture = ""

        return render_template("garniture.html", retourMsg=retourGarniture)
    else:
        return render_template("garniture.html", retourMsg=retourGarniture)

@app.route("/client", methods=["POST", "GET"])
def client():
    retourClient = ""
    if request.method == "POST":
        clientJson = json.loads(request.form["instanceClient"])
        
        ajouterObject(clientJson, "clients.json")

        if clientJson['nom'] != "" and clientJson['prenom'] != "" and clientJson['telephone'] != "" and clientJson['courriel'] != "":
            retourClient = 'Client enregistré'
        else:
            retourClient = ""

        return render_template("client.html", retourMsg=retourClient)
    else:
        return render_template("client.html", retourMsg=retourClient)


@app.route("/pizza", methods=["POST", "GET"])
def pizza():
    retourPizza = ""
    retourPrix = 0
    prixGarniture = 0
    prixFromage = 0
    prixCroute = 0
    prixTotal = 0

    listeTailles = obtenirListe("tailles.json")
    listeCroutes = obtenirListe("croutes.json")
    listeFromages = obtenirListe("fromages.json")
    listeGarnitures = obtenirListe("garnitures.json")


    if request.method == "POST":
        pizzaJson = json.loads(request.form["instancePizza"])         #json.loads -> met string en objet
        

        for item in pizzaJson['garnitures']:
            prixGarniture = prixGarniture + item.get('prix');

        for item in pizzaJson['fromages']:
            prixFromage = prixFromage + item.get('prix');
        
        for item in pizzaJson['croute']:
            prixCroute = pizzaJson['croute']['prix'];
            
        prixTotal = prixTotal + prixFromage + prixGarniture + prixCroute;

        pizzaJson['prixComplet'] = prixTotal

        ajouterObject(pizzaJson, "pizzas.json")

        if pizzaJson['numero'] != "" and pizzaJson['taille'] != "" and pizzaJson['croute'] != "" and pizzaJson['fromages'] != "" and pizzaJson['garnitures'] != "" and pizzaJson['tempsCuisson'] != "" and pizzaJson['prixComplet'] != "":
            retourPizza = 'Pizza enregistrée'
        else:
            retourPizza = ""

        return render_template("pizza.html", listePyTailles=listeTailles, listePyCroutes=listeCroutes, listePyFromages=listeFromages, listePyGarnitures=listeGarnitures, retourMsg=retourPizza, retourPrix=prixTotal)
    else:
        return render_template("pizza.html", listePyTailles=listeTailles, listePyCroutes=listeCroutes, listePyFromages=listeFromages, listePyGarnitures=listeGarnitures, retourMsg=retourPizza, retourPrix=prixTotal)


@app.route("/commande", methods=["POST", "GET"])
def commande():
    retourCommande = ""
    prixCommande = 0

    listePizzas = obtenirListe("pizzas.json")
    listeClients = obtenirListe("clients.json")
    

    if request.method == "POST":
        commandeJson = json.loads(request.form["instanceCommande"])         #json.loads -> met string en objet


        for item in commandeJson['pizzas']:
            prixCommande = prixCommande + item.get('prixComplet');

    
        prixCommande = prixCommande + (14.975 * prixCommande / 100)


        ajouterObject(commandeJson, "commandes.json")

        if commandeJson['numero'] != "" and commandeJson['client'] != "" and commandeJson['date'] != "" and commandeJson['heure'] != "" and commandeJson['pizzas']:
            retourCommande = 'Commande enregistrée'
        else:
            retourCommande = ""

        return render_template("commande.html", listePyPizzas=listePizzas, listePyClients=listeClients, retourMsg=retourCommande, retourCommande=prixCommande)
    else:
        return render_template("commande.html", listePyPizzas=listePizzas, listePyClients=listeClients, retourMsg=retourCommande, retourCommande=prixCommande)


#json.dump ->en format json, enregistre date dans file avec bon indentation
#fromageJson = json.loads(request.form["instanceFromage"]) -> lire fichier et l'interprete comme élément json pour l'ajouter
















if __name__ == "__main__":
    app.run()