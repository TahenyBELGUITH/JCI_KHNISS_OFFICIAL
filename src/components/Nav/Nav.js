import React from "react";
import "./Nav.css";

import { navTable } from "../../Data/Data";

const Nav = () => {
  return (
    <div className="nav-container">
      {/* <ul className="nav-list d-flex">
        {navTable.map((navItem, index) => {
          return (
            <a key={index} href={navItem.href}>
              <li className="nav-items">{navItem.name}</li>
            </a>
          );
        })}
      </ul> */}

      <nav>
        <ul>
          <li>
            <div class="home-icon">
              <div class="roof">
                <div class="roof-edge"></div>
              </div>
              <div class="front"></div>
            </div>
          </li>
          <li>
            <div class="about-icon">
              <div class="head">
                <div class="eyes"></div>
                <div class="beard"></div>
              </div>
            </div>
          </li>
          <li>
            <div class="work-icon">
              <div class="paper"></div>
              <div class="lines"></div>
              <div class="lines"></div>
              <div class="lines"></div>
            </div>
          </li>
          <li>
            <div class="mail-icon">
              <div class="mail-base">
                <div class="mail-top"></div>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
