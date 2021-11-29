import React from "react";
import { Button, Container } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-container">
      <Container>
        <div className="banner-info">
          <div>
            <p className="intro">Hello! I am</p>
            <p className="name">Towkir Ahmed</p>
            <h3 className="designation">Front End Developer</h3>
            <a
              className="resume-link"
              href="https://drive.google.com/file/d/1te4J1r-SK54D_YXVQoe7l9s1NSGpQ52S/view?usp=sharing"
            >
              Get Resume
            </a>
            <a className="about" href="#about">
              About Me
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
