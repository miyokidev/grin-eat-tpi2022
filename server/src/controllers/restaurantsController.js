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

    let message = [];

    // On vérifie que le client nous a bien renseigné une adresse
    if (adress != null) {
        convertAdressToCoordoninate(adress).then(response => {
            let latFrom = response.latitude;
            let lonFrom = response.longitude;

            /* TROUVEZ  UN MOYEN DE RECUPERER LES CATEGORIES SANS PUSH DANS LE BODY DES DOUBLONS ET ENCODER EN JSON*/
            Restaurant.getRestaurants().then(restaurants => {
                let body = [];

                for (let i = 0; i < restaurants.length; i++) {
                    let latTo = restaurants[i].latitude;
                    let lonTo = restaurants[i].longitude;

                    if (haversineGreatCircleDistance(latFrom, lonFrom, latTo, lonTo) < radius) {
                        if (categories.length > 0) {

                        }
                        else {
                            body.push(restaurants[i]);
                        }
                    }
                }

                res.status(200).json(body);
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