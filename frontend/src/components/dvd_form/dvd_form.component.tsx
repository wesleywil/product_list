import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { setFormValues } from "../../redux/form/form";

const DvdForm = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(setFormValues({ name, value }));
  };
  return (
    <div className="p-2 text-xl flex flex-col gap-3 border-2 rounded">
      <div className="flex gap-2 order">
        <label>Size(GB)</label>
        <input
          type="number"
          name="size"
          id="size"
          onChange={handleInputChange}
          required
          className="grow border border-blue-500 rounded outline-0"
        />
      </div>
      <span className="text-base text-center">
        Please provide de storage size in Gigabytes(GB)*
      </span>
    </div>
  );
};

export default DvdForm;
