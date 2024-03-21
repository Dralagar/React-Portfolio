// Import Statements
import React from "react";
import { Container } from 'react-bootstrap';
import Logo from "../assets/YEI.jpg";
import "./Styles/Footer.css";

// Footer Component
function Footer() {
  return (
    <div className="Contain">
      <footer className="footerCon">
        <div className="img">
          <img
            src={Logo}
            alt="Youth Echo Impact Logo - Uplifting New Voices"
            width={100}
            height={60}
          />
        </div>
        <span>&copy; 2023 Dralagar George. Made with ReactJS.</span>
      </footer>
    </div>
  );
}

// Export Statement
export default Footer;
