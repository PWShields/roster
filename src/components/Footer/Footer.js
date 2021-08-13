import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <hr style={{width: "90%", marginTop: 20}}/>
            <span className="name">
        Made by{" "}
                <a href="https://www.stepsoft.com.au/" target="__blank">
          Stepsoft
        </a>
      </span>
            <div className="iconContainer">

            </div>
        </div>
    );
};

export default Footer;
