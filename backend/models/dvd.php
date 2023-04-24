<?php

class Dvd extends Product
{
    protected $size;

    public function __construct($id, $sku, $name, $price, $size)
    {
        parent::__construct($id, $sku, $name, $price, 'dvd');
        $this->size = $size;
    }

    public function setSize($size)
    {
        $this->size = $size;
    }

    public function getWeight()
    {
        return $this->size;
    }
}