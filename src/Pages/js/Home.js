import React from "react";
import "../Css/Home.css";
import Corners from "../../Components/js/Corners.js";
import heroImg from "../../images/main.png";

export default function Home() {
  return (
    <>
      <section className="home section">
        <main className="home-corners">
          <Corners />
          <div className="home-left">
            <h1>DIPESH JHA</h1>
            <p>
              A <span>FULL STACK</span> DEVELOPER.
            </p>
            <p>Less Code | Awesome Design | Better SEO </p>
            <div className="main-btn">
              <a download={true} href="../../../src/Data/Resume.pdf">Resume</a>
              <a href="/contact">Hire Me</a>
            </div>
          </div>
          <div className="home-right">
            <img src={heroImg} alt="HeroImage" />
          </div>
        </main>
      </section>
    </>
  );
}