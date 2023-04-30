import { Product } from "../../redux/products/products";

interface ProductItemProp {
  item: Product;
}

const ProductItem = ({ item }: ProductItemProp) => {
  return (
    <div className="w-52 h-42 p-2  border-2 rounded">
      <div>
        <input type="checkbox" />
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
