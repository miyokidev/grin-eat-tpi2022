<?php

switch ($api) {
    case 'GET':
        $message = array();

        if ($id != 0) {
            $myCategory = new Category();

            $myCategory->setId($id);

            $body = $myCategory->findById();
        } else {
            $categories = Category::findAll();

            $body = $categories;
        }

        array_push($message, "success");
        http_response_code(200);
        echo json_encode(["result" => $body, "message" => $message]);
        break;
    default:
        http_response_code(405);
        break;
}
