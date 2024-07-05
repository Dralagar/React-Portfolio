import React, { useEffect, useRef, useState } from 'react';
import { Container as BootstrapContainer, Row, Col } from 'react-bootstrap';
import georeImage from '../assets/Dralagar.jpeg';
import aboutImage from '../assets/weuh.jpeg';
import Hello from '../assets/Hello.png';
import Gabout from '../assets/Gabout.jpg';
import autoAnimate from '@formkit/auto-animate';
import './Styles/Home.css';

const SkillsSection = () => {
  const skills = [
    'React.js',
    'Node.js',
    'Express.js',
    'MongoDB',
    'HTML',
    'CSS',
    'JavaScript',
    'Python',
    'PHP',
    'Postman',
    'Redux',
    'GraphQL',
    'RESTful APIs',
    'Git',
  ];

  return (
    <BootstrapContainer className="BG container-skill">
      <div className="skill-section">
        <h2>Skills</h2>
        <ul className="skills-list">
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </BootstrapContainer>
  );
};

const BlogSection = () => {
  const [blogContent, setBlogContent] = useState('');

  const handleNewBlog = () => {
    const newBlogContent = 'New blog content goes here';
    setBlogContent(newBlogContent);
  };

  return (
    <BootstrapContainer className="BG container-blog">
      <section className="blog-section">
        <h2>Latest Blog</h2>
        <div className="blog-content">
          <p>{blogContent}</p>
        </div>
        <button onClick={handleNewBlog} className="btn btn-primary">
          New Blog
        </button>
      </section>
    </BootstrapContainer>
  );
};

const MyProjectsSection = () => {
  return (
    <BootstrapContainer className="BG container-projects">
      <h1>Projects</h1>
      <div className="container">
        {/* Your project cards */}
      </div>
    </BootstrapContainer>
  );
};

const TechStackSection = () => {
  return (
    <BootstrapContainer className="BG container-tech-stack">
      <h2>Tech Stack</h2>
      <Row>
        <Col xs={12} md={6}>
          <div className="tech-stack-item">
            <h3>Client-Side</h3>
            <p>
              Built with <strong>React.js</strong>, our client-side applications are designed for performance and scalability. React’s component-based architecture allows for reusable UI components, making development faster and more efficient.
            </p>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <div className="tech-stack-item">
            <h3>Server-Side</h3>
            <p>
              Our server-side logic is powered by <strong>Node.js</strong> and <strong>Express.js</strong>, ensuring a robust and scalable backend. We use <strong>MongoDB</strong> as our database to store and manage data, providing flexibility and performance for our applications.
            </p>
          </div>
        </Col>
      </Row>
    </BootstrapContainer>
  );
};

function Home() {
  const parentRef = useRef(null);

  useEffect(() => {
    if (parentRef.current) {
      autoAnimate(parentRef.current);
    }
  }, []);

  return (
    <>
      <BootstrapContainer className="BG container-hello">
        <Row>
          <Col xs={12} md={6} className="mb-2 pt-3">
            <h3 id="description">
              <img
                src={Hello}
                alt="React Logo"
                style={{
                  width: '50px',
                  height: 'auto',
                  marginRight: '10px',
                }}
              />
              I'm,
            </h3>
            <h1 className="name">Dralagar George</h1>
            <h2 id="work">Web Developer</h2>
            <p id="experience">
              I focus on responsive layouts. As a developer, I deliver innovative solutions, fostering business growth through tailored engaging and interactive web apps.
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
      </BootstrapContainer>

      <SkillsSection />

      <BootstrapContainer className="BG container-about">
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
                👨‍💻 Welcome to my portfolio! I'm a results-driven Web Developer committed to creating responsive and user-friendly applications that elevate digital experiences. With a strong foundation in coding and programming, I bring innovative solutions to life.
                <br />
                🌐 Passionate about using technology for social good, I advocate for digital content education to bridge the digital divide. My aim is to empower marginalized communities through practical tech education, ensuring inclusivity in the digital revolution.
                <br />
                💡 Combining expertise in Political Science with tech enthusiasm, I promote digital livelihoods and advocate for sustainability, resilience, and an inclusive digital future.
              </p>
            </div>
          </Col>
        </Row>
      </BootstrapContainer>

      <BlogSection />

      <MyProjectsSection />

      <TechStackSection />
    </>
  );
}

export default Home;
