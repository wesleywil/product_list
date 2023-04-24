<?php

class Book extends Product
{
    protected $weight;

    public function __construct($id, $sku, $name, $price, $weight)
    {
        parent::__construct($id, $sku, $name, $price, 'book');
        $this->weight = $weight;
    }

    public function setWeight($weight)
    {
        $this->weight = $weight;
    }

    public function getWeight()
    {
        return $this->weight;
    }

    public function save($db)
    {
        $product_id = parent::save($db);

        $sql = "INSERT INTO book (product_id, weight) VALUES(?,?)";
        $stmt = $this->$db->prepare($sql);
        $stmt->execute([$product_id, $this->weight]);

        return $product_id;
    }
}