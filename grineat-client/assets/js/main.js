/*
     /\   /\ 
    //\\_//\\    ____
    \_     _/   /   /   Nom et Prénom: GRIN Brian
    / * * \    /^^^]    Enseignant : Monsieur Antoine Schmid    
    \_\O/_/    [   ]    Classe : I.DA-P4B
     /   \_    [   /    Date : 18.05.2022
     \     \_  /  /     Nom du projet : GrinEat-Client
      [ [ /  \/ _/      Version du projet : 1.0
     _[ [ \  /_/        Cours : TPI
              
*/

// Création de l'autocomplétion qu'on récupère grâce au token publique de MapBox
mapboxgl.accessToken = 'pk.eyJ1IjoibWl5b2tpIiwiYSI6ImNsMW96ejJ5NTAzMjQza3B0NHB3bHMxYncifQ.03AlBHWNd8MiauuZz_sSNQ';
const geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    types: 'address'
});

// Récupération des éléments de la page
const searchBarContainer = document.getElementById('idSearchBarContainer'); // Conteneur du champ de recherche
const btnSearch = document.getElementById('idBtnSearch'); // Bouton pour effectuer la recherche
let address = {}; // objet address qui prendra en propriété le resultat de l'autocomplete ou la saisie de l'utilisateur dans le champ

// Evenement lors du chargement de la page
addEventListener("DOMContentLoaded", () => {
    btnSearch.disabled = true; // On désactive par défaut le bouton rechercher lors du chargement car le champ de saisi est vide
    document.getElementsByClassName("mapboxgl-ctrl-geocoder--input")[0].setAttribute("placeholder", "Ex: Quai Capo D'istria 9, 1205 Genève"); // On ajoute un placeholder au champ crée par MapBox pour l'autocomplétion
});

geocoder.addTo('#idSearchBarContainer'); // Ajout du champ d'autocomplétion dans le conteneur

// Evenement se lançant lorsque l'utilisateur clique sur une proposition de l'autocomplétion
geocoder.on('result', (e) => {
    address.coordinates = {latitude : e.result.center[1], longitude : e.result.center[0]};
    address.street = e.result.place_name;
});

// Evenement lancé lorsque l'utilisateur clique sur le bouton recherché
btnSearch.addEventListener("click", () => {
    // On vérifie si l'objet address contient des informations
    if (Object.keys(address).length !== 0) {
        sessionStorage.setItem('address', JSON.stringify(address)); // Sauvegarde en session de l'adresse de la recherche pour s'en servir sur la page suivante
        location.href = "restaurants.html";
    } else {
        alert("Adresse invalide");
    }
});

// Evenement lancé à chaque fois que l'utilisateur relâche une touche du clavier sur le champ
searchBarContainer.addEventListener('keyup', () => {
    var searchBar = document.getElementsByClassName("mapboxgl-ctrl-geocoder--input")[0];

    address.coordinates = null;
    address.street = searchBar.value;

    if (searchBar.value === "") {
        btnSearch.disabled = true;
    } else {
        btnSearch.disabled = false;
    }
});