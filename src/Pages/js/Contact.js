import React from "react";
import "../Css/Contact.css";
import Corners from "../../Components/js/Corners.js";
import ContactForm from "../../Components/js/ContactForm.js";
export default function Contact() {
  return (
    <>
      <section className="section contact">
        <section className="contact-corners">
          <Corners />
          <section className="contact-left">
            <div>
              <h1>
                Let's Chat <br /> Drop a Line of query You Have.{" "}
              </h1>
              <p>Raise your query i respond you soon.</p>
              <div className="emails">
                <div className="icon">
                  <i className="fa-solid fa-envelope-open-text"></i>
                </div>
                <div className="text">
                  <p>Mail me at</p>
                  <span>djha2007@gmail.com</span>
                </div>
              </div>
              <div className="social-icons">
                <a href="https://github.com/Djjha14"  target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-square-github icon"></i>
                </a>
                <a href="https://www.linkedin.com/in/dipesh-jha-21a67818b"  target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-linkedin icon"></i>
                </a>
                <a href="https://instagram.com/dipesh.jha14?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-square-instagram icon"></i>
                </a>
                <a href="https://www.facebook.com/dipesh.jha.9634?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-square-facebook icon"></i>
                </a>
              </div>
            </div>
          </section>
          <ContactForm width="35rem" height="100%" />
        </section>
      </section>
    </>
  );
}
