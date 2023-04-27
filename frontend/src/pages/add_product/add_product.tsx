import Footer from "../../components/footer/footer.component";
import PageMenu from "../../components/page_menu/page_menu.component";

const AddProduct = () => {
  return (
    <div className="min-h-screen border border-red-600">
      {/* Menu */}
      <PageMenu title="Product List" btnOne="Save" btnTwo="Cancel" />
      {/* Form */}
      <div className="p-2 flex flex-wrap justify-center gap-4"></div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AddProduct;
