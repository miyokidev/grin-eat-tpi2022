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

function convertAdressToCoordinate($adress)
{
    $encoded = rawurlencode($adress);
    $result = array();

    $url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" . $encoded . ".json?access_token=pk.eyJ1IjoibWl5b2tpIiwiYSI6ImNsMW96ejJ5NTAzMjQza3B0NHB3bHMxYncifQ.03AlBHWNd8MiauuZz_sSNQ";

    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

    $resp = curl_exec($curl);
    curl_close($curl);
    $data = json_decode($resp, true);

    if (count($data["features"]) != 0) {
        $addressFound = $latitudeAddr = $data["features"][0]["place_name"];
        $latitudeAddr = $data["features"][0]["geometry"]["coordinates"][1];
        $longitudeAddr = $data["features"][0]["geometry"]["coordinates"][0];

        $result["street"] = $addressFound;
        $result["coordinates"]["latitude"] = $latitudeAddr;
        $result["coordinates"]["longitude"] = $longitudeAddr;
    } else {
        $result = null;
    }


    return $result;
    /*
    $result = array();

    $result["adress"] = "Quai Capo D'istria 9, 1205 Genève, Switzerland";
    $result["latitude"] = 46.187687;
    $result["longitude"] = 6.143453;
    return $result;
    */
}

function haversineGreatCircleDistance(
    $latitudeFrom,
    $longitudeFrom,
    $latitudeTo,
    $longitudeTo,
    $earthRadius = 6371
) {
    // Convertir de degrés en radian
    $latFrom = deg2rad($latitudeFrom);
    $lonFrom = deg2rad($longitudeFrom);
    $latTo = deg2rad($latitudeTo);
    $lonTo = deg2rad($longitudeTo);

    $latDelta = $latTo - $latFrom;
    $lonDelta = $lonTo - $lonFrom;

    $angle = 2 * asin(sqrt(pow(sin($latDelta / 2), 2) +
        cos($latFrom) * cos($latTo) * pow(sin($lonDelta / 2), 2)));
    return $angle * $earthRadius;
}

function compareDistance($a, $b) {
    $distanceA = $a->getDistanceFrom();
    $distanceB = $b->getDistanceFrom();
    return ($distanceA < $distanceB) ? -1 : 1;
}
