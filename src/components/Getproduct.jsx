import React, { useState } from "react";
import producImg from "../assets/produc.png";
import produc1Img from "../assets/produc1.png";
import produc2Img from "../assets/produc2.png";
import "../Media.css";

const Getproduct = () => {
  // State to manage quantities for each product
  const [quantities, setQuantities] = useState({
    product1: 1,
    product2: 1,
    product3: 1,
  });

  // Event handler to increase quantity
  const handleIncrease = (productKey) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productKey]: prevQuantities[productKey] + 1,
    }));
  };

  // Event handler to decrease quantity
  const handleDecrease = (productKey) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productKey]: Math.max(1, prevQuantities[productKey] - 1),
    }));
  };

  return (
    <>
      <div className="get-product">
        <h2>Get Our Products</h2>
      </div>
      <div className="get-product-1">
        <div className="get-product-11">
          {/* Product 1 */}
          <div className="get-product-img">
            <img src={producImg} alt="" />
          </div>
          <div className="get-product-c">
            <div className="get-product-c1">
              <h5>Skin Smooth</h5>
              <span>$150</span>
            </div>
            <div className="get-product-cb">
              <button onClick={() => handleDecrease("product1")}>-</button>
              <span>{quantities.product1}</span>
              <button onClick={() => handleIncrease("product1")}>+</button>
            </div>
          </div>
          <div className="get-product-but">
            <a
              href="https://www.instagram.com/soft_webdesigns/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Get the Product</button>
            </a>
          </div>
        </div>

        {/* Product 2 */}
        <div>
          <div className="get-product-img">
            <img src={produc1Img} alt="" />
          </div>
          <div className="get-product-c">
            <div className="get-product-c1">
              <h5>Skin Syrup</h5>
              <span>$200</span>
            </div>
            <div className="get-product-cb">
              <button onClick={() => handleDecrease("product2")}>-</button>
              <span>{quantities.product2}</span>
              <button onClick={() => handleIncrease("product2")}>+</button>
            </div>
          </div>
          <div className="get-product-but">
            <a
              href="https://www.instagram.com/soft_webdesigns/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Get the Product</button>
            </a>
          </div>
        </div>
        {/* Product 3 */}
        <div>
          <div className="get-product-img">
            <img src={produc2Img} alt="" />
          </div>
          <div className="get-product-c">
            <div className="get-product-c1">
              <h5>Skin Natural</h5>
              <span>$250</span>
            </div>
            <div className="get-product-cb">
              <button onClick={() => handleDecrease("product3")}>-</button>
              <span>{quantities.product3}</span>
              <button onClick={() => handleIncrease("product3")}>+</button>
            </div>
          </div>
          <div className="get-product-but">
            <a
              href="https://www.instagram.com/soft_webdesigns/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Get the Product</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Getproduct;
