import React, { useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import georeImage from '../assets/Dralagar.jpeg';
import aboutImage from '../assets/weuh.jpeg';
import Reactjs from "../assets/React.png" 
import Hello from '../assets/Hello.png';
import Gabout from '../assets/Gabout.jpg';
import Rocket from '../assets/Rocktet.svg';
import autoAnimate from '@formkit/auto-animate'
import Node from "../assets/nodejs.png"
import MongoDb from "../assets/Mongodb.png"
import JavaScript from "../assets/Javascript.png"
import HTML from "../assets/HTML.png"
import Nextjs from "../assets/Nextjs.svg"
import CSS from "../assets/CSS.png"
import './Styles/Home.css';

const MyProjectsSection = () => {
  return (
    <div className="container">
      <div className="card" style={{ '--clr': '#009688' }}>
        <div className="img-box">
          <img src="https://i.postimg.cc/t4w95jsf/img-01.png" alt="Leafs" />
        </div>
        <div className="content">
          <h2>Leafs</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Architecto, hic? Magnam eum error saepe doloribus corrupti
            repellat quisquam alias doloremque!
          </p>
          <a href="">Read More</a>
        </div>
      </div>
      <div className="card" style={{ '--clr': '#FF3E7F' }}>
        <div className="img-box">
          <img src="https://i.postimg.cc/pdjRc68d/img-02.png" alt="Fruits" />
        </div>
        <div className="content">
          <h2>Fruits</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Architecto, hic? Magnam eum error saepe doloribus corrupti
            repellat quisquam alias doloremque!
          </p>
          <a href="">Read More</a>
        </div>
      </div>
      <div className="card" style={{ '--clr': '#03A9F4' }}>
        <div className="img-box">
          <img src="https://i.postimg.cc/wvDr345G/img-37.png" alt="Flowers" />
        </div>
        <div className="content">
          <h2>Flowers</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Architecto, hic? Magnam eum error saepe doloribus corrupti
            repellat quisquam alias doloremque!
          </p>
          <a href="">Read More</a>
        </div>
      </div>
    </div>
  );
}

function Home() {
  const parentRef = useRef(null);

  useEffect(() => {
    if (parentRef.current) {
      autoAnimate(parentRef.current);
    }
  }, []);

  return (
    <>
      <Container className="BG">
        <Row>
          <Col xs={12} md={6} className="mb-2 pt-3">
            <h3 id="description">
              <img
                src={Hello}
                alt="React Logo"
                style={{
                  width: "50px",
                  height: "auto",
                  marginRight: "10px",
                }}
              />
              I'm,
            </h3>
            <h1 className="name">Dralagar George</h1>
            <h2 id="work">Web Developer</h2>
            <p id="experience">
              I focus on responsive layouts. As a developer, I deliver
              innovative solutions, fostering business growth through tailored
              engaging and interactive web apps.
            </p>
            <div>
              <a
                href="../Components/CV.jsx"
                className="hovar btn btn-primary"
                download
              >
                Download CV
              </a>
            </div>
          </Col>
          <Col xs={12} md={6} className="pt-5">
            <img src={georeImage} alt="George" className="img-fluid" />
          </Col>
        </Row>
      </Container>

      <Container className="BG">
        <Row>
          <Col xs={12} md={6} className="mb-2 pt-3">
            <div className="text-center">
              <h2>About</h2>
              <div className="about-image">
                <img src={Gabout} alt="About" className="img-fluid" />
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} className="pt-5 About1">
            <div className="pt-3 pl-3 pr-3">
              <p>
                👨‍💻 Welcome to my portfolio! I'm a results-driven Web Developer committed to creating responsive and user-friendly applications that elevate digital experiences. With a strong foundation in coding and programming, I bring innovative solutions to life.<br />
                🌐 Passionate about using technology for social good, I advocate for digital content education to bridge the digital divide. My aim is to empower marginalized communities through practical tech education, ensuring inclusivity in the digital revolution.<br />
                💡 Combining expertise in Political Science with tech enthusiasm, I promote digital livelihoods and advocate for sustainability, resilience, and an inclusive digital future.
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="BG">
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
          </Col>
          <Col xs={12} md={6} className="pt-5">
            <img src={aboutImage} alt="George" className="img-fluid" />
          </Col>
        </Row>
      </Container>

      <MyProjectsSection />

      <Container className="BG">
        <div className="card">
          <div className="card-body">
            <h1 className="card-title">Contact</h1>
            <p className="card-text">
              Feel free to reach out and contact me! I'd love to hear from
              you.
            </p>
            <form
              action="https://formsubmit.co/8c1334f955f21f81b0a2bf6d1a1d526e"
              method="POST"
            >
              <Row className="mb-3">
                <Col md={6}>
                  <label htmlFor="firstname" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstname"
                    name="firstname"
                    placeholder="Enter your first name"
                    required
                  />
                </Col>
                <Col md={6}>
                  <label htmlFor="lastname" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastname"
                    name="lastname"
                    placeholder="Enter your last name"
                    required
                  />
                </Col>
              </Row>

              <Row className="mb-3">
                <Col md={6}>
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="dev@example.com"
                    required
                  />
                </Col>
                <Col md={6}>
                  <label htmlFor="phone" className="form-label">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    name="phone"
                    placeholder="0742972922"
                    required
                  />
                </Col>
              </Row>

              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="5"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Home;

