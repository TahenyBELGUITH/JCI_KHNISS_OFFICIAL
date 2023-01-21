import React from "react";
import "./Faq.css";
import { cardTable } from "../../Data/Data";
import FaqWave from "../../Images/Decor/faqwave.svg";

const Faq = () => {
  return (
    <div id="faq">
      <img src={FaqWave} className="faq-image" />
      <div class="container">
        {cardTable.map((card, index) => {
          return (
            <div class="card">
              <div class="box">
                <div class="content">
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
