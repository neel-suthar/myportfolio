import React from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
// import { NavHashLink as Link } from 'react-router-hash-link';
import { BrowserRouter as Router } from 'react-router-dom';

function Header() {
  return (
    <Router>
      <header className="l-header">
        <nav className="nav bd-grid">
          <div>
            <Link smooth={true} spy={true} to="home" activeClass="none" className="nav__logo">NS</Link>
          </div>

          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
              <Link smooth={true} spy={true} offset={-110} to="home" activeClass="active" className="nav__item nav__link">Home</Link>
              <Link smooth={true} spy={true} offset={-110} to="about" activeClass="active" className="nav__item nav__link">About</Link>
              <Link smooth={true} spy={true} offset={-40} to="work" activeClass="active" className="nav__item nav__link">Work</Link>
              <Link smooth={true} spy={true} offset={-30} to="skills" activeClass="active" className="nav__item nav__link">Skills</Link>
              <Link smooth={true} spy={true} offset={-110} to="projects" activeClass="active" className="nav__item nav__link">Projects</Link>
              <Link smooth={true} spy={true} offset={-110} to="contact" activeClass="active" className="nav__item nav__link">Contact Me</Link>
            </ul>
          </div>

          <div class="nav__toggle" id="nav-toggle">
            <FontAwesomeIcon icon={faBars} />
          </div>
        </nav>
      </header>
    </Router>
  )
}

export default Header
