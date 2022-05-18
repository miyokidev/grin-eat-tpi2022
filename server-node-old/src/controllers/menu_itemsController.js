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

const express = require('express');
const router = express.Router();
const MenuItems = require('../models/MenuItems.js');

router.get('/:id', (req, res) => {
    let myMenuItems = new MenuItems();
    let idRestaurant = req.params.id;

    myMenuItems.setRestaurantId(idRestaurant);

    myMenuItems.findById().then(result => {
        res.status.json(result);
    });
});

module.exports = router;