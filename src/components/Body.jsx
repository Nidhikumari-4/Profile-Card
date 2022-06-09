import React from "react";
import Mail from "../images/Mail.png";
import Linkedin from "../images/linkedin.png";
import "./Body.css";

const Body = () => {
  return (
    <>
      <div className="Body">
        <h1>Nidhi Kumari</h1>
        <h4>Frontend Developer</h4>
        <div className="btn">
          <a href="mailto:kumarinidhimain@gmail.com">
            <button className="btn1">
              <img src={Mail} />
              Email
            </button>
          </a>
          <a href="https://www.linkedin.com/in/nidhikumari-4" target="_blank">
            <button className="btn2">
              <img src={Linkedin} />
              Linkedin
            </button>
          </a>
        </div>
        <div className="info">
          <h2>About</h2>
          <p>
            I am a frontend developer with a particular interest in making
            things simple and automating daily tasks. I try to keep up with
            security and best practices, and am always looking for new things to
            learn.
          </p>
          <h2 className="heading2">Interests</h2>
          <p>
            Food expert. Music listener. Dancer. Reader. Internet fanatic.
            Learner. Illustrator. Travel geek. Coffee fanatic.
          </p>
        </div>
      </div>
    </>
  );
};

export default Body;
