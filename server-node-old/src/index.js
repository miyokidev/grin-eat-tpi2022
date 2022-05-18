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
const categories = require('./controllers/categoriesController.js');
const restaurants = require('./controllers/restaurantsController.js');
const menu_items = require('./controllers/menu_itemsController.js');

const app = express()
const port = process.env.PORT;

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
    res.setHeader('Content-Type', 'application/json')
    next();
});
app.use(express.json());

app.get('/', (req, res) => { res.status(200).json("Welcome to the API") });
app.use('/categories', categories);
app.use('/restaurants', restaurants);
app.use('/menu-items', menu_items);

app.listen(port, () => {
    console.log("App listening at http://localhost:" + port)
});