<?php

class Dvd extends Product
{
    protected $size;

    public function __construct($id, $sku, $name, $price, $size)
    {
        parent::__construct($id, $sku, $name, $price, 'dvd');
        $this->size = $size;
    }

    public function setSize($size)
    {
        $this->size = $size;
    }

    public function getWeight()
    {
        return $this->size;
    }

    public function save()
    {
        $product_id = parent::save();

        $sql = "INSERT INTO dvd (product_id, size) VALUES(?,?)";
        $stmt = $this->db->prepare($sql);
        $stmt->execute([$product_id, $this->size]);

        return $product_id;
    }
}