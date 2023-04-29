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
    header("Access-Control-Allow-Origin: http://localhost:5173");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Methods: GET,POST,DELETE");
    header("Access-Control-Max-Age: 3600");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

    echo json_encode($products);
} else {
    // POST
    header("Access-Control-Allow-Origin: http://localhost:5173");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Methods: GET,POST,DELETE");
    header("Access-Control-Max-Age: 3600");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
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


    echo 'Product added successfully';

}
?>