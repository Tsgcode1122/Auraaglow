import { useEffect } from "react";

const useTopToBottomSwipe = (elementSelector, rootMargin = "0px") => {
  useEffect(() => {
    const element = document.querySelector(elementSelector);

    const addAnimation = () => {
      element.classList.add("swipe-down");
    };

    const animationEndHandler = () => {
      element.classList.remove("swipe-down");
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          addAnimation();
        } else {
          animationEndHandler();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin,
    });

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [elementSelector, rootMargin]);
};

export default useTopToBottomSwipe;
