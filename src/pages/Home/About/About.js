import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./About.css";
import profile from "../../../images/profile.jpeg";

const About = () => {
  return (
    <div className="about-container">
      <Container>
        <h2 className="about-title">About Me</h2>
        <Row>
          <Col md={5}>
            <p>
              Hello! I'm Towkir Ahmed, a passionate Front End Developer. I
              develop web applications. My core skill is based on JavaScript and
              I love to do most of the things using JavaScript. I love to make
              the web more open to the world. I am available for any kind of job
              opportunity that suits my interests.
            </p>
            <div className="btn">
              <a
                className="resume-btn"
                href="https://drive.google.com/file/d/1te4J1r-SK54D_YXVQoe7l9s1NSGpQ52S/view?usp=sharing"
              >
                Get Resume
              </a>
              <a className="skill-btn" href="#skills">
                My Skills
              </a>
            </div>
          </Col>
          <Col md={1}></Col>
          <Col md={5}>
            <img style={{ width: "100%" }} src={profile} alt="" />
          </Col>
          <Col md={1}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
