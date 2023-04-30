import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import {
  select_products,
  remove_products,
} from "../../redux/products/products";

import { Product } from "../../redux/products/products";
import React from "react";

interface ProductItemProp {
  item: Product;
}

const ProductItem = ({ item }: ProductItemProp) => {
  const dispatch = useDispatch<AppDispatch>();
  const id = item.id;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    if (checked) {
      dispatch(select_products(id));
    } else {
      dispatch(remove_products(id));
    }
  };

  return (
    <div className="w-52 h-42 p-2  border-2 rounded">
      <div>
        <input type="checkbox" onChange={handleChange} />
        <span>{item.id}</span>
      </div>
      <div className="p-2 flex flex-col justify-center items-center text-xl">
        <h1>{item.sku}</h1>
        <h2 className="text-center">{item.name}</h2>
        <h2>${item.price}</h2>
        <div className="mt-2 flex flex-col items-center text-base text-center">
          <h2>{item.specificAttribute}</h2>
          <h2>{item.attributeValue}</h2>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
