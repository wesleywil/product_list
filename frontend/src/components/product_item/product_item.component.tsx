import { Product } from "../../redux/products/products";

interface ProductItemProp {
  item: Product;
}

const ProductItem = ({ item }: ProductItemProp) => {
  return (
    <div className="border-2 p-2 w-52 h-42 rounded">
      <div>
        <input type="checkbox" />
      </div>
      <div className="p-2 flex flex-col justify-center items-center text-xl">
        <h1>{item.sku}</h1>
        <h2>{item.name}</h2>
        <h2>${item.price}</h2>
        <div className="flex flex-col items-center text-center">
          <h2>{item.specificAttribute}</h2>
          <h2>{item.attributeValue}</h2>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
