import React from "react";
import "./Contact.css";
import wave from "../../Images/Decor/footerwave.svg";
import addWaveBtm from "../../Images/Decor/addbtmwave.svg";
import ContactImage from "../../Images/contact/contact.svg";

const Contact = () => {
  return (
    <>
      {" "}
      <img src={addWaveBtm} className="add-wave-btm" />;
      <div id="contact">
        <div className="login-box">
          <h2>🤍 Let's chat! 🤍</h2>
          <form>
            <div className="user-box">
              <input type="email" name="email" required />
              <label>Email</label>
            </div>
            <div className="user-box">
              <input type="text" name="object" required />
              <label>Object</label>
            </div>
            <div className="user-box">
              <input type="text" name="message" required />
              <label> Your message</label>
            </div>
            <a href="mailto:taheny.belguith@gmail.com">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Submit
            </a>
          </form>
        </div>
        <img className="ContactImage" src={ContactImage} />
      </div>
      <img className="contact-image" src={wave} />
    </>
  );
};

export default Contact;
