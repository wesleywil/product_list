import { useState } from "react";
import { Link } from "../../../node_modules/react-router-dom/dist/index";
import BookForm from "../../components/book_form/book_form.component";
import DvdForm from "../../components/dvd_form/dvd_form.component";

import Footer from "../../components/footer/footer.component";
import FurnitureForm from "../../components/furniture_form/furniture_form.component";
import PageMenu from "../../components/page_menu/page_menu.component";

const AddProduct = () => {
  const [type, setType] = useState<"none" | "furniture" | "book" | "dvd">(
    "none"
  );

  const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setType(event.target.value as "none" | "furniture" | "book" | "dvd");
  };

  return (
    <div className="min-h-screen border border-red-600">
      {/* Menu */}
      <PageMenu title="Product Add">
        <button className="px-2 bg-blue-400 hover:bg-blue-600 text-white hover:text-slate-200 text-xl font-bold rounded transition duration-700 ease-in-out">
          Save
        </button>
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
              className="grow border border-blue-500 rounded outline-0"
            />
          </div>
          <div className="flex gap-2 order">
            <label>Name</label>
            <input
              type="text"
              className="grow border border-blue-500 rounded outline-0"
            />
          </div>

          <div className="flex gap-2 order">
            <label>Price ($)</label>
            <input
              type="text"
              className="grow border border-blue-500 rounded outline-0"
            />
          </div>
          <div className="flex gap-2 order">
            <label>Type Switcher</label>
            <select
              className="grow border border-blue-500 rounded outline-0"
              onChange={handleTypeChange}
              value={type}
            >
              <option value="none">Product Type</option>
              <option value="book">Book</option>
              <option value="dvd">DVD</option>
              <option value="furniture">Furniture</option>
            </select>
          </div>
        </form>
        {type === "furniture" ? (
          <FurnitureForm />
        ) : type === "book" ? (
          <BookForm />
        ) : type === "dvd" ? (
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
