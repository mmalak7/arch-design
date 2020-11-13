import React, { useState } from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const [hoverState, setHoverState] = useState(false);
  const [hoverState2, setHoverState2] = useState(false);
  const transition = { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] };

  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={transition}
      className="container-projects"
    >
      <div className="arch-part">
        <motion.a
          onHoverStart={() => {
            setHoverState(true);
          }}
          onHoverEnd={() => {
            setHoverState(false);
          }}
          href="/archi-design"
        >
          Architecture
        </motion.a>
        <motion.img
          initial={{ opacity: 0 }}
          animate={{
            opacity: hoverState ? 1 : 0,
          }}
          src={process.env.PUBLIC_URL + `CasaTaller.gif`}
          alt=""
        />
      </div>
      <div className="divider">/</div>
      <div className="graph-part">
        <motion.a
          onHoverStart={() => {
            setHoverState2(true);
          }}
          onHoverEnd={() => {
            setHoverState2(false);
          }}
          href="/graphic-design"
        >
          Graphic design
        </motion.a>
        <motion.img
          initial={{ opacity: 0 }}
          animate={{
            opacity: hoverState2 ? 1 : 0,
          }}
          src={process.env.PUBLIC_URL + `doggo.gif`}
          alt=""
        />
      </div>
    </motion.div>
  );
};

export default Projects;
