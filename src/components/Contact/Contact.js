import React, { useState, useRef } from "react";
import "./Contact.css";
import wave from "../../Images/Decor/footerwave.svg";
import addWaveBtm from "../../Images/Decor/addbtmwave.svg";
import ContactImage from "../../Images/contact/contact.svg";
import { ToastContainer, toast } from "react-toastify";
import emailjs from "@emailjs/browser";

import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [done, setDone] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pqqzuqk",
        "template_iqfym7d",
        form.current,
        "R6xYrOVUlM9LCXpVQ"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  const showToastMessage = () => {
    toast.success("Success Notification !", {
      position: toast.POSITION.TOP_LEFT,
    });
  };

  return (
    <>
      {" "}
      <img src={addWaveBtm} className="add-wave-btm" />;
      <div id="contact">
        <div className="login-box">
          <h2>🤍 Let's chat! 🤍</h2>
          <form ref={form} onSubmit={sendEmail}>
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
            <button type="submit" onClick={done && showToastMessage}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Submit
            </button>
            <ToastContainer />
          </form>
        </div>
        <img className="ContactImage" src={ContactImage} />
      </div>
      <img className="contact-image" src={wave} />
    </>
  );
};

export default Contact;
