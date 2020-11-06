import React from "react";
import { ReactComponent as RightArrow } from "../assets/arrow-right.svg";
import { motion } from "framer-motion";

const transition = { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] };

const Banner = () => {
  return (
    <motion.section
      exit={{ opacity: 0 }}
      transition={transition}
      className="main"
    >
      <div className="container">
        <div className="row">
          <h2>
            <div className="line">
              <span>Create unique projects is</span>
            </div>
            <div className="line">
              <span>what we do.</span>
            </div>
          </h2>
          <div className="btn-row">
            <a href="/">
              More about us <RightArrow />
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Banner;
