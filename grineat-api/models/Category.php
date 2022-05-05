<?php
class Category implements JsonSerializable {
    private $id;
    private $nameEnglish;
    private $nameFrench;

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
     * Get the value of nameEnglish
     */ 
    public function getNameEnglish()
    {
        return $this->nameEnglish;
    }

    /**
     * Set the value of nameEnglish
     *
     * @return  self
     */ 
    public function setNameEnglish($nameEnglish)
    {
        $this->nameEnglish = $nameEnglish;

        return $this;
    }

    /**
     * Get the value of nameFrench
     */ 
    public function getNameFrench()
    {
        return $this->nameFrench;
    }

    /**
     * Set the value of nameFrench
     *
     * @return  self
     */ 
    public function setNameFrench($nameFrench)
    {
        $this->nameFrench = $nameFrench;

        return $this;
    }

    public function jsonSerialize(): mixed
    {
        return get_object_vars($this);
    }

    public static function findAll() {
        $sql = MyPdo::getInstance()->prepare('SELECT * FROM categories');
        $sql->setFetchMode(PDO::FETCH_CLASS | PDO::FETCH_PROPS_LATE, 'Category');
        $sql->execute();
        $result = $sql->fetchAll();

        return $result;
    }

    public function findById() {
        $sql = MyPdo::getInstance()->prepare('SELECT * FROM categories WHERE id = :id');
        $sql->setFetchMode(PDO::FETCH_CLASS | PDO::FETCH_PROPS_LATE, 'Category');
        $sql->bindParam(':id', $this->getId());
        $sql->execute();
        $result = $sql->fetch();

        return $result;
    }
}