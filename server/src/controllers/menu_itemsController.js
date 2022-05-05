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