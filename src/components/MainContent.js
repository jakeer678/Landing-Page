import React from "react";
import "./MainContent.css";

const MainContent = () => {
  return (
    <>
      <div className="main-container">
        <div className="container">
          <img src="image1.png" alt="" />
          <p>
            Access an extensive network that <br></br>spans 180 countries and
            covers the length and <br></br> breadth of India
          </p>
        </div>
        <div className="container">
          <img src="image2.png" alt="" />
          <p>
            Access an extensive network that <br></br>spans 180 countries and
            covers the length and <br></br> breadth of India
          </p>
        </div>
      </div>
      <div>
        <div className="container_bottom">
          <img src="IMG_4961-edited.jpg" alt="" />
          <p>
            “Considering the pace at which the logistics sector is galloping,
            and given its increasing complexities, it is imperative that
            industry leaders and dynamic start-ups team up. We must leverage
            each other’s capabilities and strengths to enhance efficiencies and
            streamline operations at all levels of global supply chains.
            Adoption of new-age technologies, co-creating innovative solutions
            that challenge status quo, and working towards reducing the carbon
            footprint of the logistics sector are factors that should ideally
            drive this collaboration.”
            <br></br> <br></br>
            <span className="bottom">
              – Shashi Kiran Shetty, Founder and Chairman, Allcargo Group
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default MainContent;
