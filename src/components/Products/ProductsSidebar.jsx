import apiClient from "../../utils/api-client";
import LinkWithIcon from "../Navbar/LinkWithIcon";
import "./ProductsSidebar.css";
import rocket from "../../assets/rocket.png";
import { useEffect, useState } from "react";

const ProductsSidebar = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get("/category")
      .then((res) => setCategories(res.data))
      .catch((err) => setError(err.message));
  }, []);
  return (
    <aside className="products_sidebar">
      <h2>Category</h2>
      <div className="category_links">
        {error && <em className="form_error">{error}</em>}
        {categories.map((category) => (
          <LinkWithIcon
            key={category._id}
            title={category.name}
            link={`products?category=${category.name}`}
            emoji={`http://localhost:8000/category/${category.image}`}
            sidebar={true}
          />
        ))}
      </div>
    </aside>
  );
};
export default ProductsSidebar;
