import React from "react";
import "./About.css";
import { AboutHistory } from "../../Data/Data";

const About = () => {
  return (
    <div id="start" class="timeline">
      <h1 class="heading" align="center">
        How we start?
      </h1>
      {AboutHistory.map((about, index) => {
        return (
          <div class="about-card" key={index}>
            <div class="card-body">
              <h1 class="card-title">{about.year}</h1>
              <h3 class="card-detail">{about.description}</h3>
              <a href={about.href} target="_blank">
                <button >Read more</button>
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default About;
