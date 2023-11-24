import React from "react";
import productImg from "../assets/product.png";
import useBottomToTopSwipe from "./useBottomToTopSwipe";
import useLeftToRightSwipe from "./useLeftToRightSwipe";
import "../Media.css";
const Product = () => {
  useLeftToRightSwipe(".product-us h2");
  useBottomToTopSwipe(".product-us article");
  return (
    <>
      <div className="product" id="product">
        <div className="product-us">
          <div>
            <h2> Our Product</h2>
          </div>
          <div>
            <article>
              At Auraglow, we take pride in our thoughtfully curated range of
              skincare solutions designed to elevate your beauty routine. Each
              product is meticulously crafted to deliver visible and lasting
              results, ensuring your skin receives the care it deserves.
            </article>
          </div>
          <div className="about-us-link">
            <a
              className="about-us-links"
              href="https://www.instagram.com/soft_webdesigns/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Get the Product</button>
            </a>
          </div>
        </div>
        <div className="product-img">
          <img src={productImg} alt="" />
        </div>
      </div>
    </>
  );
};

export default Product;
