/*
     /\   /\ 
    //\\_//\\    ____
    \_     _/   /   /   Nom et Prénom: GRIN Brian
    / * * \    /^^^]    Enseignant : Monsieur Antoine Schmid    
    \_\O/_/    [   ]    Classe : I.DA-P4B
     /   \_    [   /    Date : 18.05.2022
     \     \_  /  /     Nom du projet : GrinEat-Server-Node
      [ [ /  \/ _/      Version du projet : 0.1
     _[ [ \  /_/        Cours : TPI
              
*/

const { response } = require('express');
const express = require('express');
const router = express.Router();
const { convertAdressToCoordoninate, haversineGreatCircleDistance } = require('../functions.js');
const Restaurant = require('../models/Restaurant.js');

router.post('/', (req, res) => {
    let adress = req.body.adress; // adresse du client.
    let radius = req.body.radius || 5; // rayon limite autour de l'adresse du client par défaut 5 si rien spécifié.
    let name = req.body.name || null; // filtre par nom si le client souhaite faire une recherche.
    let categories = req.body.categories || []; // filtre par catégorie si le client en séléctionne.

    let restaurants = [];
    let message = [];

    // On vérifie que le client nous a bien renseigné une adresse
    if (adress != null) {
        convertAdressToCoordoninate(adress).then(response => {
            let latFrom = response.latitude;
            let lonFrom = response.longitude;

            Restaurant.getRestaurants().then(restaurants => {
                // On crée une promesse pour récupérer les catégories de tout les restaurants 
                new Promise((resolve) => {
                    for (let i = 0; i < restaurants.length; i++) {
                        restaurants[i].categories = [];
                        let restaurant = new Restaurant();

                        restaurant.setIdRestaurant(restaurants[i].id);

                        restaurant.getRestaurantCategoriesFR().then(categories => {
                            for (let j = 0; j < categories.length; j++) {
                                restaurants[i].categories.push(categories[j].nameFrench || null);
                            }

                            if (i == restaurants.length - 1) {
                                resolve(restaurants);
                            }
                        });
                    }
                }).then(restaurants => {
                    let body = [];

                    for (let i = 0; i < restaurants.length; i++) {
                        let latTo = restaurants[i].latitude;
                        let lonTo = restaurants[i].longitude;

                        // On vérifie si le restaurant actuel (restaurants[i]) est dans le rayon demandé 
                        if (haversineGreatCircleDistance(latFrom, lonFrom, latTo, lonTo) < radius) {
                            // On vérifie ensuite si le client souhaite filtrer par des catégories
                            if (categories.length > 0) {
                                for (let j = 0; j < categories.length; j++) {
                                    // On vérifie si le restaurant actuel contient une des catégories par lesquels on souhaite filtrer et si le restaurant
                                    // n'est pas déjà ajouté dans le corps de notre réponse.
                                    if (restaurants[i].categories.includes(categories[j]) && !body.includes(restaurants[i])) {
                                        body.push(restaurants[i]);
                                    }
                                }
                            }
                            else {
                                body.push(restaurants[i]);
                            }
                        }
                    }

                    res.status(200).json(body);
                });
            });
        }).catch(error => {
            message.push("Adresse invalide");
            res.status(400).json({
                result: false,
                message: message
            });
        });
    } else {
        message.push("Aucune adresse n'est renseignée");
        res.status(400).json({
            result: false,
            message: message
        });
    }
});

module.exports = router;