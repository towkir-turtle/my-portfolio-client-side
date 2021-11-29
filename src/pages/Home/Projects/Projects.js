import React from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import "./Projects.css";
import project1 from "../../../images/projects/project-01.PNG";
import project2 from "../../../images/projects/project-02.PNG";
import project3 from "../../../images/projects/project-03.PNG";
import project4 from "../../../images/projects/project-04.PNG";
import project5 from "../../../images/projects/project-05.PNG";

const Projects = () => {
  return (
    <div className="project-container">
      <Container>
        <h2 className="project-title">My Projects</h2>
        <Row>
          <Col md={4}>
            <Card style={{ height: " 530px" }}>
              <Card.Img
                style={{ height: "200px" }}
                variant="top"
                src={project1}
              />
              <Card.Body>
                <Card.Title>Rotors - Car Website</Card.Title>
                <Card.Text>
                  An e-commerce project, user can purchase any car based on
                  their preference. It has a customize admin panel where admin
                  can add product, delete a product, shipped the order and make
                  an admin.
                </Card.Text>
                <Card.Text>
                  <span className="technology">React Js</span>
                  <span className="technology">Node</span>
                  <span className="technology">Express Js</span>
                </Card.Text>
                <Card.Text>
                  <span className="technology">Material UI</span>
                  <span className="technology">MongoDB</span>
                  <span className="technology">Firebase</span>
                </Card.Text>
                <a className="project-btn" href="">
                  Preview
                </a>
                <a className="project-btn" href="">
                  Server Side
                </a>
                <a className="project-btn" href="">
                  Client Side
                </a>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card style={{ height: " 530px" }}>
              <Card.Img
                style={{ height: "200px" }}
                variant="top"
                src={project2}
              />
              <Card.Body>
                <Card.Title>shareTrip - Tourism Website</Card.Title>
                <Card.Text>
                  It’s a MERN-stack project. A travel booking site where a user
                  can book his tour plan. To book a plan user must login. An
                  admin manage all bookings, add new service and confirm the
                  order.
                </Card.Text>
                <Card.Text>
                  <span className="technology">Material UI</span>
                  <span className="technology">React Js</span>
                  <span className="technology">Node</span>
                </Card.Text>
                <Card.Text>
                  <span className="technology">Express Js</span>
                  <span className="technology">MongoDB</span>
                  <span className="technology">Firebase</span>
                </Card.Text>
                <a className="project-btn" href="">
                  Preview
                </a>
                <a className="project-btn" href="">
                  Server Side
                </a>
                <a className="project-btn" href="">
                  Client Side
                </a>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card style={{ height: "530px" }}>
              <Card.Img
                style={{ height: "200px" }}
                variant="top"
                src={project3}
              />
              <Card.Body>
                <Card.Title>Holy Family - Hospital Website</Card.Title>
                <Card.Text>
                  Fully Responsive for mobile, tablet and desktop version.
                  Implement two authentication systems link Email-Password and
                  Google Sign In. Implement Context API, React Hooks, Firebase.
                </Card.Text>
                <Card.Text>
                  <span className="technology">React Js</span>
                  <span className="technology">Node</span>
                  <span className="technology">Express Js</span>
                </Card.Text>
                <Card.Text>
                  <span className="technology">Material UI</span>
                  <span className="technology">MongoDB</span>
                  <span className="technology">Firebase</span>
                </Card.Text>
                <a className="project-btn" href="">
                  Preview
                </a>
                <a className="project-btn" href="">
                  Server Side
                </a>
                <a className="project-btn" href="">
                  Client Side
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row style={{ marginTop: "30px" }}>
          <Col md={4}>
            <Card style={{ height: "530px" }}>
              <Card.Img
                style={{ height: "200px" }}
                variant="top"
                src={project4}
              />
              <Card.Body>
                <Card.Title>Edureka - Education Website</Card.Title>
                <Card.Text>
                  This is modern single page application with React Js and React
                  router. It's a website about online education platform, user
                  can explore different routes such as courses, about etc.
                </Card.Text>
                <Card.Text>
                  <span className="technology">React Js</span>
                  <span className="technology">React Router</span>
                  <span className="technology">Bootstrap</span>
                </Card.Text>
                <a className="project-btn" href="">
                  Preview
                </a>
                <a className="project-btn" href="">
                  Server Side
                </a>
                <a className="project-btn" href="">
                  Client Side
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{ height: "530px" }}>
              <Card.Img
                style={{ height: "200px" }}
                variant="top"
                src={project5}
              />
              <Card.Body>
                <Card.Title>SilverScreen - Film Website</Card.Title>
                <Card.Text>
                  This is modern single page application with React Js and React
                  router. It's a website about casting directors and artists for
                  film making.
                </Card.Text>
                <Card.Text>
                  <span className="technology">React Js</span>
                  <span className="technology">React Router</span>
                  <span className="technology">Bootstrap</span>
                </Card.Text>
                <a className="project-btn" href="">
                  Preview
                </a>
                <a className="project-btn" href="">
                  Server Side
                </a>
                <a className="project-btn" href="">
                  Client Side
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
