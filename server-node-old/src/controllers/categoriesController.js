const express = require('express');
const router = express.Router();
const Category = require('../models/Category.js');

router.get('/', (req, res) => {
    Category.getCategories().then(categories => {
        res.status(200).json(categories);
    })
});

module.exports = router;