import React, { useState, useEffect } from "react";
import "./Office.css";
import { officeTable, officeYearTable } from "../../Data/Data";
import Social from "../Social/Social";

const Office = () => {
  // Selected Year filter
  const [item, setItem] = useState({ year: 2023 });
  const [office, setOffice] = useState(officeTable[0].year);

  useEffect(() => {
    const newFilteredOffice = officeTable.filter((office) => {
      return office.year === item.year;
    });
    setOffice(newFilteredOffice);
  }, [item]);

  const handleClick = (e) => {
    setItem({ year: e.target.textContent });
  };
  return (
    <div id="office">
      <div className="d-flex">
        <h1>Executive Office</h1>
        <div id="year-options">
          {officeYearTable.map((yearOffice, index) => {
            return (
              <div
                key={index}
                onClick={(e) => {
                  handleClick(e);
                }}
                className={`${
                  item === yearOffice.mondat ? "active-option" : "filter-option"
                }`}
                id={yearOffice.mondat}
              >
                {yearOffice.mondat}
              </div>
            );
          })}
        </div>
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
                      <h3 className="card__status">
                        {office.post} - {office.year}
                      </h3>
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
      {console.log(item)}
      <h1>{item.year}</h1>
    </div>
  );
};

export default Office;
