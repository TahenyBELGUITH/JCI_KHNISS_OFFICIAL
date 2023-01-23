import React, { useState, useEffect } from "react";
import "./Office.css";
import { officeTable } from "../../Data/Data";
import { officeYearTable } from "../../Data/Data";

import Social from "../Social/Social";

const Office = () => {
  const [selected, setSelected] = useState(officeTable[0].year);

  const handleChange = (event) => {
    console.log(event.target.value);
    // setSelected(event.target.value);
    officeTable.filter((office) =>
      setSelected(office.year === selected.mondat)
    );
  };

  return (
    <div id="office">
      <div className="d-flex">
        <h1>Executive Office</h1>
        <select value={selected} onChange={handleChange}>
          {officeYearTable.map((option, index) => {
            return (
              <option key={index} value={option.mondat}>
                {option.mondat}
              </option>
            );
          })}
        </select>
      </div>
      <ul className="cards">
        {officeTable.map((office, index) => {
          return (
            <li key={index}>
              <a href="" className="card">
                <img src={office.src} className="card__image" alt="" />
                <div className="card__overlay">
                  <div className="card__header">
                    <svg
                      className="card__arc"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path />
                    </svg>
                    <img className="card__thumb" src={office.src} alt="" />
                    <div className="card__header-text">
                      <h2 className="card__title">{office.name}</h2>
                      <h3 className="card__status">{office.post}</h3>
                    </div>
                  </div>
                  <div className="card__description">
                    <Social />
                  </div>
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Office;
