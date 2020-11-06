import { motion } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";

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

const AccordionHeader = styled(motion.div)`
  width: 100%;
  color: var(--color-text);
  display: flex;
  align-items: center;
  font-size: 2.3vw;
  margin: 8px 0;
  font-family: var(--font-family);
  font-weight: 600;
  cursor: pointer;
`;

const AccordionIcon = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  margin-right: 8px;

  span {
    width: 16px;
    height: 4px;
    background: black;
    transition: all 0.1s ease-in-out;
  }
`;

const AccordionContent = styled(motion.div)`
  overflow: hidden;
  padding-left: 40px;
  font-family: var(--font-family-serif);

  span {
    width: 100%;
    margin: 8px 0;
    font-size: 0.875rem;
    color: var(--color-text);
    display: block;
    font-weight: 300;
    opacity: 0.9;
    line-height: 1.5;
    font-size: 1.9vw;
  }
`;

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
      <AccordionHeader
        initial={false}
        onClick={() => setExpanded(isOpen ? false : details.id)}
        onHoverStart={() => setHovered(!hovered)}
        onHoverEnd={() => setHovered(!hovered)}
      >
        <AccordionIcon>
          <motion.span
            animate={{ rotate: isOpen || hovered ? 0 : 45, x: 3 }}
            transition={{ duration: 0.2, ease: [0.6, 0.05, -0.01, 0.9] }}
          />
          <motion.span
            animate={{ rotate: isOpen || hovered ? 0 : -45, x: -3 }}
            transition={{ duration: 0.2, ease: [0.6, 0.05, -0.01, 0.9] }}
          />
        </AccordionIcon>
        {details.title}
      </AccordionHeader>
      <AccordionContent
        key="content"
        animate={{ height: isOpen ? "auto" : "0" }}
        transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
      >
        {details.results.map((result: any, index: any) => (
          <span key={index}>{result}</span>
        ))}
      </AccordionContent>
    </>
  );
};
