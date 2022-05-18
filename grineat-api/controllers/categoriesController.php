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
