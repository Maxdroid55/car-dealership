import '../styles/NavBar.css'
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <div className="left">
        <Link to="/">Home</Link>
      </div>
      <div className="right">
        <Link to="/about">About</Link>
        <Link to="/cars">Cars</Link>

      </div>
    </nav>
  );
}

export default NavBar;