import React from "react";
import "./Contact.css";
import wave from "../../Images/Decor/footerwave.svg";
const Contact = () => {
  return (
    <>
      {" "}
      <div id="contact">
        <div class="login-box">
          <h2>🤍 Let's chat! 🤍</h2>
          <form>
            <div class="user-box">
              <input type="email" name="" required="" />
              <label>Email</label>
            </div>
            <div class="user-box">
              <input type="text" name="" required="" />
              <label>Object</label>
            </div>
            <div class="user-box">
              <input type="text" name="" required="" />
              <label>Your message</label>
            </div>
            <a href="#">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Submit
            </a>
          </form>
        </div>
      </div>
      <img className="contact-image" src={wave} />
    </>
  );
};

export default Contact;
