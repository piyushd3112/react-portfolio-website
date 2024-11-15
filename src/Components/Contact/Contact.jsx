import React from "react";
import theme_pattern from "../../assets/theme_pattern.svg";
import "./Contact.css";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>Feel free to connect with me for projects.</p>

          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <a href="mailto:dhonglep@gmail.com">dhonglep@gmail.com</a>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <a href="telto:+919158925838">+91 9158925838</a>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Nagpur, Maharashtra</p>
            </div>
          </div>
        </div>
        <form className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="email" name="email" placeholder="Enter your email" />
          <label htmlFor="Write your message"></label>
          <textarea
            name="message"
            id=""
            placeholder="Enter your message"
            rows="8"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
