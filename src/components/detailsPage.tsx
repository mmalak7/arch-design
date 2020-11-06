import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { ReactComponent as ArrowDown } from "../assets/arrow-down.svg";
import { gsap, Power2 } from "gsap";
import InformationDropdown from "./informationDropdown";
import CSSRulePlugin from "gsap/CSSRulePlugin";

const DetailsPage = ({ match }: { match: any }) => {
  const [displayedInformation, setDisplayedInformation] = useState({
    id: 0,
    subtitle: "",
    title: "",
    overview: "",
    description: "",
    quote: "",
    img: "",
  });

  let tl = gsap.timeline();
  let imageReveal = CSSRulePlugin.getRule(".details-image:after");

  useEffect(() => {
    if (match.params.id === "1") {
      setDisplayedInformation({
        id: 1,
        title: "Beach building",
        subtitle: "Little time for relax",
        overview:
          "Suspendisse potenti. Donec convallis arcu egestas neque tempus,sed elementum nibh malesuada. Sed convallis at sem non gravida.Phasellus sed aliquet mauris. Quisque rhoncus vestibulumpellentesque. Sed quam quam, tempus quis egestas eget, interdum acodio. Cras cursus fringilla aliquet. Sed et fermentum purus, nonauctor sapien.",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbimalesuada ipsum a quam tincidunt rutrum vitae id diam. Aeneanlacinia congue ipsum, a eleifend sem finibus quis. Aliquam etlibero dictum, ornare odio a, scelerisque libero. Nunc posuereipsum magna, in interdum sem pharetra at. Maecenas ultricesultrices arcu quis ullamcorper",
        quote: "~Home is not a place.. it's a feeling",
        img: "arch1",
      });
    } else if (match.params.id === "2") {
      setDisplayedInformation({
        id: 2,
        title: "SD House",
        subtitle: "For your best home mood",
        overview:
          "Suspendisse potenti. Donec convallis arcu egestas neque tempus,sed elementum nibh malesuada. Sed convallis at sem non gravida.Phasellus sed aliquet mauris. Quisque rhoncus vestibulumpellentesque. Sed quam quam, tempus quis egestas eget, interdum acodio. Cras cursus fringilla aliquet. Sed et fermentum purus, nonauctor sapien.",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbimalesuada ipsum a quam tincidunt rutrum vitae id diam. Aeneanlacinia congue ipsum, a eleifend sem finibus quis. Aliquam etlibero dictum, ornare odio a, scelerisque libero. Nunc posuereipsum magna, in interdum sem pharetra at. Maecenas ultricesultrices arcu quis ullamcorper",
        quote: "~Home is not a place.. it's a feeling",
        img: "arch2",
      });
    } else if (match.params.id === "3") {
      setDisplayedInformation({
        id: 3,
        title: "Office",
        subtitle: "Open space feels better",
        overview:
          "Suspendisse potenti. Donec convallis arcu egestas neque tempus,sed elementum nibh malesuada. Sed convallis at sem non gravida.Phasellus sed aliquet mauris. Quisque rhoncus vestibulumpellentesque. Sed quam quam, tempus quis egestas eget, interdum acodio. Cras cursus fringilla aliquet. Sed et fermentum purus, nonauctor sapien.",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbimalesuada ipsum a quam tincidunt rutrum vitae id diam. Aeneanlacinia congue ipsum, a eleifend sem finibus quis. Aliquam etlibero dictum, ornare odio a, scelerisque libero. Nunc posuereipsum magna, in interdum sem pharetra at. Maecenas ultricesultrices arcu quis ullamcorper",
        quote: "~Home is not a place.. it's a feeling",
        img: "arch3",
      });
    }

    tl.to(".details-section", 0.2, {
      css: { visibility: "visible" },
    })
      .to(imageReveal, 1.6, { height: "0vh", ease: Power2.easeInOut })
      .from(".details-page img", 1.4, {
        scale: 1.4,
        ease: Power2.easeInOut,
        delay: -1,
      })
      .to(".information-section", 0.2, {
        css: { visibility: "visible" },
      });
  }, []);

  const {
    id,
    subtitle,
    title,
    overview,
    description,
    quote,
    img,
  } = displayedInformation;

  const test = {
    animate: {
      y: 0,
      transition: {
        delayChildren: 1.6,
      },
    },
  };
  const test1 = {
    animate: {
      y: 0,
      transition: {
        delayChildren: 1.8,
      },
    },
  };
  const test2 = {
    animate: {
      y: 0,
      transition: {
        delayChildren: 2,
      },
    },
  };

  const textAnimation = {
    initial: {
      y: 80,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div initial="initial" animate="animate" exit="exit">
      <div className="details-section">
        <div className="container">
          <div className="details-page">
            <div className="details-image">
              <img src={process.env.PUBLIC_URL + `/${img}.jpg`} alt={title} />{" "}
            </div>
            <motion.div variants={test} className="details-title">
              <motion.div variants={textAnimation} className="project-title">
                {title}
              </motion.div>
            </motion.div>
            <motion.div variants={test1} className="details-quote">
              <motion.div variants={textAnimation} className="project-quote">
                {quote}
              </motion.div>
            </motion.div>
            <motion.div variants={test2} className="discover">
              <motion.div variants={textAnimation} className="discover-icon">
                <p>Discover</p>
                <ArrowDown />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="information-section">
        <div className="information-section">
          <div className="services-dropdown">
            <InformationDropdown />
          </div>
          <div className="about-project">
            <p className="about-intro-short">{overview}</p>
            <p className="about-intro-detailed">{description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DetailsPage;
