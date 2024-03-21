import React, { useState, useEffect } from "react";

import "./Styles/Contact.css";

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Simulating a form submission delay (replace with your actual API request)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // After successful submission
      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  useEffect(() => {
    // Additional logic can be added after form submission if needed
    // This useEffect runs whenever the 'submitted' state changes
  }, [submitted]);

  return (
    <>
      <div className="BG">
        <div className="card"><h1 className="card-title">Contact</h1>
          <div className="card-body">
            <p className="card-text">
              Feel free to reach out and contact me! I'd love to hear from you.
            </p>
            <form
              action="https://formsubmit.co/8c1334f955f21f81b0a2bf6d1a1d526e"
              method="POST"
              onSubmit={handleSubmit}
            >
              <div className="row mb-3">
                <div className="col-md-6">
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
                </div>
                <div className="col-md-6">
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
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-6">
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
                </div>
                <div className="col-md-6">
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
                </div>
              </div>

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
      </div>
    </>
  );
}

export default Contact;
