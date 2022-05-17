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

// Rediriger vers l'index si on clique sur le logo.
logo.addEventListener("click", () => {
    sessionStorage.removeItem('address');
    location.href = "index.html";
});

addEventListener("DOMContentLoaded", () => {
    if (sessionStorage.getItem('address') == null) {
        location.href = "index.html";
    } else {
        let idRestaurant = urlParams.get('idRestaurant');
        fetch(`http://localhost/grin-eat-tpi2022/grineat-api/restaurants/${idRestaurant}/menu`)
            .then(function (response) {
                return response.json()
            }).then(function (json) {
                displayInfoMenuItems(json.result);
            }).catch(function (ex) {
                console.log(ex);
            });
    }
});

function displayInfoMenuItems(restaurant) {
    image.setAttribute("src", restaurant.info.image);
    nameRestaurant.innerText = restaurant.info.name;
    cp.innerText = restaurant.info.cp;
    city.innerText = restaurant.info.city;
    street.innerText = restaurant.info.street;
    phone.innerText = restaurant.info.phone;

    console.log(restaurant.menu_items);
    /*
    for (let i = 0; i < restaurant.menu_items.length; i++) {
        let card = document.createElement('div');
        card.setAttribute('id', `item${restaurant.menu_items[i].id}`);
        card.classList.add("card-menu");
        card.innerHTML = `<img src="${restaurant.menu_items[i].image}" alt="${restaurant.menu_items[i].name}'s image">
    <div class="card-body">
        <p>${restaurant.menu_items[i].name}</p>
    </div>`;
        document.getElementById("idListMenuItems").appendChild(card);
    }
    */
}