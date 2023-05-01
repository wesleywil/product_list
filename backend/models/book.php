<?php

require_once "Products.php";

class Book extends Product
{


    public function __construct($result)
    {
        parent::__construct($result);
        $this->type = "Book";
        $this->specificAttribute = 'Weight';
        $this->attributeValue = $this->userData['weight'] . " Kg";
    }
}