<?php

error_reporting(E_ALL);

$env = parse_ini_file('..\.env');


// Define constants
define('DB_HOST', 'localhost');
define('DB_NAME', 'products_list');
define('DB_USER', 'root');
define('DB_PASSWORD', '123Wes');

// URL for the application - Will be changed
define('BASE_URL', 'http://localhost/myapp');