import React from "react";

const Contact = () => {
  return (
    // <div className="container-contact">
    //   <div className="left-panel">
    //     <div className="header-panel">
    //       <div className="upper-part">
    //         <p className="collaborate">Let's talk!</p>
    //         <p className="email-part">miostudio@gmail.com</p>
    //       </div>
    //     </div>
    //     <div className="contact-panel">
    //       <p>Katowice, Poland</p>
    //       <p>(+48) 123 456 789</p>
    //     </div>
    //   </div>
    //   <div className="right-panel">
    //     <div className="dog-pic">
    //       <img src={process.env.PUBLIC_URL + `suzi.jpg`} alt="" />
    //     </div>
    //   </div>
    // </div>
    <div className="container-fluid">
      <div className="row">
        <div className="left-part">
          <div className="logo">
            <a href="/">MioStudio.</a>
          </div>
          <div className="contact-image">
            <img src={process.env.PUBLIC_URL + `dogy1.png`} alt="" />
          </div>
        </div>
        <div className="right-part">
          <div className="info-block">
            <div className="quote">
              <span>Let's build</span>
              <span>your business.</span>
            </div>
            <div className="email">
              <span className="first-row">For Business</span>
              <span className="second-row">miostudio@gmail.com</span>
            </div>
            <div className="contact-number">
              <span className="first-row">Call me</span>
              <span className="second-row">+48 123 456 789</span>
            </div>
            <div className="social-link">
              <span className="social-title">Social</span>
              <div className="social-names">
                <span>
                  <a href="/instagram">Instagram</a>
                </span>
                <span>
                  <a href="/linkedin">Linkedin</a>
                </span>
                <span>
                  <a href="/linkedin">Dribbble</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
