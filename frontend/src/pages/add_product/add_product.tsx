import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { Link, useNavigate } from "react-router-dom";
import { createProduct, Product } from "../../redux/products/products";
import { cleanFormValues } from "../../redux/form/form";
import { set_type_form } from "../../redux/utils/utils";

// Components
import BookForm from "../../components/book_form/book_form.component";
import DvdForm from "../../components/dvd_form/dvd_form.component";
import Footer from "../../components/footer/footer.component";
import FurnitureForm from "../../components/furniture_form/furniture_form.component";
import PageMenu from "../../components/page_menu/page_menu.component";

const AddProduct = () => {
  const navigate = useNavigate();

  const form_type = useSelector(
    (state: RootState) => state.utils.hide_type_form
  );
  const weight = useSelector((state: RootState) => state.form.weight);
  const height = useSelector((state: RootState) => state.form.height);
  const width = useSelector((state: RootState) => state.form.width);
  const length = useSelector((state: RootState) => state.form.length);
  const size = useSelector((state: RootState) => state.form.size);
  const dispatch = useDispatch<AppDispatch>();

  const [inputValues, setInputValues] = useState<Product>({
    sku: "",
    name: "",
    price: 0,
    productType: "",
  } as Product);

  const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(cleanFormValues());
    dispatch(set_type_form(event.target.value));
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const data = {
      weight,
      height,
      width,
      length,
      size,
      sku: inputValues.sku,
      name: inputValues.name,
      price: inputValues.price,
      productType: form_type,
    };
    Promise.all([dispatch(createProduct(data)), navigate("/")]);
  };

  return (
    <div className="min-h-screen border border-red-600">
      {/* Menu */}
      <PageMenu title="Product Add">
        {form_type === "none" ? (
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
        <Link
          to="/"
          className="pt-1 px-2 bg-red-400 hover:bg-red-600 text-white hover:text-slate-200 text-xl font-bold rounded transition duration-700 ease-in-out"
        >
          Cancel
        </Link>
      </PageMenu>
      {/* Form */}
      <div className="p-2 flex flex-col items-center justify-center gap-4 border">
        <form className="text-xl flex flex-col gap-3">
          <div className="flex gap-2 order">
            <label>SKU</label>
            <input
              type="text"
              name="sku"
              onChange={handleInputChange}
              required
              className="grow border border-blue-500 rounded outline-0"
            />
          </div>
          <div className="flex gap-2 order">
            <label>Name</label>
            <input
              type="text"
              name="name"
              onChange={handleInputChange}
              required
              className="grow border border-blue-500 rounded outline-0"
            />
          </div>

          <div className="flex gap-2 order">
            <label>Price ($)</label>
            <input
              type="text"
              name="price"
              onChange={handleInputChange}
              required
              className="grow border border-blue-500 rounded outline-0"
            />
          </div>
          <div className="flex gap-2 order">
            <label>Type Switcher</label>
            <select
              className="grow border border-blue-500 rounded outline-0"
              onChange={handleTypeChange}
              value={form_type}
            >
              <option value="none">Product Type</option>
              <option value="Book">Book</option>
              <option value="Dvd">DVD</option>
              <option value="Furniture">Furniture</option>
            </select>
          </div>
        </form>
        {form_type === "Furniture" ? (
          <FurnitureForm />
        ) : form_type === "Book" ? (
          <BookForm />
        ) : form_type === "Dvd" ? (
          <DvdForm />
        ) : (
          ""
        )}
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AddProduct;
