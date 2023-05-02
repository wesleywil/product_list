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
} elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
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
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Server Error']);
}
?>