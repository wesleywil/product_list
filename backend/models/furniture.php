<?php

require_once "Products.php";

class Furniture extends Product
{

    public function __construct($result)
    {
        parent::__construct($result);
        $this->type = "Furniture";
        $this->specific_attribute = 'Dimensions';
        $this->attribute_value = $this->userData['height'] . 'x' . $this->userData['width'] . 'x' . $this->userData['length'];

    }
}