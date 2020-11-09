import React from "react";
import { ReactComponent as Instagram } from "../assets/instagram.svg";
import { ReactComponent as Linkedin } from "../assets/linkedin.svg";
import { ReactComponent as Dribble } from "../assets/dribbble.svg";

const About = () => {
  return (
    <div className="container-about">
      <div className="social-icons">
        <Instagram />
        <Linkedin />
        <Dribble />
      </div>
      <div className="left-page-info">
        <div className="about-me-img">
          <img src={process.env.PUBLIC_URL + `pomeranian.jpg`} alt="" />
        </div>
        <div className="about-quote">
          <p>Home is</p>
          <p>not a place...</p>
          <p>it's a feeling.</p>
        </div>
      </div>
      <div className="right-page-info">
        <div className="small-description-image">
          <img src={process.env.PUBLIC_URL + `pomeranian2.jpg`} alt="" />
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
    </div>
  );
};

export default About;
