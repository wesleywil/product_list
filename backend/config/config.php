<?php

error_reporting(E_ALL);

// Database connection constants
define('DB_HOST', 'localhost');
define('DB_NAME', 'product_list');
define('DB_USER', $_ENV(DB_USER));
define('DB_PASSWORD', $_ENV(DB_PASSWORD));


// URL for the application - Will be changed
define('BASE_URL', 'http://localhost/myapp');