import React from "react";
import { motion } from "framer-motion";

const transition = { duration: 0.6, ease: [0.6, 0.01, -0.05, 0.9] };

const Header = () => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={transition}
      className="header"
    >
      <div className="container">
        <div className="row v-center space-between">
          <div className="logo">
            <a href="/">ArcHiTecture.</a>
          </div>
          <div className="nav">
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
