import Link from "./Link";
import "./Components/Styles/NavBar.css";

function NavBar() {
  return (
    <div className="Nav">
      <nav>
        <Link to="/" className="Logos">
          Dralagar.
        </Link>
        <div className="nav-links">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/Portfolio" className="nav-link">
            Portfolio
          </Link>
          <Link to="/CV" className="nav-link">
            Resume
          </Link>
          <Link to="/Contact" className="nav-link">
            Contact
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
