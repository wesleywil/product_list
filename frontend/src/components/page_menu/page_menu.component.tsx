type PageMenuProps = {
  title: string;
  btnOne: string;
  btnTwo: string;
};

const PageMenu = ({ title, btnOne, btnTwo }: PageMenuProps) => {
  return (
    <div className="mt-4 mb-2 pt-8 pb-2 px-4 flex justify-between border-b-2 border-slate-600">
      <h1 className="text-3xl font-semibold">{title}</h1>
      <div className=" flex justify-center gap-4">
        <button className="px-2 bg-blue-400 hover:bg-blue-600 text-white hover:text-slate-200 text-xl font-bold rounded transition duration-700 ease-in-out">
          {btnOne}
        </button>
        <button className="px-2 bg-red-400 hover:bg-red-600 text-white hover:text-slate-200 text-xl font-bold rounded transition duration-700 ease-in-out">
          {btnTwo}
        </button>
      </div>
    </div>
  );
};

export default PageMenu;
