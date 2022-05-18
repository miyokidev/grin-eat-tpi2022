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
const Category = require('../models/Category.js');

router.get('/', (req, res) => {
    Category.getCategories().then(categories => {
        res.status(200).json(categories);
    })
});

module.exports = router;