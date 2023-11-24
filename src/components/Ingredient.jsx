import React from "react";
import "../Media.css";
import useBottomToTopSwipe from "./useBottomToTopSwipe";
const Ingredient = () => {
  useBottomToTopSwipe(".ingredient article");
  return (
    <>
      <div className="ingredient">
        <div className="ingredient-1">
          <h2>Ingredients</h2>
          <article>
            Aloe Vera: Soothing and hydrating, aloe vera is known for its
            anti-inflammatory properties and ability to promote skin healing.
            Coconut Oil: A rich source of fatty acids, coconut oil nourishes and
            moisturizes the skin, leaving it soft and supple. Jojoba Oil: A
            lightweight oil that closely resembles the skin's natural sebum,
            making it an excellent moisturizer and...
          </article>
          <div className="ingredient-1b">
            <a
              href="https://www.instagram.com/soft_webdesigns/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Read more....</button>
            </a>
          </div>
        </div>
        <div className="ingredient-1">
          <h2>How it works</h2>
          <article>
            Auraglow's skincare products work in harmony with your skin's
            natural processes to unveil your inner radiance. Our expertly
            crafted formulas are designed to address specific skincare concerns,
            delivering visible and long-lasting results. Our key ingredients,
            carefully selected for their potency and effectiveness, work
            synergistically to nourish, revitalize, and....
          </article>
          <div className="ingredient-1b">
            <a
              href="https://www.instagram.com/soft_webdesigns/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Read more....</button>
            </a>
          </div>
        </div>
        <div className="ingredient-1">
          <h2>Usage Instruction</h2>
          <article>
            Aloe Vera: Soothing and hydrating, aloe vera is known for its
            anti-inflammatory properties and ability to promote skin healing.
            Coconut Oil: A rich source of fatty acids, coconut oil nourishes and
            moisturizes the skin, leaving it soft and supple. Jojoba Oil: A
            lightweight oil that closely resembles the skin's natural sebum,
            making it an excellent moisturizer and...
          </article>
          <div className="ingredient-1b">
            <a
              href="https://www.instagram.com/soft_webdesigns/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Read more....</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ingredient;
