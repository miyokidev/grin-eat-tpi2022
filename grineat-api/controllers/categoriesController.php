<?php

switch ($api) {
    case 'GET':
        if ($id != 0) {
            $myCategory = new Category();

            $myCategory->setId($id);

            echo json_encode($myCategory->findById());
        } else {
            $categories = Category::findAll();

            echo json_encode($categories);
        }

        http_response_code(200);
        break;
    default:
        http_response_code(405);
        break;
}
