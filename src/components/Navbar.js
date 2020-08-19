import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-dark bg-danger navbar-expand-lg">
        <span className="navbar-brand mb-0 h1 xtreme-bold">ProyceNews</span>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <section
          className="collapse navbar-collapse no-outline"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/" className="nav-link">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/world" className="nav-link">
                World News
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/business" className="nav-link">
                Business News
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/sports" className="nav-link">
                Sports News
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/technology" className="nav-link">
                Technology News
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/science" className="nav-link">
                Science
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/entertainment" className="nav-link">
                Entertainment
              </Link>
            </li>
          </ul>
        </section>
      </nav>
    </>
  );
};

export default Navbar;
