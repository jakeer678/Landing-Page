import React from "react";
import "./EndComponent.css";

const EndComponent = () => {
  return (
    <>
      <div className="headText">
        <div>
          <img src="shutterstock_511045759.jpg" alt="" />
          <p>
            <span>Impactful advisor network</span>
          </p>
          <p className="paragraph">
            We work with a number of external consultants<br></br> and experts,
            as well as interact with logistics <br></br>leaders at various
            associations and forums, to <br></br>help navigate the business
            complexities better.
          </p>
        </div>

        <div>
          <img src="shutterstock_287698937.jpg" alt="" />
          <p>
            <span>Inspiring success stories</span>
          </p>
          <p className="paragraph">
            We have worked with a number of start-ups that <br></br>are today
            doing incredible work and powering<br></br> innovation and progress
            in their respective <br></br>domains. You could be next!
          </p>
        </div>
        <div className="lastimage">
          <img src="  shutterstock_1430101409.jpg" alt="" />
          <p>
            <span>News and updates</span>
          </p>
          <p className="paragraph">
            Keep track of all our latest news, media
            <br></br>coverage, and stories that matter
          </p>
        </div>
      </div>
    </>
  );
};

export default EndComponent;
