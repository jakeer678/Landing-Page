import React from "react";
import "./SubMiddleComponent.css";

const SubMiddleComponent = () => {
  return (
    <>
      <div className="headingsub">
        <div className="heading_bottom">
          <h5>INVESTMENT COMMITTEE</h5>
          <h1>Seasoned professional leadership</h1>
        </div>
      </div>

      <div className="imagesPesron">
        <div>
          <img
            src="https://www.allcargologistics.com/DataFiles/cmsteam/cfse8950.jpg"
            alt=""
            className="firstimage"
          />
          <p>
            <span>Adarsh Hegde</span>
          </p>
          <h6>
            Managing Director, <br></br>Allcargo Logistics
          </h6>
        </div>

        <div>
          <img src="Jitesh-Shetty.jpg" alt="" />
          <p>
            <span>Jitesh Shetty</span>
          </p>
          <h6>
            Director, <br></br>ECU Worldwide,
          </h6>
        </div>
        <div>
          <img
            src="https://i1.wp.com/hrnxt.com/wp-content/uploads/2023/03/Suresh-Kumar-R.jpg?resize=250%2C250&ssl=1"
            alt=""
          />
          <p>
            <span>Suresh Kumar R</span>
          </p>
          <h6>
            Managing Director,<br></br>Allcargo Terminals,
          </h6>
        </div>
        <div>
          <img src="IMG_2586-a.jpg" alt="" />
          <p>
            <span>Pirojshaw Sarkari (Phil)</span>
          </p>
          <h6>
            Managing Director & CEO,<br></br>Gati-KWE Ltd.
          </h6>
        </div>
      </div>
    </>
  );
};

export default SubMiddleComponent;
