<?php

class Furniture extends Product
{
    protected $height;
    protected $width;
    protected $length;

    public function __construct($id, $sku, $name, $price, $height, $width, $length)
    {
        parent::__construct($id, $sku, $name, $price, 'furniture');
        $this->height = $height;
        $this->width = $width;
        $this->length = $length;
    }

    public function setHeight($height)
    {
        $this->height = $height;
    }

    public function getHeight()
    {
        return $this->height;
    }

    public function setWidth($width)
    {
        $this->width = $width;
    }

    public function getWidth()
    {
        return $this->width;
    }

    public function setLength($length)
    {
        $this->length = $length;
    }

    public function getLength()
    {
        return $this->length;
    }

    public function save($db)
    {
        $product_id = parent::save($db);

        $sql = "INSERT INTO furniture (product_id, height, width, length) VALUES(?,?,?,?)";
        $stmt = $this->$db->prepare($sql);
        $stmt->execute([$product_id, $this->height, $this->width, $this->length]);

        return $product_id;
    }

    public function display()
    {
        $output = "<h2>{$this->getSku()}</h2>";
        $output .= "<h2>{$this->getName()}</h2>";
        $output .= "<h2>{$this->getPrice()}</h2>";
        $output .= "<h2>{$this->getType()}</h2>";
        $output .= "<h2>{$this->getHeight()}</h2>";
        $output .= "<h2>{$this->getWidth()}</h2>";
        $output .= "<h2>{$this->getLength()}</h2>";
        return $output;
    }
}