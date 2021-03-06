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

const search = {}; // objet qu'on envoit dans le body lors des appelles au serveur
search.categories = [];
const addressDisplay = document.getElementById("idAddress"); // Adresse affichée dans le nav
const searchName = document.getElementById("idSearchName");
const logo = document.getElementById("idLogo"); // Logo du nav
let address = {}; // objet address contenant la rue et les coordonnées de l'adresse séléctionnée par l'utilisateur
let restaurants = []; // Tableau des restaurants récupérés du serveur
let categories = []; // Tableau des catégories récupérés du serveur
let map;
let markers;

var iconHome = L.icon({
    iconUrl: './assets/images/home.png',
    iconSize: [41, 41], // size of the icon
    iconAnchor: [20, 41]
});

var iconRestaurant = L.icon({
    iconUrl: './assets/images/restaurant.png',
    iconSize: [41, 41], // size of the icon
    iconAnchor: [20, 41]
});


addEventListener("DOMContentLoaded", () => {
    if (sessionStorage.getItem('address') == null) {
        location.href = "index.html";
    } else {
        address = JSON.parse(sessionStorage.getItem('address'));

        // On fait une promesse pour d'abbord récupérer les catégories données par l'API pour remplir le select quand c'est terminé on resolve pour effectuer la suite
        new Promise((resolve, reject) => {
            fetch('http://localhost/grin-eat-tpi2022/grineat-api/categories')
                .then(function (response) {
                    return response.json()
                }).then(function (json) {
                    categories = json.result;
                    var select = document.getElementById("idSelectCategory");

                    // Remplir la liste déroulante de catégories.
                    for (let i = 0; i < categories.length; i++) {
                        var option = document.createElement('option');
                        option.setAttribute('value', categories[i].id);
                        option.appendChild(document.createTextNode(categories[i].nameFrench));
                        select.appendChild(option);
                    }
                    resolve();
                }).catch(function (ex) {
                    reject(ex);
                })
        }).then(() => {
            search.address = address.street;
            if (address.coordinates != null) {
                if (address.coordinates.latitude != null && address.coordinates.longitude != null) {
                    search.coordinates = address.coordinates;
                }
            }
            radiusChanged();
            sendData(displayMapList, "http://localhost/grin-eat-tpi2022/grineat-api/restaurants", search);
        });
    }
});

// Afficher un modal pour modifier son adresse quand on clique sur l'adresse.
addressDisplay.addEventListener("click", () => {
    flyToMarker(address.coordinates);
});

// Rediriger vers l'index si on clique sur le logo.
logo.addEventListener("click", () => {
    sessionStorage.removeItem('address');
    location.href = "index.html";
});

// A chaque fois que l'utilisateur relâche une touche la variable search prend en valeur la saisie et effectue un appel au serveur
searchName.addEventListener("keyup", () => {
    search.name = searchName.value;
    changed();
});

// Fonction pour appeler le serveur API cette fonction est appelé à chaque fois qu'on filtre et la première fois quand on arrive sur la page
async function sendData(successCallBack, link, obj) {
    fetch(link, { method: 'POST', body: JSON.stringify(obj) }).then(function (response) {
        response.json().then(function (myJson) {
            // On vérifie si les données qu'on a déjà sont similaires à ceux qu'on reçoit pour éviter de recharger toute la page si le contenu est le même
            if (JSON.stringify(restaurants) != JSON.stringify(myJson.result.restaurants) || restaurants.length == 0) {
                restaurants = myJson.result.restaurants;
                if (address != myJson.result.address) {
                    address = myJson.result.address;
                    sessionStorage.setItem('address', JSON.stringify(address));
                }
                // Méthode similaire à un pattern Singleton si c'est la première fois qu'on appelle cette méthode on crée la carte interactive
                if (map == null) {
                    map = L.map('map').setView([address.coordinates.latitude, address.coordinates.longitude], 15); // Map centrée sur l'adresse de l'utilisateur

                    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWl5b2tpIiwiYSI6ImNsMW96ejJ5NTAzMjQza3B0NHB3bHMxYncifQ.03AlBHWNd8MiauuZz_sSNQ', {
                        maxZoom: 18,
                        id: 'mapbox/streets-v11',
                        tileSize: 512,
                        zoomOffset: -1,
                    }).addTo(map);
                } else {
                    // Pour supprimer les marqueurs
                    map.removeLayer(markers);
                }
                // Pour supprimer les restaurants de la liste
                document.getElementById("idListDisplay").innerHTML = "";
                addressDisplay.innerText = address.street != null ? address.street : "";
                successCallBack();
            }
        });
    });
}

// Méthode pour ajouter les marqueurs à la carte interactive et ajouter les restaurants dans la liste dynamique
function displayMapList() {
    // Placer les marqueurs et remplir la liste de restaurants affichée.
    markers = L.featureGroup().addTo(map); // Groupe de marqueurs
    // On ajoute un marqueur à l'adresse de l'utilisateur
    L.marker([address.coordinates.latitude, address.coordinates.longitude], { icon: iconHome }).addTo(markers);
    for (let j = 0; j < restaurants.length; j++) {
        // Remplir la liste
        addToListDisplay(restaurants[j]);

        // Créer le marqueur et l'ajouter au groupe de marqueurs
        L.marker([restaurants[j].latitude, restaurants[j].longitude], { icon: iconRestaurant }).addTo(markers).on('click', function(e) {
            let list = document.getElementById("idListDisplay");
            let card = document.getElementById(`restaurant${restaurants[j].id}`);

            list.scrollTop = card.offsetTop;
        });;
    }

    map.flyToBounds(markers.getBounds().pad(0.1), { duration: 1 }); // On recentre la carte par rapport au marqueur le plus eloigné visible
}

// Fonction pour ajouter dans la liste dynamique les restaurants
function addToListDisplay(restaurant) {
    let card = document.createElement('div');
    card.setAttribute('id', `restaurant${restaurant.id}`);
    card.classList.add("card");
    card.onclick = (event) => {
        const isButton = event.target.nodeName === 'BUTTON';
        if (isButton) {
            location.href = `menu.html?idRestaurant=${restaurant.id}`;
        } else {
            flyToMarker(restaurant);
        }
    };
    card.innerHTML = `<img src="${restaurant.image}" alt="${restaurant.name}'s image">
    <div class="card-body">
        <p>${restaurant.name}</p>
        <button >Commander</button>
    </div>`;

    document.getElementById("idListDisplay").appendChild(card);
}

// Fonction pour se déplacer vers un point sur la carte
function flyToMarker(location) {
    map.flyTo([location.latitude, location.longitude], 18, {
        animate: true,
        duration: 2 // en seconde
    });
}

// Fonction appelée quand on change la catégorie dans le select
function categoryChanged() {
    var select = document.getElementById("idSelectCategory");
    search.categories = [];

    if (select.value != "") {
        search.categories.push(select.value);
    }
}

// Fonction appelée quand on change le rayon
function radiusChanged() {
    var input = document.getElementById("idInputRadius");

    search.radius = input.value;
}

// Fonction appelée quand un des champs de filtre à changer pour appeler le serveur
function changed() {
    sendData(displayMapList, "http://localhost/grin-eat-tpi2022/grineat-api/restaurants", search);
}


