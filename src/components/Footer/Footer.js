import React from "react";
import "./Footer.css";
import Social from "../Social/Social";
const Footer = () => {
  return (
    <div className="footer">
      <p align="center" className="p-6">
        &copy; 2023{" "}
        <span className="footer-span">
          <a href="https://github.com/TahenyBELGUITH" target="_blank">
            Taheny Belguith
          </a>
        </span>{" "}
        . All rights reserved.
      </p>
      <Social />
    </div>
  );
};

export default Footer;
