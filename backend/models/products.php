<?php


abstract class Product
{

    protected $userData;
    protected $sku;
    protected $name;
    protected $price;
    protected $type;

    protected $specificAttribute;

    protected $attributeValue;

    public function __construct($result)
    {
        $this->userData = $result;
        $this->sku = $result['sku'];
        $this->name = $result['name'];
        $this->price = $result['price'];
    }

    public function setSku($sku)
    {
        $this->sku = $sku;
    }

    public function getSku()
    {
        return $this->sku;
    }

    public function setName($name)
    {
        $this->name = $name;
    }

    public function getName()
    {
        return $this->name;
    }

    public function setPrice($price)
    {
        $this->price = $price;
    }

    public function getPrice()
    {
        return $this->price;
    }

    public function setType($type)
    {
        $this->type = $type;
    }

    public function getType()
    {
        return $this->type;
    }

    public function setSpecificAttribute($specificAttribute)
    {
        $this->specificAttribute = $specificAttribute;
    }

    public function getSpecificAttribute()
    {
        return $this->specificAttribute;
    }

    public function setAttributeValue($attributeValue)
    {
        $this->attributeValue = $attributeValue;
    }

    public function getAttributeValue()
    {
        return $this->attributeValue;
    }

}