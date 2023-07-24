import React from "react";
import "./Home.css";
import "../Fonts/Poppins-Bold.ttf";

const Home = () => {
  return (
    <section>
      <div className="main_page">
        <div className="images_img">
          <img src="Allcargo_Logo_2023.jpg" alt="" />
        </div>

        <img src="shutterstock_2144631851.jpg" alt="shutterstock" />

        <div className="image-text">
          <h1>Let your ambitions soar high!</h1>
          <p>Apply to India’s first logistics-based start-up cohort</p>
          <button type="button" className="btn">
            JOIN US NOW
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
