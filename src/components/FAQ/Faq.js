import React from "react";
import "./Faq.css";
import { cardTable } from "../../Data/Data";
import FaqWave from "../../Images/Decor/faqwave.svg";

const Faq = () => {
  return (
    <div id="faq">
      <img src={FaqWave} className="faq-image" />
      <div className="container">
        {cardTable.map((card, index) => {
          return (
            <div key={index} className="card">
              <div className="box">
                <div className="content">
                  <div key={index}>
                    <h2>{card.number}</h2>
                    <h3>{card.question}</h3>
                    <p>{card.answer}</p>
                    <a href={card.href} target="_blank">
                      Read More
                    </a>
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

export default Faq;
