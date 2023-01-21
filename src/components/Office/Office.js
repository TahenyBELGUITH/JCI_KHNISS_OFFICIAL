import React, { useState, useEffect } from "react";
import "./Office.css";
import { officeTable } from "../../Data/Data";
import { officeYearTable } from "../../Data/Data";

import Social from "../Social/Social";

const Office = () => {
  const [item, setItem] = useState({ mondat: "2023" });
  const [office, setOffice] = useState([]);
  useEffect(() => {
    //get office base on year
    if (item.mondat === "") {
      setOffice([]);
    } else {
      const newOfficeTable = officeTable.filter((office) => {
        return office.year === item.mondat;
      });
      setOffice(newOfficeTable);
    }
  }, [item]);

  const handleClick = (e) => {
    console.log("first");
    setItem({ mondat: e.target.value });
  };

  return (
    <div id="office">
      <div className="d-flex">
        <h1>Executive Office</h1>
        <select>
          {officeYearTable.map((year, index) => {
            return (
              <option
                key={index}
                onSelect={(e) => {
                  handleClick(e, index);
                }}
                value={year.mondat}
              >
                {year.mondat}
              </option>
            );
          })}
        </select>
      </div>
      <ul class="cards">
        {officeTable.map((office, index) => {
          return (
            <li key={index}>
              <a href="" class="card">
                <img src={office.src} class="card__image" alt="" />
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
