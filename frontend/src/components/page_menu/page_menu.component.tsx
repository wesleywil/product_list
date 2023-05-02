type PageMenuProps = {
  title: string;
  children: React.ReactNode;
};

const PageMenu = ({ title, children }: PageMenuProps) => {
  return (
    <div className="mt-4 mb-2 pt-8 pb-2 px-4 flex flex-col md:flex-row items-center gap-2 justify-between border-b-2 border-slate-600">
      <h1 className="text-3xl font-semibold">{title}</h1>
      <div className=" flex justify-center gap-4">{children}</div>
    </div>
  );
};

export default PageMenu;
