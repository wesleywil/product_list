<?php
interface ProductInterface
{
    public function save();
    public function display();
}

abstract class Product implements ProductInterface
{
    protected $id;
    protected $sku;
    protected $name;
    protected $price;
    protected $type;

    public function __construct($id, $sku, $name, $price, $type)
    {
        $this->id = $id;
        $this->sku = $sku;
        $this->name = $name;
        $this->price = $price;
        $this->type = $type;
    }
    public function setId($id)
    {
        $this->id = $id;
    }

    public function getId()
    {
        return $this->id;
    }

    public function setSku($sku)
    {
        $this->sku = $sku;
    }

    public function getSku()
    {
        return $this->sku;
    }

    public function setName($name)
    {
        $this->name = $name;
    }

    public function getName()
    {
        return $this->name;
    }

    public function setPrice($price)
    {
        $this->price = $price;
    }

    public function getPrice()
    {
        return $this->price;
    }

    public function setType($type)
    {
        $this->type = $type;
    }

    public function getType()
    {
        return $this->type;
    }

    public function save()
    {
        $sql = "INSERT INTO products (sku, name, price, type) VALUES(:sku, :name, :price, :type)";
        $stmt = $this->db->prepare($sql);
        $stmt->execute([$this->sku, $this->name, $this->price, $this->type]);

        $product_id = $this->db->lastInsertId();

        return $product_id;
    }

    public function display()
    {

    }

}