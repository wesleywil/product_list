import { Link } from "../../../node_modules/react-router-dom/dist/index";
import Footer from "../../components/footer/footer.component";
import PageMenu from "../../components/page_menu/page_menu.component";
import ProductItem from "../../components/product_item/product_item.component";

const Homepage = () => {
  return (
    <div className="min-h-screen border border-red-600">
      {/* Menu */}
      <PageMenu title="Product List">
        <Link
          to="/addproduct"
          className=" pt-1 px-2 bg-blue-400 hover:bg-blue-600 text-white hover:text-slate-200 text-xl font-bold rounded transition duration-700 ease-in-out"
        >
          Add
        </Link>
        <button className="px-2 bg-red-400 hover:bg-red-600 text-white hover:text-slate-200 text-xl font-bold rounded transition duration-700 ease-in-out">
          Mass Delete
        </button>
      </PageMenu>
      {/* Product List */}
      <div className="p-2 flex flex-wrap justify-center gap-4">
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Homepage;
