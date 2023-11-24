import React, { useState, useEffect } from "react";

const Whychoose = () => {
  const [counts, setCounts] = useState({
    supplies: 3000,
    customers: 0,
    products: 0,
    partners: 0,
  });

  const targets = {
    supplies: 5235,
    customers: 97,
    products: 3,
    partners: 37,
  };

  useEffect(() => {
    const section = document.querySelector("#why-choose-1");

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          Object.keys(counts).forEach((key) => {
            const targetNumber = targets[key];

            if (counts[key] < targetNumber) {
              const intervalId = setInterval(() => {
                setCounts((prevCounts) => {
                  const newCounts = { ...prevCounts };
                  newCounts[key] += 1;
                  return newCounts[key] <= targetNumber
                    ? newCounts
                    : prevCounts;
                });
              }, 5);

              return () => clearInterval(intervalId);
            }
          });
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(section);

    return () => observer.disconnect();
  }, [counts, targets]);

  return (
    <>
      <div id="why-choose-section" className="why-choose">
        <div className="why-choose-1" id="why-choose-1">
          <h3>{counts.supplies.toLocaleString()}</h3>
          <span>Supplies</span>
        </div>
        <div className="why-choose-1">
          <h3>{counts.customers}%</h3>
          <span>Satisfied Customers</span>
        </div>
        <div className="why-choose-1">
          <h3>{counts.products}</h3>
          <span>Products</span>
        </div>
        <div className="why-choose-1">
          <h3>{counts.partners}</h3>
          <span>Active Partners</span>
        </div>
      </div>
    </>
  );
};

export default Whychoose;
