import Footer from "../../components/footer/footer.component";
import PageMenu from "../../components/page_menu/page_menu.component";
import ProductItem from "../../components/product_item/product_item.component";

const Homepage = () => {
  return (
    <div className="min-h-screen border border-red-600">
      {/* Menu */}
      <PageMenu title="Product List" btnOne="Add" btnTwo="Mass Delete" />
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
