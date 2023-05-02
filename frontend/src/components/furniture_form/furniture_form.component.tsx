import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { setFormValues } from "../../redux/form/form";

const FurnitureForm = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(setFormValues({ name, value }));
  };

  return (
    <div className="p-2 text-xl flex flex-col gap-3 border-2 rounded">
      <div className="flex gap-2 order">
        <label>Height(CM)</label>
        <input
          name="height"
          type="text"
          required
          onChange={handleInputChange}
          className="grow border border-blue-500 rounded outline-0"
        />
      </div>
      <div className="flex gap-2 order">
        <label>Width(CM)</label>
        <input
          name="width"
          type="text"
          required
          onChange={handleInputChange}
          className="grow border border-blue-500 rounded outline-0"
        />
      </div>
      <div className="flex gap-2 order">
        <label>Length(CM)</label>
        <input
          name="length"
          type="text"
          required
          onChange={handleInputChange}
          className="grow border border-blue-500 rounded outline-0"
        />
      </div>
      <span className="text-base text-center">
        Please provide dimensions in HxWxL format*
      </span>
    </div>
  );
};

export default FurnitureForm;
