import React from "react";
import "./Hero.css";
import piyushsd from "../../assets/piyushsd.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img className="img" src={piyushsd} alt="" />

      <h1>
        <span>I'm Piyush Dhongle</span> - Frontend Developer.
      </h1>
      <p>
        {" "}
        Software Developer with 1.5 years of experience crafting robust software
        solutions. Proficient in React.js, JavaScript, HTML, CSS, Tailwind CSS
        and Bootstrap.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
