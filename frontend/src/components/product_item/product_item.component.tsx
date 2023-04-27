const ProductItem = () => {
  return (
    <div className="border p-2">
      <div>
        <input type="checkbox" />
      </div>
      <div className="p-2 flex flex-col justify-center items-center text-xl">
        <h1>SKU000</h1>
        <h2>Product's Name</h2>
        <h2>11.00$</h2>
        <h2>Size: 700 MB</h2>
      </div>
    </div>
  );
};

export default ProductItem;
