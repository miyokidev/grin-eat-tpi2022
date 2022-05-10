const search = {}; // objet qu'on envoit dans le body lors des appelles au serveur
search.categories = [];
const addressDisplay = document.getElementById("idAddress"); // Adresse affichée dans le nav
const logo = document.getElementById("idLogo"); // Logo du nav
let address = {}; // objet address contenant la rue et les coordonnées de l'adresse séléctionnée par l'utilisateur
let restaurants = []; // Tableau des restaurants récupérés du serveur
let categories = []; // Tableau des catégories récupérés du serveur
let map;
let markers;


addEventListener("DOMContentLoaded", () => {
    if (sessionStorage.getItem('address') == null) {
        location.href = "index.html";
    } else {
        address = JSON.parse(sessionStorage.getItem('address'));
        addressDisplay.innerText = address.text;

        map = L.map('map').setView([address.latitude, address.longitude], 15); // Map centrée sur l'adresse de l'utilisateur
        markers = L.layerGroup().addTo(map); // Groupe de marqueurs

        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWl5b2tpIiwiYSI6ImNsMW96ejJ5NTAzMjQza3B0NHB3bHMxYncifQ.03AlBHWNd8MiauuZz_sSNQ', {
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
        }).addTo(map);

        new Promise((resolve, reject) => {
            fetch('http://localhost/grin-eat-tpi2022/grineat-api/categories')
                .then(function (response) {
                    return response.json()
                }).then(function (json) {
                    resolve(json);
                }).catch(function (ex) {
                    reject(ex);
                })
        }).then(response => {
            categories = response.result;

            search.address = address.text;
            //search.radius = 10;
            sendData(display, "http://localhost/grin-eat-tpi2022/grineat-api/restaurants", search);
        });
    }
});

// Afficher un modal pour modifier son adresse quand on clique sur l'adresse.
addressDisplay.addEventListener("click", () => {
    console.log("test");
});

// Rediriger vers l'index si on clique sur le logo.
logo.addEventListener("click", () => {
    location.href = "index.html";
});

async function sendData(successCallBack, link, obj) {
    fetch(link, { method: 'POST', body: JSON.stringify(obj) }).then(function (response) {
        response.json().then(function (myJson) {
            restaurants = myJson.result;
            successCallBack();
        });
    });
}

function display() {
    var select = document.getElementById("idSelectCategory");
    // Remplir la liste déroulante de catégories.
    for (let i = 0; i < categories.length; i++) {
        var option = document.createElement('option');
        option.setAttribute('value', categories[i].id);
        option.appendChild(document.createTextNode(categories[i].nameFrench));
        select.appendChild(option);
    }

    // Pour supprimer
    //map.removeLayer(markers);

    // Placer les marqueurs et remplir la liste de restaurants affichée.
    for (let j = 0; j < restaurants.length; j++) {
        // Remplir la liste
        addToListDisplay(restaurants[j]);

        // Créer le marqueur et l'ajouter au groupe de marqueurs
        L.marker([restaurants[j].latitude, restaurants[j].longitude]).addTo(markers);
    }
}

function addToListDisplay(restaurant) {
    let card = document.createElement('div');
    card.classList.add("card");
    card.onclick = () => {
        flyToMarker(restaurant);
    };
    card.innerHTML = `<img class="card-img" src="${restaurant.image}" alt="${restaurant.name}'s image">
    <div class="card-body">
        <p class="card-text text-black">${restaurant.name}</p>
        <a href="#" class="btn btn-primary">Commander</a>
    </div>`;

    document.getElementById("idListDisplay").appendChild(card);
}

function flyToMarker(restaurant) {
    map.flyTo([restaurant.latitude, restaurant.longitude], 15, {
        animate: true,
        duration: 2 // en seconde
    });
}

function categoryChanged() {
    var select = document.getElementById("idSelectCategory");
    search.categories = [];

    search.categories.push(select.value);
}

function changed() {
    //sendData(display, "http://localhost/grin-eat-tpi2022/grineat-api/restaurants", search);
}


