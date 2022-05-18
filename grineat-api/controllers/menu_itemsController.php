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

switch ($api) {
    case 'GET':
        $message = array();
        
        if ($id != 0) {
            // Récupérer les informations du restaurant à l'ID donné
            $myRestaurant = new Restaurant();
            $myRestaurant->setId($id);
            $restaurant = $myRestaurant->findById();

            foreach ($restaurant->findCategoriesById() as $c) {
                // On cherche les catégories du restaurant et les ajoutes à la propriété categories de l'objet Restaurant
                $restaurant->addCategory($c->getNameFrench());
            }

            // Récupérer les menus et éléments relative au restaurant
            $myMenuItems = new MenuItems();
            $myMenuItems->setRestaurantId($id);
            $menuItems = $myMenuItems->findItemsByRestaurantId();

            array_push($message, "success");
            http_response_code(200);
            echo json_encode(["result" => ["info" => $restaurant, "menu_items" => $menuItems], "message" => $message]);
        }
        break;
    default:
        http_response_code(405);
        break;
}
