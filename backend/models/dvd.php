<?php

require_once "Products.php";

class Dvd extends Product
{

    public function __construct($result)
    {
        parent::__construct($result);
        $this->type = "Dvd";
        $this->specific_attribute = 'Size';
        $this->attribute_value = $this->userData['size'] . "Mb";
    }
}