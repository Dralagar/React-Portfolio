import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import georeImage from "../assets/Dralagar.jpeg";
import aboutImage from "../assets/weuh.jpeg";
import ReactI from "../assets/ReactN.png";
import Hello from "../assets/Hello.png";
import Contact from "./Contact.jsx";
import "./Styles/Home.css";

function Home() {
  return (
    <div className="home-page">
      <Container className="BG">
        <div className="home">
          <Row>
            <Col xs={12} md={6} className="mb-2 pt-3">
              <h3 className="description">
                <img
                  src={Hello}
                  alt="React Logo"
                  style={{
                    width: "50px", // Adjust the width as needed
                    height: "auto", // Maintain aspect ratio
                    marginRight: "10px", // Add any additional styles
                  }}
                />
                I&apos;m,
              </h3>
              <h1 className="name">Dralagar George</h1>
              <h2 className="work">Web Developer</h2>
              <p className="experience">
                I focus on responsive layouts. As a developer, I deliver
                innovative solutions, fostering business growth through tailored
                engaging and interactive web apps.
              </p>
              <div>
                <Link to="/CV" className="hovar btn btn-primary">
                  View CV
                </Link>
              </div>
            </Col>
            <Col xs={12} md={6} className="pt-5">
              <img src={georeImage} alt="George" className="img-fluid" />
            </Col>
          </Row>
        </div>
      </Container>
      <Container>
        <Row>
          <Col xs={12} md={6} className="mb-2 pt-3">
            <div className="about">
              <h2>About</h2>
              <p>
                I am a dedicated web developer with a focus on creating
                responsive and user-friendly web applications. My aim is to
                deliver effective solutions that elevate user experiences.
              </p>
            </div>
            <div className="skill">
              <h3 className="ut">Skills</h3>
              <ul className="skills-list">
                <li>HTML🔸</li>
                <li>CSS5🏁</li>
                <li>JavaScript💻</li>
                <li>
                  React.js
                  <img src={ReactI} alt="React logo" />
                </li>
                <li>Node.js📡</li>
                <li>MongoDB🖥️</li>
                <li>Next.js</li>
                <li>Bootstrap🍸</li>
              </ul>
            </div>
          </Col>
          <Col xs={12} md={6} className="pt-5">
            <img
              src={aboutImage}
              alt="George Dralagar at work"
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>
      <Contact />
    </div>
  );
}

export default Home;
