import * as React from "react";
import { Link } from "react-router-dom";
import './NavBar.css'; 

const NavBar = () => {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg" style={{ backgroundColor: '#7091e6' }}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" style={{ color: 'white', fontWeight: 'bold' }}>News Express</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0" style={{ color: 'white' }}>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/" style={{ color: 'white' }}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment" style={{ color: 'white' }}>Entertainment</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports" style={{ color: 'white' }}>Sports</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/health" style={{ color: 'white' }}>Health</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/general" style={{ color: 'white' }}>General</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/science" style={{ color: 'white' }}>Science</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology" style={{ color: 'white' }}>Technology</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
