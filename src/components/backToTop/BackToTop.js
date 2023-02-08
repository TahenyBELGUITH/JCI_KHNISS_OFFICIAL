import React, { useState, useEffect } from "react";
import "./BackToTop.css";

// import link
import { animateScroll as scroll } from "react-scroll";

// import icon
import { GoChevronUp } from "react-icons/go";
const BackToTop = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 600 ? setShow(true) : setShow(false);
    });
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    show && (
      <button onClick={() => scrollToTop()} className=" backToTopClass">
        <GoChevronUp className="w-6 h-6" />
      </button>
    )
  );
};

export default BackToTop;
