<?php

require_once "Products.php";

class Book extends Product
{


    public function __construct($result)
    {
        parent::__construct($result);
        $this->type = "Book";
        $this->specific_attribute = 'Weight';
        $this->attribute_value = $this->userData['weight'] . "Kg";
    }
}