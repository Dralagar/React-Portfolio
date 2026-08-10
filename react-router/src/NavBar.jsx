import { NavLink } from "react-router-dom";
import "./Components/Styles/NavBar.css";

function NavBar() {
  return (
    <div className="Nav">
      <nav>
        <NavLink to="/" className="Logos">
          Dralagar.
        </NavLink>
        <div className="nav-links">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/Portfolio" className="nav-link">
            Portfolio
          </NavLink>
          <NavLink to="/CV" className="nav-link">
            Resume
          </NavLink>
          <NavLink to="/Contact" className="nav-link">
            Contact
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
