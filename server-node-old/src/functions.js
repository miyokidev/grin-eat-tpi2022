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

const axios = require('axios').default;

async function convertAdressToCoordoninate(adress) {
    return new Promise((resolve, reject) => {
        encoded = encodeURIComponent(adress);

        axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encoded}.json?access_token=${process.env.MAPBOX_TOKEN}`)
            .then(function (response) {
                let adressFound = response.data.features[0].place_name;
                let latitudeAdrr = response.data.features[0].geometry.coordinates[1];
                let longitudeAdrr = response.data.features[0].geometry.coordinates[0];

                resolve({ adress: adressFound, latitude: latitudeAdrr, longitude: longitudeAdrr });
            })
            .catch(function (error) {
                console.table(error);
                reject("Invalid adress");
            });
    });
}

function haversineGreatCircleDistance(
    latitudeFrom, longitudeFrom, latitudeTo, longitudeTo, earthRadius = 6371) {
    // convert from degress to radians
    let latFrom = deg2rad(latitudeFrom);
    let lonFrom = deg2rad(longitudeFrom);
    let latTo = deg2rad(latitudeTo);
    let lonTo = deg2rad(longitudeTo);

    let latDelta = latTo - latFrom;
    let lonDelta = lonTo - lonFrom;

    let angle = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(latDelta / 2), 2) +
        Math.cos(latFrom) * Math.cos(latTo) * Math.pow(Math.sin(lonDelta / 2), 2)));

    return angle * earthRadius;
}

function deg2rad(degrees) {
    var pi = Math.PI;
    return degrees * pi / 180;
}

module.exports = { convertAdressToCoordoninate, haversineGreatCircleDistance };