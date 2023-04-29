<?php

require_once "Products.php";

class Dvd extends Product
{

    public function __construct($result)
    {
        parent::__construct($result);
        $this->type = "Dvd";
        $this->specificAttribute = 'Size';
        $this->attributeValue = $this->userData['size'] . "Mb";
    }
}