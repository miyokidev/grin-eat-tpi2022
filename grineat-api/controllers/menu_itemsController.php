<?php

switch ($api) {
    case 'GET':
        $message = array();
        
        if ($id != 0) {
            // Récupérer les informations du restaurant à l'ID donné
            $myRestaurant = new Restaurant();
            $myRestaurant->setId($id);
            $restaurant = $myRestaurant->findById();

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
