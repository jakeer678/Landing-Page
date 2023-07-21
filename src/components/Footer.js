import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <img
          src="https://wallpapers.com/images/hd/dark-blue-paint-strokes-1rsfpmx7gtht9j79.jpg"
          alt=""
        />
        <div className="textimage">
          <h2>Let’s start!</h2>
          <div className="sideheading">
            <p>
              Ready to accelerate growth and progress with Allcargo Group’s
              start-up <br></br>accelerator? Tell us how you want to collaborate
              and create logistics magic, together.
            </p>
            <button type="button" className="btnbtn">
              WRITE TO US
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
