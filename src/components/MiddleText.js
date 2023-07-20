import React from "react";
import "./MiddleText.css";

const MiddleText = () => {
  return (
    <>
      <div className="containerbottom">
        <img
          src="https://wallpapercave.com/wp/wp2050319.jpg"
          alt="shutterstock"
        />
        <div className="image-text1">
          <p>VALUE PROPOSITION</p>
          <h1>Let’s create logistics magic, together!</h1>
          <div>
            <div className="textcontent">
              <p>
                At Allcargo Group, we believe that win-win partnerships between
                large global multinationals and start-ups with great potential
                have the power to transform logistics, as well as contribute to
                socio-economic growth and progress. Here’s how we can work
                wonders, together.
              </p>
              <ul>
                <li>You can tap into our network and resources</li>
                <li>
                  Mentorship from senior professionals from diverse industries
                  and backgrounds
                </li>
                <li>Global perspective, backed by local excellence</li>
                <li>
                  Bolster global business supply chains with agility,
                  flexibility, and resilience
                </li>
                <li>
                  Combine strengths to tackle nice, specific logistics
                  challenges in the most effective and efficient ways
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MiddleText;
