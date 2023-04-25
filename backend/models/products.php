<?php


abstract class Product
{

    protected $userData;
    protected $sku;
    protected $name;
    protected $price;
    protected $type;

    protected $specific_attribute;

    protected $attribute_value;

    public function __construct($result)
    {
        $this->userData = $result;
        $this->sku = $result['sku'];
        $this->name = $result['name'];
        $this->price = $result['price'];
        $this->type = $result['type'];
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

    public function setSpecific_attribute($specific_attribute)
    {
        $this->specific_attribute = $specific_attribute;
    }

    public function getSpecific_attribute()
    {
        return $this->specific_attribute;
    }

    public function setAttribute_value($attribute_value)
    {
        $this->attribute_value = $attribute_value;
    }

    public function getAttribute_value()
    {
        return $this->attribute_value;
    }

}