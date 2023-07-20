import React from "react";
import "./SubMiddleComponent.css";

const SubMiddleComponent = () => {
  return (
    <>
      <div className="heading_bottom">
        <h5>INVESTMENT COMMITTEE</h5>
        <h1>Seasoned professional leadership</h1>
      </div>
      <div className="imagesPesron">
        <div>
          <img
            src="https://www.allcargologistics.com/DataFiles/cmsteam/cfse8950.jpg"
            alt=""
          />
          <p>
            <span>Adarsh Hegde</span> <br></br>Managing Director, <br></br>
            Allcargo Logistics
          </p>
        </div>
        <div>
          <img src="Jitesh-Shetty.jpg" alt="" />
          <p>
            <span>Jitesh Shetty</span> <br></br>Director,
            <br></br>
            ECU Worldwide,
          </p>
        </div>
        <div>
          <img src="IMG_2586-a.jpg" alt="" />
          <p>
            <span>Pirojshaw Sarkari (Phil)</span> <br></br>Managing Director &
            CEO, <br></br>
            Gati-KWE Ltd.
          </p>
        </div>
      </div>
    </>
  );
};

export default SubMiddleComponent;
