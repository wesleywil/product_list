import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { Link } from "react-router-dom";
import { cleanFormValues, setFormValues } from "../../redux/form/form";
import { set_type_form } from "../../redux/utils/utils";

// Components
import BookForm from "../../components/book_form/book_form.component";
import DvdForm from "../../components/dvd_form/dvd_form.component";
import Footer from "../../components/footer/footer.component";
import FurnitureForm from "../../components/furniture_form/furniture_form.component";
import PageMenu from "../../components/page_menu/page_menu.component";
import ButtonType from "../../components/button_type/button_type.component";

const AddProduct = () => {
  const form_type = useSelector(
    (state: RootState) => state.utils.hide_type_form
  );
  const dispatch = useDispatch<AppDispatch>();

  const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(cleanFormValues());
    dispatch(set_type_form(event.target.value));
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    dispatch(setFormValues({ name, value }));
  };

  return (
    <div className="min-h-screen border border-red-600">
      {/* Menu */}
      <PageMenu title="Product Add">
        <ButtonType />
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
