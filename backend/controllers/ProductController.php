<?php

require_once 'models/Dvd.php';
require_once 'models/Furniture.php';
require_once 'models/Book.php';
require_once 'config/config.php';
require_once 'services/ProductService.php';

$db = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
$productService = new ProductService($db);

if ($_SERVER['REQUEST_METHOD'] === "GET") {
    $products = $productService->getAllProducts();
    header('Content-Type: application/json');
    echo json_encode($products);
} else {
    // POST
    $jsonData = file_get_contents('php://input');
    $data = json_decode($jsonData, true);
    $productData = array(
        'sku' => $data['sku'],
        'name' => $data['name'],
        'price' => $data['price'],
        // DVD
        'size' => $data['size'],
        // Book
        'weight' => $data['weight'],
        // Furniture
        "height" => $data['height'],
        "width" => $data['width'],
        "length" => $data['length'],
    );
    $productType = $data['productType'];

    $productService->productSave($productData, $productType);

    header('HTTP/1.1 200 OK');
    echo 'Product added successfully';

}
?>