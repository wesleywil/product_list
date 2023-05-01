<?php

require_once 'models/Dvd.php';
require_once 'models/Furniture.php';
require_once 'models/Book.php';
require_once 'config/config.php';
require_once 'services/ProductService.php';

$db = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
$productService = new ProductService($db);

// CORS Headers
function addHeaders()
{
    header("Access-Control-Allow-Origin: http://localhost:5173");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Methods: GET,POST,DELETE, OPTIONS");
    header("Access-Control-Max-Age: 3600");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
}

// Handle HTTP requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    addHeaders();
    exit;
} elseif ($_SERVER['REQUEST_METHOD'] === "GET") {
    // Headers
    addHeaders();

    $products = $productService->getAllProducts();
    http_response_code(200);
    echo json_encode($products);
} elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Headers
    addHeaders();

    $jsonData = file_get_contents('php://input');
    $data = json_decode($jsonData, true);
    // Validate input
    $requiredFields = ['sku', 'name', 'price', 'productType'];
    foreach ($requiredFields as $field) {
        if (empty($data[$field])) {
            http_response_code(400);
            echo json_encode(["message" => "Missing required fields: $field"]);
            exit();
        }
    }
    // Sanitize input
    $productData = [
        'sku' => mysqli_real_escape_string($db, $data['sku']),
        'name' => mysqli_real_escape_string($db, $data['name']),
        'price' => floatval($data['price']),
        // DVD
        'size' => mysqli_real_escape_string($db, $data['size']),
        // Book
        'weight' => mysqli_real_escape_string($db, $data['weight']),
        // Furniture
        "height" => mysqli_real_escape_string($db, $data['height']),
        "width" => mysqli_real_escape_string($db, $data['width']),
        "length" => mysqli_real_escape_string($db, $data['length']),
    ];
    // Create product base on product Type
    $productType = $data['productType'];
    $productService->productSave($productData, $productType);
    http_response_code(200);
    echo json_encode(['message' => 'Product added successfully!']);
} else {
    // Headers
    addHeaders();

    $jsonData = file_get_contents('php://input');
    $data = json_decode($jsonData, true);
    $ids = $data['ids'];
    //Validate input
    if (!isset($data['ids']) || !is_array($data['ids'])) {
        http_response_code(400);
        echo json_encode(['message' => 'Invalid input: ids must be an array!']);
        exit();
    }
    $productService->deleteProduct($ids);
    http_response_code(200);
    echo json_encode(['message' => 'Products were successfully deleted!']);
}
?>