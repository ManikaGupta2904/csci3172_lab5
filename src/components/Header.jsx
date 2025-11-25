import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark border-bottom" style={{ backgroundColor: '#000000' }}>
        <div className="container">
          <Link className="navbar-brand fw-bold text-white" to="/">
            My Portfolio
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setIsNavCollapsed(!isNavCollapsed)}
            aria-controls="navbarNav"
            aria-expanded={!isNavCollapsed}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${!isNavCollapsed ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/" onClick={() => setIsNavCollapsed(true)}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/about" onClick={() => setIsNavCollapsed(true)}>About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/projects" onClick={() => setIsNavCollapsed(true)}>Projects</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/skills" onClick={() => setIsNavCollapsed(true)}>Skills</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

