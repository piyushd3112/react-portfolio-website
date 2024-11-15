import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import piyushd from "../../assets/piyushd.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={piyushd} alt="" />
        </div>
        <div className="about-right">
          <div className="about-paragraph">
            <p>
              I am a passionate Software Developer with 1.5 years of experience
              specializing in React.js, JavaScript, and front-end technologies.
              I focus on crafting user-friendly, responsive web applications
              while collaborating with cross-functional teams to deliver
              seamless software solutions.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p> <hr style={{ width: "90%" }} />
            </div>
            <div className="about-skill">
              <p>JavasScript</p> <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>React.js</p> <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Redux</p> <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Tailwind CSS</p> <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Bootstrap</p> <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Visual Studio Code</p> <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Node.js</p> <hr style={{ width: "35%" }} />
            </div>
            <div className="about-skill">
              <p>MongoDB</p> <hr style={{ width: "30%" }} />
            </div>
            <div className="about-skill">
              <p>Firebase</p> <hr style={{ width: "30%" }} />
            </div>
            <div className="about-skill">
              <p>SQL</p> <hr style={{ width: "30%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>1.5</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr/>
        <div className="about-achievement">
          <h1>5</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
      </div>
    </div>
  );
};

export default About;
