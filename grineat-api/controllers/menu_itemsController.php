<?php

switch ($api) {
    case 'GET':
        if ($id != 0) {
            $myMenuItems = new MenuItems();

            $myMenuItems->setRestaurantId($id);

            echo json_encode($myMenuItems->findItemsByRestaurantId());
            http_response_code(200);
        }
        break;
    default:
        http_response_code(405);
        break;
}
