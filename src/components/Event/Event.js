import React from "react";
import "./Event.css";
import EventWave from "../../Images/Decor/eventWave.svg";

const Event = () => {
  return (
    <div id="event">
      {/* <img src={EventWave} /> */}
      <h1 className="intro-span event-heading">
        {" "}
        🤍 Discover Our Activities 🤍{" "}
      </h1>
      <a
        href="https://www.facebook.com/JCI-Khniss-318957112019536"
        target="_blank"
      >
        <button type="button">Harry up! 😍 </button>
      </a>
    </div>
  );
};

export default Event;
