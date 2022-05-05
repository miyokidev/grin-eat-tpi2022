<?php

switch ($api) {
    case 'POST':
        $jsonString = file_get_contents("php://input");
        $data = json_decode($jsonString, true) ?? array();
        $message = array();
        $body = array();

        if ($data != null) {
            $address = $data["address"] ?? null;
            $radius = $data["radius"] ?? 5;
            $name = $data["name"] ?? null;
            $categories = $data["categories"] ?? array();

            if ($address != null) {
                $info = convertAdressToCoordinate($address);

                if ($info != null) {
                    $latFrom = $info["latitude"];
                    $lonFrom = $info["longitude"];

                    $restaurants = Restaurant::findAll();
                    
                    foreach($restaurants as $r) {
                        // On cherche les catégories de chaque restaurant et les ajoutes à la propriété categories de l'objet Restaurant
                        foreach($r->findCategoriesById() as $c) {
                            $r->addCategory($c->getId());
                        }

                        $latTo = $r->getLatitude();
                        $lonTo = $r->getLongitude();

                        // On vérifie si le restaurant actuel est dans le rayon demandé
                        if (haversineGreatCircleDistance($latFrom, $lonFrom, $latTo, $lonTo) < $radius) {
                            // On vérifie ensuite si le client souhaite filtrer par des catégories
                            if (count($categories) > 0) {
                                if (count(array_intersect($r->getCategories(), $categories)) > 0) {
                                    array_push($body, $r);
                                }
                            } else {
                                array_push($body, $r);
                            }
                        }
                    }
                    http_response_code(200);
                    echo json_encode($body);
                } else {
                    array_push($message, "Adresse invalide");
                    http_response_code(400);
                    echo json_encode(["result" => false, "message" => $message]);
                }
            } else {
                array_push($message, "L'adressse ne peut pas être null");
                http_response_code(400);
                echo json_encode(["result" => false, "message" => $message]);
            }
        } else {
            array_push($message, "Une adresse est requise");
            http_response_code(400);
            echo json_encode(["result" => false, "message" => $message]);
        }
        break;
    default:
        http_response_code(405);
        break;
}
