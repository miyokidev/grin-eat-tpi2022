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

class Restaurant implements JsonSerializable {
    private $id;
    private $createdOn;
    private $email;
    private $name;
    private $phone;
    private $website;
    private $image;
    private $street;
    private $cp;
    private $city;
    private $countryId;
    private $latitude;
    private $longitude;
    private $categories = array();
    private $distanceFrom;

    /**
     * Get the value of id
     */ 
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set the value of id
     *
     * @return  self
     */ 
    public function setId($id)
    {
        $this->id = $id;

        return $this;
    }

    /**
     * Get the value of createdOn
     */ 
    public function getCreatedOn()
    {
        return $this->createdOn;
    }

    /**
     * Set the value of createdOn
     *
     * @return  self
     */ 
    public function setCreatedOn($createdOn)
    {
        $this->createdOn = $createdOn;

        return $this;
    }

    /**
     * Get the value of email
     */ 
    public function getEmail()
    {
        return $this->email;
    }

    /**
     * Set the value of email
     *
     * @return  self
     */ 
    public function setEmail($email)
    {
        $this->email = $email;

        return $this;
    }

    /**
     * Get the value of name
     */ 
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set the value of name
     *
     * @return  self
     */ 
    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get the value of phone
     */ 
    public function getPhone()
    {
        return $this->phone;
    }

    /**
     * Set the value of phone
     *
     * @return  self
     */ 
    public function setPhone($phone)
    {
        $this->phone = $phone;

        return $this;
    }

    /**
     * Get the value of website
     */ 
    public function getWebsite()
    {
        return $this->website;
    }

    /**
     * Set the value of website
     *
     * @return  self
     */ 
    public function setWebsite($website)
    {
        $this->website = $website;

        return $this;
    }

    /**
     * Get the value of image
     */ 
    public function getImage()
    {
        return $this->image;
    }

    /**
     * Set the value of image
     *
     * @return  self
     */ 
    public function setImage($image)
    {
        $this->image = $image;

        return $this;
    }

    /**
     * Get the value of street
     */ 
    public function getStreet()
    {
        return $this->street;
    }

    /**
     * Set the value of street
     *
     * @return  self
     */ 
    public function setStreet($street)
    {
        $this->street = $street;

        return $this;
    }

    /**
     * Get the value of cp
     */ 
    public function getCp()
    {
        return $this->cp;
    }

    /**
     * Set the value of cp
     *
     * @return  self
     */ 
    public function setCp($cp)
    {
        $this->cp = $cp;

        return $this;
    }

    /**
     * Get the value of city
     */ 
    public function getCity()
    {
        return $this->city;
    }

    /**
     * Set the value of city
     *
     * @return  self
     */ 
    public function setCity($city)
    {
        $this->city = $city;

        return $this;
    }

    /**
     * Get the value of countryId
     */ 
    public function getCountryId()
    {
        return $this->countryId;
    }

    /**
     * Set the value of countryId
     *
     * @return  self
     */ 
    public function setCountryId($countryId)
    {
        $this->countryId = $countryId;

        return $this;
    }

    /**
     * Get the value of latitude
     */ 
    public function getLatitude()
    {
        return $this->latitude;
    }

    /**
     * Set the value of latitude
     *
     * @return  self
     */ 
    public function setLatitude($latitude)
    {
        $this->latitude = $latitude;

        return $this;
    }

    /**
     * Get the value of longitude
     */ 
    public function getLongitude()
    {
        return $this->longitude;
    }

    /**
     * Set the value of longitude
     *
     * @return  self
     */ 
    public function setLongitude($longitude)
    {
        $this->longitude = $longitude;

        return $this;
    }

    /**
     * Get the value of categories
     */ 
    public function getCategories()
    {
        return $this->categories;
    }

    /**
     * Set the value of longitude
     *
     * @return  self
     */ 
    public function setCategories($categories)
    {
        $this->categories = $categories;

        return $this;
    }

    /**
     * add the value of categories
     *
     * @return  self
     */ 
    public function addCategory($category)
    {
        array_push($this->categories, $category);

        return $this;
    }

    /**
     * Get the value of distanceFrom
     */ 
    public function getDistanceFrom()
    {
        return $this->distanceFrom;
    }

    /**
     * Set the value of distanceFrom
     *
     * @return  self
     */ 
    public function setDistanceFrom($distanceFrom)
    {
        $this->distanceFrom = $distanceFrom;

        return $this;
    }

    public function jsonSerialize()
    {
        return get_object_vars($this);
    }

    public static function findAll() {
        $sql = MyPdo::getInstance()->prepare('SELECT * FROM restaurants;');
        $sql->setFetchMode(PDO::FETCH_CLASS | PDO::FETCH_PROPS_LATE, 'Restaurant');
        $sql->execute();
        $result = $sql->fetchAll();

        return $result;
    }

    public function findById() {
        $sql = MyPdo::getInstance()->prepare('SELECT * FROM restaurants WHERE id = :id;');
        $sql->setFetchMode(PDO::FETCH_CLASS | PDO::FETCH_PROPS_LATE, 'Restaurant');
        $sql->bindParam(':id', $this->getId());
        $sql->execute();
        $result = $sql->fetch();

        return $result;
    }

    public function findCategoriesById() {
        $sql = MyPdo::getInstance()->prepare('SELECT categories.* FROM categories LEFT JOIN restaurants_categories as rc ON categories.id = rc.categoryId LEFT JOIN restaurants as r ON rc.restaurantId = r.id WHERE r.id = :id;');
        $sql->setFetchMode(PDO::FETCH_CLASS | PDO::FETCH_PROPS_LATE, 'Category');
        $sql->bindParam(':id', $this->getId());
        $sql->execute();
        $result = $sql->fetchAll();

        return $result;
    }
}