import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as CasesNext } from "../assets/cases-arrow-right.svg";
import { ReactComponent as CasesPrev } from "../assets/cases-arrow-left.svg";
import { motion } from "framer-motion";

const caseStudies = [
  {
    id: 1,
    subtitle: "Beach building",
    title: "Little time for relax",
    img: "arch1",
  },
  {
    id: 2,
    subtitle: "SD House",
    title: "For your best home mood",
    img: "arch2",
  },
  {
    id: 3,
    subtitle: "Office",
    title: "Open space feels better",
    img: "arch3",
  },
];

const transition = { duration: 2.6, ease: [0.43, 0.13, 0.23, 0.96] };

const Cases = () => {
  return (
    <section className="cases">
      <motion.div
        exit={{ opacity: 0 }}
        transition={transition}
        className="container-fluid"
      >
        <div className="cases-navigation">
          <div className="cases-arrow prev disabled">
            <CasesPrev />
          </div>
          <div className="cases-arrow next">
            <CasesNext />
          </div>
        </div>
        <div className="row">
          {caseStudies.map((caseItem) => (
            <Link
              to={`/model/${caseItem.id}`}
              key={caseItem.id}
              style={{ textDecoration: "none" }}
            >
              <div className="case" key={caseItem.id}>
                <div className="case-details">
                  <span>{caseItem.subtitle}</span>
                  <h2>{caseItem.title}</h2>
                </div>
                <div className="case-image">
                  <img
                    src={process.env.PUBLIC_URL + `/${caseItem.img}.jpg`}
                    alt={caseItem.title}
                    key={caseItem.title}
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Cases;
