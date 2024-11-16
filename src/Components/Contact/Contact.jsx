import React from "react";
import theme_pattern from "../../assets/theme_pattern.svg";
import "./Contact.css";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import { FaLinkedin } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "afd5a7e0-c040-44f4-980e-6b5e2a9174ac");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
      event.target.reset();
    }
  };
  return (
    <div id="contact" className="contact">
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
              <FaWhatsapp className="icon" />
              {/* <img src={call_icon} alt="" /> */}
              <a href="https://wa.me/9158925838">+91 9158925838</a>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Nagpur, Maharashtra</p>
            </div>

            <div className="contact-detail">
              <FaLinkedin className="icon" />
              <a
                href="https://www.linkedin.com/in/piyush-dhongle-138584199/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>

            <div className="contact-detail">
              <SiGithub className="icon" />
              <a
                href="https://github.com/piyushd3112/"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="email" name="email" placeholder="Enter your email" />
          <label htmlFor="">Write your message</label>
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
