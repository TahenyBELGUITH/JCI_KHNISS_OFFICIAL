import React from "react";
import {socialJCI} from "../../Data/Data";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <h4 className="p-6">
        &copy; 2023{" "}
        <span className="footer-span">
          <a href="https://github.com/TahenyBELGUITH" target="_blank">
            Taheny Belguith
          </a>
        </span>{" "}
        . All rights reserved!
      </h4>
      <div className="nav-social about__me">
        <ul className=" d-flex nav-social-list">
          {socialJCI.map((socialItem, index) => {
            return (
              <a key={index} href={socialItem.href} target="_blank">
                <li className="footer-nav-items" key={index}>
                  {socialItem.icon}
                </li>
              </a>
            );
          })}
        </ul>
      </div>{" "}
    </div>
  );
};

export default Footer;
