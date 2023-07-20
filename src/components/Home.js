import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <section>
      <div className="main_page">
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
