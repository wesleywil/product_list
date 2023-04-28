const FurnitureForm = () => {
  return (
    <div className="p-2 text-xl flex flex-col gap-3 border-2 rounded">
      <div className="flex gap-2 order">
        <label>Height(CM)</label>
        <input
          type="text"
          required
          className="grow border border-blue-500 rounded outline-0"
        />
      </div>
      <div className="flex gap-2 order">
        <label>Width(CM)</label>
        <input
          type="text"
          required
          className="grow border border-blue-500 rounded outline-0"
        />
      </div>
      <div className="flex gap-2 order">
        <label>Length(CM)</label>
        <input
          type="text"
          required
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
