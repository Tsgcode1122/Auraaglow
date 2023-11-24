import React from "react";
import handImg from "../assets/rectangle.png";
import useBottomToTopSwipe from "./useBottomToTopSwipe";
import useLeftToRightSwipe from "./useLeftToRightSwipe";
import "../Media.css";
const About = () => {
  useLeftToRightSwipe(".about-us h2");
  useBottomToTopSwipe(".about-us article");
  return (
    <>
      <div className="about" id="about">
        <div className="about-img">
          <img src={handImg} alt="" />
        </div>
        <div className="about-us">
          <div>
            <h2>About Us</h2>
          </div>
          <div>
            <article>
              At Auraglow, we believe that true beauty starts with healthy,
              vibrant skin. Our passion for skincare and commitment to
              excellence drive us to create premium products that deliver
              transformative results, giving you the radiant glow you deserve.
              Our mission is to empower you to embrace your natural beauty and
              illuminate your skin from within....
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
            <a
              className="about-us-linkss"
              href="https://www.instagram.com/soft_webdesigns/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Continue reading...</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
