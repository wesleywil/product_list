import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { setFormValues } from "../../redux/form/form";

const BookForm = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(setFormValues({ name, value }));
  };

  return (
    <div className="p-2 text-xl flex flex-col gap-3 border-2 rounded">
      <div className="flex gap-2 order">
        <label>Weight(Kg)</label>
        <input
          type="number"
          name="weight"
          id="weight"
          onChange={handleInputChange}
          className="grow border border-blue-500 rounded outline-0"
        />
      </div>

      <span className="text-base text-center">
        Please provide de book weight in Kilos(Kg)*
      </span>
    </div>
  );
};

export default BookForm;
