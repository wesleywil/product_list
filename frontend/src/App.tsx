import {
  BrowserRouter,
  Routes,
  Route,
} from "../node_modules/react-router-dom/dist/index";

// Pages
import Homepage from "./pages/homepage/homepage";
import AddProduct from "./pages/add_product/add_product";

// Components

// Styles
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Homepage />} />
        <Route path="/addproduct" element={<AddProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
