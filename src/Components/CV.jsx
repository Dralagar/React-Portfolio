import React from "react";
import { Container } from "react-bootstrap";
import "./Styles/CV.css";
function CV() {
  return (
    <div className="cvbody">
    
      <div className="Container">
        <div className="paper-background">
          <header id="info">
            <div className="left">
              <h1>George Dralagar</h1>
              <h2>Web Developer</h2>
            </div>
            <div className="right">
              <strong>Email:</strong>{" "}
              <a href="mailto:gdralagar@gmail.com">gdralagar@gmail.com</a>
              <br />
              <strong>GitHub:</strong>{" "}
              <a href="https://github.com/Dralagar/George-">
                github.com/Dralagar/George-
              </a>
              <br />
              <strong>LinkedIn:</strong>{" "}
              <a href="https://www.linkedin.com/in/george-dralagar-107931113">
                linkedin.com/in/george-dralagar
              </a>
            </div>
          </header>
          <main>
            <hr />
            <section id="profile">
              <div className="left">
                <h3>Profile</h3>
              </div>
              <div className="right">
                <p>
                  I'm a self-motivated political scientist, youth advocate, and
                  web developer from Nairobi, Kenya. With a degree in political
                  science and sociology, I excel in communication, advocacy,
                  public speaking, research, political analysis, strategy
                  development, and project implementation. I'm skilled in
                  proposal writing and blogging, offering a diverse skill set
                  and a commitment to excellence.
                </p>
              </div>
            </section>
            <hr />
            <section id="skill">
              <div className="left">
                <h3>Skills</h3>
              </div>
              <div className="right">
                <ul>
                  <h3>Web Technologies:</h3>
                  <li>CSS</li>
                  <li>JavaScript (ES6+)</li>
                  <h3>Front-end Frameworks/Libraries:</h3>
                  <li>React.js</li>
                  <li>Bootstrap</li>
                  <li>Tailwind CSS</li>
                  <li>Next.js</li>
                  <h3>Back-end Technologies:</h3>
                  <li>Node.js</li>
                  <li>PHP</li>
                  <h3>Database Management:</h3>
                  <li>MongoDB</li>
                  <li>Firebase</li>
                  <li>MySQL</li>
                </ul>
              </div>
            </section>
            <hr />
            <section id="experience">
              <div className="left">
                <h3>Experience</h3>
              </div>
              <div className="right">
                <div className="work-item">
                  <div className="work-title-left">
                    <h4>Job Title</h4>
                    <div className="right">
                      <ul>
                        <li>
                          Communication and strategic social media officer
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="work-title-right">
                    <h5>Company</h5>
                    <ul>
                      <li>Youth Voices Community</li>
                    </ul>
                  </div>
                  <div className="work-title-right">
                    <h5>Dates</h5>
                    <p>Job Description</p>
                  </div>
                </div>
              </div>
            </section>
            <hr />
            <section id="education">
              {/* Add education content here */}
              <div className="left">
                <h3>Education</h3>
              </div>
              <div className="right">
                <div className="education-item">
                  <div className="education-title-left">
                    <h4>Bachelor of Arts, and Social Science</h4>
                    <p>Political Science, and Sociology</p>
                  </div>
                  <div className="education-title-right">
                    <h5>The Catholic University of Eastern Africa</h5>
                    <p>Graduation Year</p>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

export default CV;
