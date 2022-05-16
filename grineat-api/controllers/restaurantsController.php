<?php

switch ($api) {
    case 'POST':
        $jsonString = file_get_contents("php://input");
        $data = json_decode($jsonString, true) ?? array();
        $message = array();
        $body = array();

        if ($data != null) {
            $address = $data["address"] ?? null; // adresse du client.
            $coordinates = $data["coordinates"] ?? array();
            $radius = intval($data["radius"]) != null ? intval($data["radius"]) : 5; // rayon limite autour de l'adresse du client par défaut 5 si rien spécifié.
            $name = $data["name"] ?? null; // filtre par nom si le client souhaite faire une recherche
            $categories = $data["categories"] ?? array(); // filtre par catégorie si le client en sélectionne

            if (isset($coordinates["latitude"]) && isset($coordinates["longitude"]) && !isset($info)) {
                $info["coordinates"] = $coordinates;

                if ($address != null) {
                    $info["street"] = $address;
                }
            }

            if ($address != null && !isset($info)) {
                $info = convertAdressToCoordinate($address);
            }

            if ($info != null) {
                $latFrom = $info["coordinates"]["latitude"]; // latitude de l'adresse du client
                $lonFrom = $info["coordinates"]["longitude"]; // longitude de l'adresse du client

                $restaurants = Restaurant::findAll();

                foreach ($restaurants as $r) {
                    // On cherche les catégories de chaque restaurant et les ajoutes à la propriété categories de l'objet Restaurant
                    foreach ($r->findCategoriesById() as $c) {
                        $r->addCategory($c->getId());
                    }

                    $latTo = $r->getLatitude(); // latitude du restaurant actuel
                    $lonTo = $r->getLongitude(); // longitude du restaurant actuel

                    // On vérifie si le restaurant actuel est dans le rayon demandé
                    $r->setDistanceFrom(haversineGreatCircleDistance($latFrom, $lonFrom, $latTo, $lonTo));
                    if ($r->getDistanceFrom() < $radius) {
                        // On vérifie ensuite si le client souhaite filtrer par des catégories
                        if (count($categories) > 0) {
                            // On vérifie si le restaurant actuel contient au moins une des catégories demandés par le client
                            if (count(array_intersect($r->getCategories(), $categories)) < 1) {
                                continue; // On passe au restaurant suivant
                            }
                        }

                        // On vérifie si le client souhaite filtrer par un nom
                        if ($name != null) {
                            // On vérifie si le restaurant actuel commence par la saisie du client
                            if (strpos(strtolower($r->getName()), strtolower($name)) !== 0) {
                                continue; // On passe au restaurant suivant
                            }
                        }

                        array_push($body, $r);
                    }
                }
                // Trier les restaurants par distance croissanteQu
                usort($body, "compareDistance");

                array_push($message, "success");
                http_response_code(200);
                echo json_encode(["result" => ["address" => $info, "restaurants" => $body], "message" => $message]);
            } else {
                array_push($message, "Adresse invalide");
                http_response_code(400);
                echo json_encode(["result" => false, "message" => $message]);
            }
        } else {
            array_push($message, "Il faut au minimum une adresse ou des coordonnées latitude, longitude");
            http_response_code(400);
            echo json_encode(["result" => false, "message" => $message]);
        }
        break;
    default:
        http_response_code(405);
        break;
}
