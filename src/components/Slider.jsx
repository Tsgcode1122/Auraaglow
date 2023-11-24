import React, { useState, useEffect } from "react";
import "../Slider.css";
import testImg from "../assets/image1.png";
import test1Img from "../assets/produc1.png";
import test2Img from "../assets/produc2.png";
import "../Media.css";
import useZoomInAnimation from "./useZoomInAnimation";

const Slider = () => {
  useZoomInAnimation(".testimonial");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showNextButton, setShowNextButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sliderSection = document.getElementById("contact");
      if (sliderSection) {
        const rect = sliderSection.getBoundingClientRect();
        setShowNextButton(rect.top <= window.innerHeight && rect.bottom >= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  };

  const handleNext = () => {
    const totalSlides = slides.length;
    setCurrentIndex((prevIndex) =>
      prevIndex < totalSlides - 1 ? prevIndex + 1 : prevIndex,
    );
  };

  const slides = [
    {
      id: 0,
      image: testImg,
      article:
        "I've tried countless skincare products, but nothing compares to Auraglow's Skin Glow. My skin has never felt smoother or looked more radiant. It's a game-changer!",
      author: "Baebilo Funmi",
    },
    {
      id: 1,
      image: test1Img,
      article:
        "Discovering Auraglow's Skin Glow was a game-changer for my skincare routine. The unmatched results leave my skin feeling incredibly smooth and looking radiantly vibrant. It's the secret to a healthier and more radiant complexion.",
      author: "Ayo Israel",
    },
    {
      id: 2,
      image: test2Img,
      article:
        "Embarking on a skincare journey, Auraglow's Skin Glow became my ultimate game-changer. Experience the magic in just three words: smooth, radiant, transformative. Elevate your routine and let your skin tell the story.",
      author: "Solomon Tosin",
    },
    // Add more slides as needed
  ];

  const currentSlide = slides[currentIndex];

  return (
    <div className="testimonial" id="contact">
      <h2>Testimonials</h2>

      <div className="slider-container">
        <div
          className={`slide ${
            currentIndex === currentSlide.id ? "active" : ""
          } ${
            currentSlide.id === 1
              ? "second-slide"
              : currentSlide.id === 2
                ? "third-slide"
                : ""
          }`}
        >
          <img src={currentSlide.image} alt={`Image ${currentSlide.id + 1}`} />
          <div className="write-pad">
            <article>{currentSlide.article}</article>
            <p>{currentSlide.author}</p>
          </div>
        </div>
      </div>
      <div className="nav-buttons-container">
        {showNextButton && (
          <button className="nav-button" onClick={handlePrev}>
            &lt;
          </button>
        )}
        {showNextButton && (
          <button className="nav-buttons" onClick={handleNext}>
            &gt;
          </button>
        )}
      </div>
      <div className="circle-indicator">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`circle ${currentIndex === index ? "active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
