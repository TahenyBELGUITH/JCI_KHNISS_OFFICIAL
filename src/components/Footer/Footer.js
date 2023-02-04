import React from "react";
import "./Footer.css";
import Social from "../Social/Social";
const Footer = () => {
  return (
    <div className="footer">
      <h4 align="center" className="p-6">
        &copy; 2023{" "}
        <span className="footer-span">
          <a href="https://github.com/TahenyBELGUITH" target="_blank">
            Taheny Belguith
          </a>
        </span>{" "}
        . All rights reserved.
      </h4>
      <h4>Made with 💟 </h4>
    </div>
  );
};

export default Footer;
