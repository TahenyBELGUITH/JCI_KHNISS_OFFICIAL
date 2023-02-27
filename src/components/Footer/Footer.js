import React from "react";
import { socialJCI } from "../../Data/Data";
import "./Footer.css";
import { JCILinks } from "../../Data/Data";

const Footer = () => {
  return (
    <div className="footer">
      <h4 className="p-6">
        Created with ❤️ by {"  "}
        <span className="footer-span">
          <a href="https://taheny-belguith.vercel.app/" target="_blank">
            Taheny Belguith
          </a>
        </span>{" "}
        &copy;
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
