import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store";
import { createProduct } from "../../redux/products/products";

const ButtonType = () => {
  const weight = useSelector((state: RootState) => state.form.weight);
  const height = useSelector((state: RootState) => state.form.height);
  const width = useSelector((state: RootState) => state.form.width);
  const length = useSelector((state: RootState) => state.form.length);
  const size = useSelector((state: RootState) => state.form.size);
  const sku = useSelector((state: RootState) => state.form.sku);
  const name = useSelector((state: RootState) => state.form.name);
  const price = useSelector((state: RootState) => state.form.price);
  const productType = useSelector(
    (state: RootState) => state.utils.hide_type_form
  );
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = () => {
    const data = {
      weight,
      height,
      width,
      length,
      size,
      sku,
      name,
      price,
      productType,
    };
    dispatch(createProduct(data));
  };
  return (
    <>
      {productType === "none" ? (
        <button
          disabled
          className="px-2 bg-slate-400  text-slate-200  text-xl font-bold rounded"
        >
          Save
        </button>
      ) : (
        <button
          onClick={handleSubmit}
          className="px-2 bg-blue-400 hover:bg-blue-600 text-white hover:text-slate-200 text-xl font-bold rounded transition duration-700 ease-in-out"
        >
          Save
        </button>
      )}
    </>
  );
};

export default ButtonType;
