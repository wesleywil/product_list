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
        $specific_attribute = $product->getSpecific_attribute();
        $attribute_value = $product->getAttribute_value();

        $stmt = $this->db->prepare("INSERT INTO products (sku, name, price, type, specific_attribute, attribute_value) VALUES (?, ?, ?, ?, ?, ?)");
        $stmt->bind_param("ssdsss", $sku, $name, $price, $type, $specific_attribute, $attribute_value);
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