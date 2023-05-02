<?php

require_once "Products.php";

class Furniture extends Product
{

    public function __construct($result)
    {
        parent::__construct($result);
        $this->type = "Furniture";
        $this->specificAttribute = 'Dimensions';
        $this->attributeValue = $this->formData['height'] . 'x' . $this->formData['width'] . 'x' . $this->formData['length'];

    }
}