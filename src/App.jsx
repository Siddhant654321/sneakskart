import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ProductsPage from "./components/Products/ProductsPage";
import HomePage from "./components/Home/HomePage";
import SingleProductPage from "./components/SingleProduct/SingleProductPage";
import CartPage from "./components/Cart/CartPage";
import MyOrderPage from "./components/MyOrder/MyOrderPage";
import LoginPage from "./components/Authentication/LoginPage";
import "./components/Authentication/SignupPage.css";
import SignupPage from "./components/Authentication/SignupPage";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        {/* <HomePage /> */}
        {/* <ProductsPage /> */}
        {/* <SingleProductPage /> */}
        {/* <CartPage /> */}
        {/* <MyOrderPage /> */}
        {/* <LoginPage /> */}
        <SignupPage />
      </main>
    </div>
  );
};
export default App;
