import React from "react";
import "./Add.css";

import addImage from "../../Images/add/add.svg";

const Add = () => {
  return (
    <div id="add">
      <h1 align="center"> Glad to see you among us </h1>

      <div className="add-flex">
        <img className="add-image" src={addImage} />

        <div className="container">
          <h2>We will call you as soon as possible </h2>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSd7eumhfSLGpJeJxo8ruv0bkZu0bPYD05EhaOsb45q81qtTcg/viewform?fbclid=IwAR0fI35RonDPrWhKisTAV7G4jD59Hcn71QsVCYrLJQj2TMfevA4RY6_wWeo"
            target={"_blank"}
          >
            <button>Start now! </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Add;
