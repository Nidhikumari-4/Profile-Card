import React from "react";
import TwitterIcon from "../images/TwitterIcon.png";
import FacebookIcon from "../images/FacebookIcon.png";
import IntagramIcon from "../images/InstagramIcon.png";
import GithubIcon from "../images/GitHubIcon.png";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="Links">
        <a href="https://twitter.com/nidhikumari_4" target="_blank">
          <img src={TwitterIcon} />
        </a>
        <a href="https://www.facebook.com/" target="_blank">
          <img src={FacebookIcon} />
        </a>
        <a href="https://www.instagram.com/" target="_blank">
          <img src={IntagramIcon} />
        </a>
        <a href="https://github.com/Nidhikumari-4" target="_blank">
          <img src={GithubIcon} />
        </a>
      </div>
    </>
  );
};

export default Footer;
