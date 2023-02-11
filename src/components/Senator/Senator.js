import React from "react";
import "./Senator.css";
import { Senators } from "../../Data/Data";
const Senator = () => {
  return (
    <div id="senators">
      <h2 className="sen-heading" align="center">
        Our Senators
      </h2>
      <div class="sen-container ">
        {Senators.map((senator, index) => {
          return (
            <div class="card" key={index}>
              <div class="face face1">
                <div class="content">
                  <div class="icon">
                    <img
                      src={senator.src}
                      alt="senator pic"
                      className="sen-pic"
                    />
                  </div>
                </div>
              </div>
              <div class="face face2">
                <div class="content">
                  <h3>
                    <a href={senator.href} target="_blank">
                      {senator.name}
                    </a>
                  </h3>
                  <p>{senator.year}</p>
                  <div className="card__description__list">
                    <ul>
                      <a href={senator.faceHref} key={index} target="_blank">
                        <li>{senator.faceIcon}</li>
                      </a>
                      <a href={senator.instHref} key={index} target="_blank">
                        <li>{senator.instIcon}</li>
                      </a>
                      <a href={senator.linkHref} key={index} target="_blank">
                        <li>{senator.linkIcon}</li>
                      </a>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Senator;
