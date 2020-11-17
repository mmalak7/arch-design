import { motion } from "framer-motion";
import React, { useState } from "react";

export default function InformationDropdown() {
  const [expanded, setExpanded] = useState(0);

  const accordionIds = [
    {
      id: 0,
      title: "Design",
      results: [
        "Concept and ideation",
        "Prototyping",
        "Sketches",
        "Content creation",
        "Reusable components",
        "Animation",
      ],
    },
    {
      id: 1,
      title: "Development",
      results: [
        "React",
        "Node.js",
        "Gatsby",
        "Plain HTML/CSS/JS",
        "Firebase",
        "Python",
      ],
    },
    {
      id: 2,
      title: "Production",
      results: ["Continuous updates", "Maintaining code", "Instant support"],
    },
  ];

  return (
    <>
      <section style={{ marginTop: "25px ", paddingLeft: "20.2%" }}>
        {accordionIds.map((details, index) => (
          <Accordion
            key={index}
            details={details}
            expanded={expanded}
            setExpanded={setExpanded}
          />
        ))}
      </section>
    </>
  );
}

const Accordion = ({
  details,
  expanded,
  setExpanded,
}: {
  details: any;
  expanded: any;
  setExpanded: any;
}) => {
  const isOpen = details.id === expanded;
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <motion.div
        className="accordion-header"
        initial={false}
        onClick={() => setExpanded(isOpen ? false : details.id)}
        onHoverStart={() => setHovered(!hovered)}
        onHoverEnd={() => setHovered(!hovered)}
      >
        <motion.div className="accordion-icon">
          <motion.span
            animate={{ rotate: isOpen || hovered ? 0 : 45, x: 3 }}
            transition={{ duration: 0.2, ease: [0.6, 0.05, -0.01, 0.9] }}
          />
          <motion.span
            animate={{ rotate: isOpen || hovered ? 0 : -45, x: -3 }}
            transition={{ duration: 0.2, ease: [0.6, 0.05, -0.01, 0.9] }}
          />
        </motion.div>
        {details.title}
      </motion.div>
      <motion.div
        className="accordion-content"
        key="content"
        animate={{ height: isOpen ? "auto" : "0" }}
        transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
      >
        {details.results.map((result: any, index: any) => (
          <span key={index}>{result}</span>
        ))}
      </motion.div>
    </>
  );
};
