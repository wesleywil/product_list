<?php

class ProductService
{

    private $db;

    public function __construct($db)
    {
        $this->db = $db;
    }

// public function saveProduct(Product $product)
// {
//     $sku = $product->getSku();
//     $name = $product->getName();
//     $price = $product->getPrice();
//     $type = $product->getType();

//     $stmt = $this->db->prepare("INSERT INTO products(sku, name, price, type) VALUES(?,?,?,?)");
//     $stmt->bind_param("ssds", $sku, $name, $price, $type);
//     $stmt->execute();
//     $product->save($this->db);
// }

// public function getAllProducts()
// {
//     $stmt = $this->db->prepare("SELECT*FROM products");
//     $stmt->execute();
//     $result = $stmt->get_result();

//     $products = array();

//     while ($row = $result->fetch_assoc()) {
//         $producType = $row['type'];
//         $product = new $producType($row['sku'], $row['nanme'], $row['price'], ...$row);

//         $product->setId($row['id']);
//         $products[] = $product;
//     }

//     $output = '';
//     foreach ($products as $product) {
//         $output .= $product->display();
//     }

//     return $output;
// }
}