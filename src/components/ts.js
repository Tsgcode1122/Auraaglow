import React, { useState } from "react";
import "../SubscribeForm.css";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(`Subscribed with email: ${email}`);

    setEmail("");
  };
  return (
    <>
      <div className="footer">
        <div className="footer-4">
          <p>Subscribe To Our Email</p>
          <h3>For Latest News & Updates</h3>
          <form onSubmit={handleSubmit} className="form-4">
            <div className="input-container">
              <input
                type="email"
                className="subscribe-input"
                placeholder="Enter your email"
                value={email}
                onChange={handleInputChange}
                required
              />
              <button type="submit" className="subscribe-button">
                Subscribe
              </button>
            </div>
          </form>

          <h4>
            UI/UX by Israel Ayooluwa <br />
            Frontend Design by Solomon Tsg <br />
          </h4>
        </div>
      </div>
    </>
  );
};

export default Footer;
