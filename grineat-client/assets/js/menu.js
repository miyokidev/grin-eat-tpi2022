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

const logo = document.getElementById("idLogo"); // Logo du nav
// Variables pour la récupération de l'id du restaurant en paramètre dans l'URL
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
// Variable des différents éléments pour l'affichage des informations
const image = document.getElementById("idImage");
const nameRestaurant = document.getElementById("idName");
const cp = document.getElementById("idCp");
const city = document.getElementById("idCity");
const street = document.getElementById("idStreet");
const phone = document.getElementById("idPhone");
const categories = document.getElementById("idCategories");

// Rediriger vers l'index si on clique sur le logo.
logo.addEventListener("click", () => {
    sessionStorage.removeItem('address');
    location.href = "index.html";
});

addEventListener("DOMContentLoaded", () => {
    if (sessionStorage.getItem('address') == null) {
        location.href = "index.html";
    } else {
        let idRestaurant = urlParams.get('idRestaurant'); // Récupération de la valeur donné dans l'URL
        fetch(`http://localhost/grin-eat-tpi2022/grineat-api/restaurants/${idRestaurant}/menus`)
            .then(function (response) {
                return response.json()
            }).then(function (json) {
                displayInfoMenuItems(json.result);
            }).catch(function (ex) {
                console.log(ex);
            });
    }
});

// Fonction appelée en callback après la récupération des données avec fetch
function displayInfoMenuItems(restaurant) {
    // On assigne pour tout les éléments de la description les données du restaurant
    image.setAttribute("src", restaurant.info.image);
    nameRestaurant.innerText = restaurant.info.name;
    cp.innerText = restaurant.info.cp;
    city.innerText = restaurant.info.city;
    street.innerText = restaurant.info.street;
    phone.innerText = restaurant.info.phone;
    // On affiche que les 2 premières catégories du restaurant
    for (let j = 0; j < restaurant.info.categories.length; j++) {
        if (j < 2) {
            let category = document.createElement('p');
            category.innerText = restaurant.info.categories[j];
            categories.appendChild(category);
        } else {
            break;
        }
    }

    // On rempli la liste des menus
    document.getElementById("idListMenuItems").innerHTML = "";
    for (let i = 0; i < restaurant.menu_items.length; i++) {
        let card = document.createElement('div');
        card.setAttribute('id', `item${restaurant.menu_items[i].id}`);
        card.classList.add("card-menu");
        card.innerHTML = `<img src="${restaurant.menu_items[i].image}" alt="${restaurant.menu_items[i].name}'s image">
        <div class="card-menu-body">
            <p>${restaurant.menu_items[i].name}</p>
            <p class="card-menu-description">${restaurant.menu_items[i].description}</p>
            <p>${restaurant.menu_items[i].price} CHF</p>
        </div>`;
        document.getElementById("idListMenuItems").appendChild(card);
    }
}