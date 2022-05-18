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

class MyPdo
{
private static $dbhost = 'localhost';
private static $dbname = 'db_grineat';
private static $dbuser = 'admin_grineat';
private static $dbpasswd = 'ND)BO/4S/dr[_6H6';

private static $MyPdo;
private static $unPdo = null;

//	Constructeur privé, crée l'instance de PDO qui sera sollicitée
//	pour toutes les méthodes de la classe
private function __construct()
{
    MyPdo::$unPdo = new PDO("mysql:host=".MyPdo::$dbhost.';dbname='.MyPdo::$dbname, MyPdo::$dbuser, MyPdo::$dbpasswd);
    MyPdo::$unPdo->query("SET CHARACTER SET utf8");
    MyPdo::$unPdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}
public function __destruct()
{ 
    MyPdo::$unPdo = null;
}
/**
*	Fonction statique qui cree l'unique instance de la classe
*   Appel : $instanceMyPdo = MyPdo::getMyPdo();
*	@return l'unique objet de la classe MyPdo
*/
public static function getInstance()
{
    if(self::$unPdo == null)
    {
        self::$MyPdo= new MyPdo();
    }
    return self::$unPdo;
}

}