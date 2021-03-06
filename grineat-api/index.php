<?php
/*
     /\   /\ 
    //\\_//\\    ____
    \_     _/   /   /   Nom et Prénom: GRIN Brian
    / * * \    /^^^]    Enseignant : Monsieur Antoine Schmid    
    \_\O/_/    [   ]    Classe : I.DA-P4B
     /   \_    [   /    Date : 18.05.2022
     \     \_  /  /     Nom du projet : GrinEat-API
      [ [ /  \/ _/      Version du projet : 1.0
     _[ [ \  /_/        Cours : TPI
              
*/

// Include CORS headers
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Headers: X-Requested-With');
header('Content-Type: application/json');

// Include Models & functions
include "functions.inc.php";
include "models/MyPdo.php";
include "models/Category.php";
include "models/Restaurant.php";
include "models/MenuItems.php";

// create a api variable to get HTTP method dynamically
$api = $_SERVER['REQUEST_METHOD'];
// get headers
$headers = getallheaders();
// get endpoint from url
$endpoint = $_GET['endpoint'] ?? '';
// get id from url
$id = intval($_GET['id'] ?? '');
// get context
$context = $_GET['context'] ?? '';

switch ($endpoint) {
    case '':
        echo json_encode("Welcome to the API");
        break;
    case 'categories':
        include "controllers/categoriesController.php";
        break;
    case 'restaurants':
        switch($context) {
            case '':
                include "controllers/restaurantsController.php";
                break;
            case 'menus':
                include "controllers/menu_itemsController.php";
                break;
            default:
            http_response_code(400);
            break;
        }
        break;
    default:
        http_response_code(404);
        break;
}