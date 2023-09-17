import React from "react";
import Corners from "../../Components/js/Corners.js";
import "../Css/About.css";
import AboutImg from "../../images/about.png";
import ProgressBar from "react-animated-progress-bar";

export default function About() {
  return (
    <>
      <section className="section about">
        <section className="about-corners">
          <Corners />
          <section className="about-top">
            <section className="about-top-left">
              <img src={AboutImg} alt="mainImage" className="aboutImg" />
            </section>
            <section className="about-top-right">
              <h2>About Me</h2>
              <span>Dipesh Jha</span>
              <p>I'M Specialist to develop Full Stack web app.</p>
              <p>
              "I have acquired knowledge from Coding Ninjas and obtained a certification in Full Stack " <br /> Web Development 
        
              </p>
              <a download={true} href="../../../src/Data../../Data/Certificate.pdf">CERTIFICATE</a>
            </section>
          </section>
          <section className="about-bottom">
            <section className="skills-heading">
              <h2>
                <span>SKILLS</span>
              </h2>
            </section>
            <section className="skills">
              <div className="skill">
                <ProgressBar
                  width="220"
                  trackWidth="15"
                  fontColor="#cd6133"
                  percentage="90"
                />
                <span>HTML5</span>
              </div>
              <div className="skill">
                <ProgressBar
                  width="220"
                  trackWidth="15"
                  fontColor="#cd6133"
                  percentage="80"
                />
                <span>CSS3</span>
              </div>
              <div className="skill">
                <ProgressBar
                  width="220"
                  trackWidth="15"
                  fontColor="#cd6133"
                  percentage="85"
                />
                <span>JAVASCRIPT</span>
              </div>
              <div className="skill">
                <ProgressBar
                  width="220"
                  trackWidth="15"
                  fontColor="#cd6133"
                  percentage="80"
                />
                <span>React.JS</span>
              </div>
              <div className="skill">
                <ProgressBar
                  width="220"
                  trackWidth="15"
                  fontColor="#cd6133"
                  percentage="70"
                />
                <span>NODE.JS</span>
              </div>
              <div className="skill">
                <ProgressBar
                  width="220"
                  trackWidth="15"
                  fontColor="#cd6133"
                  percentage="70"
                />
                <span>RDBMS</span>
              </div>
            </section>
          </section>
        </section>
      </section>
    </>
  );
}
