<?php

class ProductService
{

    private $db;

    public function __construct($db)
    {
        $this->db = $db;
    }

    private $productTypes = array(
        'Furniture' => 'Furniture',
        'Dvd' => 'Dvd',
        'Book' => 'Book'
    );


    public function productSave($data, $productType)
    {
        if (!array_key_exists($productType, $this->productTypes)) {
            throw new Exception('Invalid product type');
        }

        $strategy = $this->productTypes[$productType];
        $product = new $strategy($data);

        $sku = $product->getSku();
        $name = $product->getName();
        $price = $product->getPrice();
        $type = $product->getType();
        $specificAttribute = $product->getSpecificAttribute();
        $attributeValue = $product->getAttributeValue();

        $stmt = $this->db->prepare("INSERT INTO products (sku, name, price, type, specificAttribute, attributeValue) VALUES (?, ?, ?, ?, ?, ?)");
        $stmt->bind_param("ssdsss", $sku, $name, $price, $type, $specificAttribute, $attributeValue);
        $stmt->execute();
        $stmt->close();
    }

    public function getAllProducts()
    {
        $stmt = $this->db->prepare("SELECT * FROM products");
        $stmt->execute();
        $result = $stmt->get_result();

        $products = array();
        while ($row = $result->fetch_assoc()) {
            $products[] = $row;
        }

        $stmt->close();

        return $products;
    }
}