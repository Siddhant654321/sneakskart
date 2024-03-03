import { Routes, Route } from "react-router-dom";
import ProductsPage from "../Products/ProductsPage";
import HomePage from "../Home/HomePage";
import SingleProductPage from "../SingleProduct/SingleProductPage";
import CartPage from "../Cart/CartPage";
import MyOrderPage from "../MyOrder/MyOrderPage";
import LoginPage from "../Authentication/LoginPage";
import "../Authentication/SignupPage.css";
import SignupPage from "../Authentication/SignupPage";
import Logout from "../Authentication/Logout";

const Routing = () => {
  
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/products/:id" element={<SingleProductPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/myorders" element={<MyOrderPage />} />
      <Route path="/logout" element={<Logout />} />
    </Routes>
  );
};
export default Routing;
