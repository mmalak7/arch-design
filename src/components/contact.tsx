import React from "react";

const Contact = () => {
  return (
    <div className="container-contact">
      <div className="left-panel">
        <div className="header-panel">
          <div className="upper-part">
            <p className="collaborate">Let's collaborate!</p>
            <p className="email-part">miostudio@gmail.com</p>
          </div>
        </div>
        <div className="contact-panel">
          <p>Katowice, Poland</p>
          <p>(+48) 123 456 789</p>
        </div>
      </div>
      <div className="right-panel">
        <div className="dog-pic">
          <img src={process.env.PUBLIC_URL + `suzi.jpg`} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
