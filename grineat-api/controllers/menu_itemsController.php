<?php

switch ($api) {
    case 'GET':
        $message = array();
        
        if ($id != 0) {
            $myMenuItems = new MenuItems();

            $myMenuItems->setRestaurantId($id);

            $body = $myMenuItems->findItemsByRestaurantId();

            array_push($message, "success");
            http_response_code(200);
            echo json_encode(["result" => $body, "message" => $message]);
        }
        break;
    default:
        http_response_code(405);
        break;
}
