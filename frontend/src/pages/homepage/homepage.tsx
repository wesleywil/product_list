import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store";
import { Link } from "react-router-dom";

import { fetchProducts } from "../../redux/products/products";

import Footer from "../../components/footer/footer.component";
import PageMenu from "../../components/page_menu/page_menu.component";
import ProductItem from "../../components/product_item/product_item.component";

const Homepage = () => {
  const status = useSelector((state: RootState) => state.products.status);
  const products = useSelector((state: RootState) => state.products.products);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    console.log("Products", products);
    if (status === "idle" || status === "product added successfully") {
      dispatch(fetchProducts());
    }
  }, [status, products]);
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
        {products.length
          ? products.map((item) => <ProductItem key={item.id} item={item} />)
          : "NO PRODUCTS"}
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Homepage;
