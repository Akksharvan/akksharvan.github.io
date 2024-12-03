import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-primary p-4 text-white">
      <ul className="flex space-x-6">
        <li>
          <Link to="/" className="hover:text-secondary">Home</Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-secondary">About Me</Link>
        </li>
        <li>
          <Link to="/projects" className="hover:text-secondary">Projects</Link>
        </li>
        <li>
          <Link to="/resume" className="hover:text-secondary">Resume</Link>
        </li>
        <li>
          <Link to="/awards" className="hover:text-secondary">Awards</Link>
        </li>
        <li>
          <Link to="/certifications" className="hover:text-secondary">Certifications</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;