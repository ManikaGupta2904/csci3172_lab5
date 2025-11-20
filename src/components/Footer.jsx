import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg px-3" style={{ backgroundColor: '#f9fafb', borderBottom: '2px solid #1a1a1a' }}>
      <Link className="navbar-brand" to="/" style={{ color: '#1a1a1a', fontWeight: 'bold' }}>My Portfolio</Link>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu" style={{ borderColor: '#2563eb' }}>
        <span className="navbar-toggler-icon" style={{ filter: 'invert(1)' }}></span>
      </button>

      <div className="collapse navbar-collapse" id="navMenu">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/" style={{ color: '#2563eb', fontWeight: '500' }}>Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about" style={{ color: '#2563eb', fontWeight: '500' }}>About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/projects" style={{ color: '#2563eb', fontWeight: '500' }}>Projects</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}