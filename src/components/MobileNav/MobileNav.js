import React, { useState } from "react";
import "./MobileNav.css";
import { navTable } from "../../Data/Data";
import { motion } from "framer-motion";


import { FiMenu } from "react-icons/fi";
import { TfiClose } from "react-icons/tfi";
const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  // framer-motion variants
  const circleVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 100,
      transition: {
        type: "spring",
        stiffness: 160,
        damping: 60,
      },
    },
  };

  const ulVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
      },
    },
 };
 

  return (
    <div className="n-wrapper" id="Navbar">
      <FiMenu />
      <TfiClose />
      <ul>
        {navTable.map((nav, index) => {
          return (
            <a key={index} href={nav.href}>
              <li>{nav.href}</li>
            </a>
          );
        })}
      </ul>
    </div>
  );
};

export default MobileNav;
