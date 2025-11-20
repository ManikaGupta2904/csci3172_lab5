import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg px-3" style={{ backgroundColor: '#010203ff', borderBottom: '2px solid #e5e7eb' }}>
      <Link className="navbar-brand" to="/" style={{ color: '#ffffffff', fontWeight: 'bold' }}>My Portfolio</Link>

      
    </nav>
  );
}
