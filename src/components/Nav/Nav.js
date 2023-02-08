import React from "react";
import "./Nav.css";

import { navTable } from "../../Data/Data";

const Nav = () => {
  return (
    <div className="nav-container">
      <ul className="nav-list d-flex">
        {navTable.map((navItem, index) => {
          return (
            <a key={index} href={navItem.href}>
              <li className="nav-items">{navItem.name}</li>
            </a>
          );
        })}
      </ul>
    </div>
  );
};

export default Nav;
