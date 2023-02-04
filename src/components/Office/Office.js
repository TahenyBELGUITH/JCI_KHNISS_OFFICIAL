import React, { useState, useEffect } from "react";
import "./Office.css";
import { officeTable, officeYearTable } from "../../Data/Data";
import { type } from "@testing-library/user-event/dist/type";
import Social from "../Social/Social";
const Office = () => {
  // Selected Year filter
  const [item, setItem] = useState({ mondat: 2023 });
  const [office, setOffice] = useState([]);

  useEffect(() => {
    let newFilteredOffice = officeTable.filter((office) => {
      return office.year === item.mondat;
    });
    setOffice(newFilteredOffice);
  }, [item]);

  const handleClick = (e) => {
    setItem({ mondat: +e.target.textContent });
  };

  return (
    <div id="office">
      <div className="d-flex officeYears">
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
        {office.map((office, index) => {
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

      {/* {office.map((item, index) => {
        return <OfficeCard item={item} key={index} />;
      })} */}
      {/* <h1>{item.year}</h1> */}
    </div>
  );
};

export default Office;
