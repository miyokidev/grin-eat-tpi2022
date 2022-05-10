mapboxgl.accessToken = 'pk.eyJ1IjoibWl5b2tpIiwiYSI6ImNsMW96ejJ5NTAzMjQza3B0NHB3bHMxYncifQ.03AlBHWNd8MiauuZz_sSNQ';
const geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    types: 'address'
});

const searchBar = document.getElementById('idSearchBar');
const btnSearch = document.getElementById('idBtnSearch');
const logo = document.getElementById('idLogo');
let address;

geocoder.addTo('#idSearchBar');

geocoder.on('result', (e) => {
    address = {};
    address.latitude = e.result.center[1];
    address.longitude = e.result.center[0];
    address.text = e.result.place_name;
});

btnSearch.addEventListener("click", () => {
    if (address != null) {
        sessionStorage.setItem('address', JSON.stringify(address));
        location.href = "restaurants.html";
    } else {
        alert("Adresse invalide");
    }
});

logo.addEventListener("click", () => {
    location.href = "#";
});