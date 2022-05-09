const search = {};
const restaurants = [];
const categories = [];
const addressDisplay = document.getElementById("idAddress");

addEventListener("DOMContentLoaded", () => {
    if (sessionStorage.getItem('address') == null) {
        location.href = "index.html";
    } else {
        addressDisplay.innerText = sessionStorage.getItem('address');
        search.address = sessionStorage.getItem('address');

        new Promise((resolve, reject) => {
            fetch('http://localhost/grin-eat-tpi2022/grineat-api/categories')
                .then(function (response) {
                    return response.json()
                }).then(function (json) {
                    resolve(json);
                }).catch(function (ex) {
                    reject(ex);
                })
        }).then(result => {
            console.log(result);
            sendData(display, "http://localhost/grin-eat-tpi2022/grineat-api/restaurants", search);
        });
    }
});

addressDisplay.addEventListener("click", () => {
    console.log("test"); 
});

async function sendData(successCallBack, link, obj) {
    fetch(link, { method: 'POST', body: JSON.stringify(obj) }).then(function (response) {
        response.json().then(function (myJson) {
            console.log(myJson);
            successCallBack();
        });
    });
}

function display() {
    
}

