const BookForm = () => {
  return (
    <div className="p-2 text-xl flex flex-col gap-3 border-2 rounded">
      <div className="flex gap-2 order">
        <label>Weight(Kg)</label>
        <input
          type="number"
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
