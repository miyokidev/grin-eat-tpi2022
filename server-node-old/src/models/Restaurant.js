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

const Db = require('./Db.js');

class Restaurant {

    getIdRestaurant() {
        return this.idRestaurant;
    }

    setIdRestaurant(idRestaurant) {
        this.idRestaurant = idRestaurant;
    }

    getCreatedOn() {
        return this.createdOn;
    }

    setCreatedOn(createdOn) {
        this.createdOn = createdOn;
    }

    getEmail() {
        return this.email;
    }

    setEmail(email) {
        this.email = email;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getPhone() {
        return this.phone;
    }

    setPhone(phone) {
        this.phone = phone;
    }

    getWebsite() {
        return this.website;
    }

    setWebsite(website) {
        this.website = website;
    }

    getImage() {
        return this.image;
    }

    setImage(image) {
        this.image = image;
    }

    getStreet() {
        return this.street;
    }

    setStreet(street) {
        this.street = street;
    }

    getCp() {
        return this.cp;
    }

    setCp(cp) {
        this.cp = cp;
    }

    getCity() {
        return this.city;
    }

    setCity(city) {
        this.city = city;
    }

    getCountryId() {
        return this.countryId;
    }

    setCountryId(countryId) {
        this.countryId = countryId;
    }

    getLatitude() {
        return this.latitude;
    }

    setLatitude(latitude) {
        this.latitude = latitude;
    }

    getLongitude() {
        return this.longitude;
    }

    setLongitude(longitude) {
        this.longitude = longitude;
    }

    static async getRestaurants() {
        let sql = "SELECT * FROM restaurants;"
        const [rows, fields] = await Db.query(sql);
        return rows;
    }

    async getRestaurantCategoriesFR() {
        let sql = "SELECT nameFrench FROM categories LEFT JOIN restaurants_categories as rc ON categories.id = rc.categoryId LEFT JOIN restaurants as r ON rc.restaurantId = r.id WHERE r.id = ?;"
        const [rows, fields] = await Db.query(sql, [this.getIdRestaurant()]);
        return rows;
    }

    async getRestaurantCountry() {
        let sql = "SELECT * FROM `countries` WHERE id = ?;"
        const [rows, fields] = await Db.query(sql, [this.getCountryId()]);
        return rows;
    }
}
module.exports = Restaurant;