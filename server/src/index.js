const express = require('express');
const categories = require('./controllers/categoriesController.js');
//const signUp = require('./controllers/signUpController.js');

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
//app.use('/restaurants', signUp);

app.listen(port, () => {
    console.log("App listening at http://localhost:" + port)
});