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

    public function getSize()
    {
        return $this->size;
    }

    public function save($db)
    {
        $product_id = parent::save($db);

        $sql = "INSERT INTO dvd (product_id, size) VALUES(:product_id, :size)";
        $stmt = $db->prepare($sql);
        $stmt->execute([
            ':product_id' => $product_id,
            ':size' => $this->size
        ]);

        return $product_id;
    }

    public function display()
    {
        $output = "<h2>{$this->getSku()}</h2>";
        $output .= "<h2>{$this->getName()}</h2>";
        $output .= "<h2>{$this->getPrice()}</h2>";
        $output .= "<h2>{$this->getType()}</h2>";
        $output .= "<h2>{$this->getSize()}</h2>";
        return $output;
    }
}