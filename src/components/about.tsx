import React, { useEffect } from "react";
import { ReactComponent as Instagram } from "../assets/instagram.svg";
import { ReactComponent as Linkedin } from "../assets/linkedin.svg";
import { ReactComponent as Dribble } from "../assets/dribbble.svg";
import { gsap, Power2 } from "gsap";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import { motion } from "framer-motion";

const transition = { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] };

const About = () => {
  let tl = gsap.timeline();
  let aboutMeImg = CSSRulePlugin.getRule(".about-me-img:after");
  let smallDescImg = CSSRulePlugin.getRule(".small-description-image:after");
  let aboutParagraph = CSSRulePlugin.getRule(".about-paragraph:after");

  useEffect(() => {
    tl.to(".container-about", 0.01, {
      css: { visibility: "visible" },
    })
      .to(aboutMeImg, 1.5, { height: "0%", ease: Power2.easeInOut })
      .to(smallDescImg, 1.5, {
        height: "0%",
        ease: Power2.easeInOut,
        delay: -1.5,
      })
      .to(".about-quote", 0.5, {
        borderLeftWidth: "1px",
        ease: Power2.easeInOut,
      })
      .from(".about-quote p", 0.5, {
        y: 300,
        ease: "power4.out",
        delay: -0.25,
        stagger: {
          amount: 0.6,
        },
      })
      .to(aboutParagraph, 1, { height: "0%", ease: Power2.easeInOut })
      .to(".about-paragraph-reflection", 1, {
        opacity: 1,
        delay: -1,
        ease: Power2.easeInOut,
      })
      .from(".social-icons svg", 1, {
        y: -100,
        ease: "power4.out",
        stagger: {
          amount: 0.6,
        },
      });
  }, []);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={transition}
      className="container-about"
    >
      <div className="social-icons">
        <a href="/instagram">
          <Instagram />
        </a>
        <a href="/linkedin">
          <Linkedin />
        </a>
        <a href="/dribbble">
          <Dribble />
        </a>
      </div>
      <div className="left-page-info">
        <div className="about-me-img">
          <img src={process.env.PUBLIC_URL + `home.jpg`} alt="" />
        </div>
        <div className="about-quote">
          <p>Home is</p>
          <p>not a place...</p>
          <p>it's a feeling.</p>
        </div>
      </div>
      <div className="right-page-info">
        <div className="small-description-image">
          <img src={process.env.PUBLIC_URL + `home-thumbnail.jpg`} alt="" />
        </div>
        <div className="about-description">
          <p className="about-paragraph">
            You will never feel alone again. You will always feel here at home.
            There is no other chance to not being happy... happy again. That is
            the thing the most important for being together. Feel like the other
            person is for you no matter what, no matter where, and no matter in
            which situation.
          </p>
          <p className="about-paragraph-reflection">
            You will never feel alone again. You will always feel here at home.
            There is no other chance to not being happy... happy again. That is
            the thing the most important for being together. Feel like the other
            person is for you no matter what, no matter where, and no matter in
            which situation.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
