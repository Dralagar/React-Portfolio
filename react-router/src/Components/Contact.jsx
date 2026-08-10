import { Container, Row, Col } from "react-bootstrap";
import "./Styles/Contact.css";

function Contact() {
  return (
    <div className="contact-page">
      <Container>
        <div className="card">
          <div className="card-body">
            <h1 className="card-title">Contact</h1>
            <p className="card-text">
              Feel free to reach out and contact me! I&apos;d love to hear from you.
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
    </div>
  );
}

export default Contact;
