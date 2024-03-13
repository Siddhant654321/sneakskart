import React, { memo, useContext, useState } from "react";
import { toast } from "react-toastify";

import "./SingleProductPage.css";
import config from "../../config.json";
import QuantityInput from "./QuantityInput";
import { useParams } from "react-router-dom";
import useData from "../../hooks/useData";
import Loader from "./../Common/Loader";
import CartContext from "../../contexts/CartContext";
import UserContext from "../../contexts/UserContext";

const SingleProductPage = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useContext(CartContext);
  const user = useContext(UserContext);

  const { id } = useParams();

  const {
    data: product,
    error,
    isLoading,
  } = useData(`/products/${id}`, null, ["products", id]);

  const handleAddToCart = (product, quantity) => {
    addToCart(product, quantity);
    toast.success("Item added successfully!");
  };

  return (
    <section className="align_center single_product">
      {error && <em className="form_error">{error.message}</em>}
      {isLoading && <Loader />}
      {product && (
        <>
          <div className="align_center products_image_container">
            <div className="single_product_thumbnails">
              {product.images.map((image, index) => (
                <img
                  src={`${config.backendURL}/products/${image}`}
                  alt={product.title}
                  className={selectedImage === index ? "selected_image" : ""}
                  onClick={() => setSelectedImage(index)}
                />
              ))}
            </div>

            <img
              src={`${config.backendURL}/products/${product.images[selectedImage]}`}
              alt={product.title}
              className="single_product_display"
            />
          </div>

          <div className="single_product_details">
            <h1 className="single_product_title">{product.title}</h1>
            <p className="single_product_description">{product.description}</p>
            <p className="single_product_price">${product.price.toFixed(2)}</p>

            {user && (
              <>
                <div className="quantity_section">
                  <h2 className="quantity_title">Quantity:</h2>
                  <div className="align_center quantity_input">
                    <QuantityInput
                      quantity={quantity}
                      setQuantity={setQuantity}
                      stock={product.stock}
                    />
                  </div>
                </div>

                <button
                  className="search_button add_cart"
                  onClick={() => handleAddToCart(product, quantity)}
                >
                  Add to Cart
                </button>
              </>
            )}
          </div>
        </>
      )}
    </section>
  );
};

export default memo(SingleProductPage);
