import React from "react";
import { social } from "../../Data/Data";
import "./social.css"
const Social = () => {
  return (
    <div className="nav-social about__me">
      <ul className=" d-flex nav-social-list">
        {social.map((socialItem, index) => {
          return (
            <a key={index} href={socialItem.href} target="_blank">
              <li className="footer-nav-items" key={index}>
                {socialItem.icon}
              </li>
            </a>
          );
        })}
      </ul>
    </div>
  );
};

export default Social;
