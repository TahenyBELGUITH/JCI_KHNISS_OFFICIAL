import "./Intro.css";
import Team from "../../Images/Intro/team.svg";
//
import React from "react";

const Intro = () => {
  return (
    <div className="intro-wrapper" id="home">
      <h1 className="heading-wrapper">
         We are <span className="intro-span">JAYCEES KHNISS </span>
        young <span className="intro-span">active </span> citizens ... 
      </h1>
      <div className="intro-content d-flex">
        <div className="right">
          <img src={Team} />
        </div>
        <div className="left">
          <p>
            Are you a young <span className="intro-span">active </span>citizen?{" "}
            <br></br>Do you want to make a
            <span className="intro-span"> difference</span> in your community?
            <br></br> Join us on this journey...
          </p>
          <div>
            <a href="#add">
              <button type="button" className="cta1">
                Get started now!
              </button>
            </a>
            <a href="#contact">
              <button type="button" className="cta2">
                Let's chat!
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* <div class="area">
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div> */}
    </div>
  );
};

export default Intro;
