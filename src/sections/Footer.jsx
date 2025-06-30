import React from "react";
import { socialImgs } from "../constants/index";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <a href="/">Visit my blog</a>
        </div>
        <div className="socials">
          {socialImgs.map((img) => (
            <a>
              <img src={img.imgPath} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
