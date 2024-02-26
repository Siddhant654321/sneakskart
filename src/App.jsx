import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ProductsPage from "./components/Products/ProductsPage";
import HomePage from "./components/Home/HomePage";
import SingleProductPage from "./components/SingleProduct/SingleProductPage";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        {/* <HomePage /> */}
        {/* <ProductsPage /> */}
        <SingleProductPage />
      </main>
    </div>
  );
};
export default App;
