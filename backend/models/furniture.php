<?php

require_once "Products.php";

class Furniture extends Product
{

    public function __construct($result)
    {
        parent::__construct($result);
        $this->type = "Furniture";
        $this->specificAttribute = 'Dimensions';
        $this->attributeValue = $this->userData['height'] . 'x' . $this->userData['width'] . 'x' . $this->userData['length'];

    }
}