<?php
class MenuItems implements JsonSerializable {
    private $id;
    private $restaurantId;
    private $name;
    private $description;
    private $image;
    private $price;

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
     * Get the value of restaurantId
     */ 
    public function getRestaurantId()
    {
        return $this->restaurantId;
    }

    /**
     * Set the value of restaurantId
     *
     * @return  self
     */ 
    public function setRestaurantId($restaurantId)
    {
        $this->restaurantId = $restaurantId;

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
     * Get the value of description
     */ 
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * Set the value of description
     *
     * @return  self
     */ 
    public function setDescription($description)
    {
        $this->description = $description;

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
     * Get the value of price
     */ 
    public function getPrice()
    {
        return $this->price;
    }

    /**
     * Set the value of price
     *
     * @return  self
     */ 
    public function setPrice($price)
    {
        $this->price = $price;

        return $this;
    }

    public function jsonSerialize(): mixed
    {
        return get_object_vars($this);
    }

    public function findItemsByRestaurantId() {
        $sql = MyPdo::getInstance()->prepare('SELECT * FROM menu_items WHERE restaurantId = :id');
        $sql->setFetchMode(PDO::FETCH_CLASS | PDO::FETCH_PROPS_LATE, 'MenuItems');
        $sql->bindParam(':id', $this->getRestaurantId());
        $sql->execute();
        $result = $sql->fetchAll();

        return $result;
    }
}