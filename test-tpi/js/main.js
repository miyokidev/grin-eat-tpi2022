mapboxgl.accessToken = 'pk.eyJ1IjoibWl5b2tpIiwiYSI6ImNsMW96ejJ5NTAzMjQza3B0NHB3bHMxYncifQ.03AlBHWNd8MiauuZz_sSNQ';
const geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    types: 'address'
});

const searchBarContainer = document.getElementById('idSearchBarContainer');
const btnSearch = document.getElementById('idBtnSearch');
let address = {};

addEventListener("DOMContentLoaded", () => {
    btnSearch.disabled = true;
});

geocoder.addTo('#idSearchBarContainer');

geocoder.on('result', (e) => {
    address.coordinates = {latitude : e.result.center[1], longitude : e.result.center[0]};
    address.street = e.result.place_name;
});

btnSearch.addEventListener("click", () => {
    if (Object.keys(address).length !== 0) {
        sessionStorage.setItem('address', JSON.stringify(address));
        location.href = "restaurants.html";
    } else {
        alert("Adresse invalide");
    }
});

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