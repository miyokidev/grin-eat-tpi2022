mapboxgl.accessToken = 'pk.eyJ1IjoibWl5b2tpIiwiYSI6ImNsMW96ejJ5NTAzMjQza3B0NHB3bHMxYncifQ.03AlBHWNd8MiauuZz_sSNQ';
const geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    types: 'address'
});

addEventListener("DOMContentLoaded", () => {
    btnSearch.setAttribute('disabled', '');
});

const searchBar = document.getElementById('idSearchBar');
const btnSearch = document.getElementById('idBtnSearch');
let address = "";

geocoder.addTo('#idSearchBar');

geocoder.on('result', (e) => {
    console.log(e);
    address = e.result.place_name;
    btnSearch.removeAttribute('disabled');
});

geocoder.on('clear', () => {
    btnSearch.setAttribute('disabled', '');
    address = "";
});

geocoder.on('loading', () => {
    btnSearch.setAttribute('disabled', '');
    address = "";
});

btnSearch.addEventListener("click", () => {
    sessionStorage.setItem('address', address);
    location.href = "restaurants.html"; 
});