import React from "react";
import ProfilePic from "../images/ProfilePic.jpg";
import "./Header.css";

const header = () => {
  return (
    <>
      <div className="card">
        <img src={ProfilePic} />
      </div>
    </>
  );
};

export default header;
