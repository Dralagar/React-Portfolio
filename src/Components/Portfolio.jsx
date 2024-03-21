import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap"; // Import necessary components from react-bootstrap
import rhinoImage from "./Styles/rhino (1).jpeg";
import yeiImage from "../assets/YEI.jpg";
import "./Styles/Portfolio.css";

function Portfolio() {
  return (
    <Container>
      <Row className="project-container">
        {/* Project 1 */}
        <Col lg={4} md={6} sm={12}>
          <Card className="project-card">
            <Card.Img
              variant="top"
              src={rhinoImage}
              alt="Kumbatia Afrika Festival"
            />
            <Card.Body>
              <Card.Title>Kumbatia Afrika Festival</Card.Title>
              <Card.Text>
                A description of the Kumbatia Afrika Festival project. Include
                information about the goals, technologies used, and your role.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Project 2 */}
        <Col lg={4} md={6} sm={12}>
          <Card className="project-card">
            <Card.Img variant="top" src={yeiImage} alt="Youth Echo Impact" />
            <Card.Body>
              <Card.Title>Youth Echo Impact</Card.Title>
              <Card.Text>
                A description of the Youth Echo Impact project. Include
                information about the goals, technologies used, and your role.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Project 3 */}
        <Col lg={4} md={6} sm={12}>
          <Card className="project-card">
            <Card.Img variant="top" src={rhinoImage} alt="AI Prompt" />
            <Card.Body>
              <Card.Title>AI Prompt</Card.Title>
              <Card.Text>
                A description of the AI Prompt project. Include information
                about the goals, technologies used, and your role.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Portfolio;
