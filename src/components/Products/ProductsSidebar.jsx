import React from "react";

import "./ProductsSidebar.css";
import config from "../../config.json";
import useData from "../../hooks/useData";
import { NavLink } from "react-router-dom";

const ProductsSidebar = () => {
  const { data: categories, error } = useData(
    "/category",
    null,
    ["categories"],
    24 * 60 * 60 * 1000,
  );

  return (
    <aside className="products_sidebar">
      <h2>Category</h2>

      <div className="category_links">
        {error && <em className="form_error">{error}</em>}
        {categories &&
          categories.map((category) => (
            <NavLink
              key={category._id}
              to={`/products?category=${category.name}`}
              className="align_center sidebar_link">
              {category.name}
            </NavLink>
          ))}
      </div>
    </aside>
  );
};

export default ProductsSidebar;
