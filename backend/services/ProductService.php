<?php

class ProductService
{

    private $db;

    public function __construct($db)
    {
        $this->db = $db;
    }

    public function saveProduct(Product $product)
    {
        $stmt = $this->db->prepare("INSERT INTO products(sku, name, price, type) VALUES(?,?,?,?)");
        $stmt->bind_param("ssds", $product->getSku(), $product->getName(), $product->getPrice(), $product->getType());
        $stmt->execute();
        $product->save($this->db);
    }
}