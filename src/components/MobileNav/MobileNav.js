import React, { useState } from "react";
import "./MobileNav.css";
import { navTable } from "../../Data/Data";
import { motion } from "framer-motion";
// import icons
import { XIcon } from "@heroicons/react/outline";
import { MenuAlt3Icon } from "@heroicons/react/outline";

// import framer-motion

import { Link } from "react-scroll";
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
    <nav className="nav-relative" id="nav-mobile">
      {/* menu icons */}
      <div onClick={() => setIsOpen(true)}>
        <MenuAlt3Icon className="cursor"></MenuAlt3Icon>
      </div>

      <motion.div
        className="initial-nav"
        variants={circleVariants}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
      ></motion.div>

      {/* menu */}
      <motion.ul
        className={`${isOpen ? "right-0" : "right-full"} list-nav-mobile`}
        variants={ulVariants}
        initial="hidden"
        animate={isOpen ? "visible" : ""}
      >
        {/* close icon */}
        <div
          onClick={() => {
            setIsOpen(false);
          }}
          className="nav-close-wrapper"
        >
          <XIcon />
        </div>
        {navTable.map((item, index) => {
          return (
            <li key={index} className="items-list">
              <a
                href={item.href}
                className="items"
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                {item.navMobileName}
              </a>
            </li>
          );
        })}
      </motion.ul>
    </nav>
  );
};

export default MobileNav;
