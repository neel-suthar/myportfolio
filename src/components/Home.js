import React, { Component } from 'react'
import Typed from 'typed.js';
import bannerImage from '../img/banner-image.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointUp } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn, faTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-scroll';
import { BrowserRouter as Router } from 'react-router-dom';

export default class Home extends Component {
  componentDidMount() {
    const options = {
      strings: ["Software Engineer.", "Full stack Engineer.", "Backend Engineer.", "Frontend Engineer.", "Python Developer."],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      cursorChar: "_"
    };
    this.typed = new Typed(this.el, options);
  }
  
  render() {
    
    return (
      <Router>
        <section className="home bd-grid" id="home">
          <div className="home__data">
            <h1 className="home__title">Hi,<br />I'm <span className="home__title-color">Neel Suthar</span><br /><span className="animate_headline" ref={(el) => {
              this.el = el;
            }}></span></h1>
            <Link smooth={true} spy={true} offset={-140} to="about" activeClass="none" className="button">Heads Up &nbsp;<FontAwesomeIcon icon={faHandPointUp} className="rotate_180" /></Link>
          </div>

          <div className="home__social">
            <a href="https://github.com/neel-suthar" target="_blank" rel="noreferrer" className="home__social-icon"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="https://www.linkedin.com/in/neel-suthar/" target="_blank" rel="noreferrer" className="home__social-icon"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            <a href="https://twitter.com/neelSuthar_" target="_blank" rel="noreferrer" className="home__social-icon"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="https://www.instagram.com/neel.suthar_/" target="_blank" rel="noreferrer" className="home__social-icon"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://www.facebook.com/NEel.SuThAr.0607/" target="_blank" rel="noreferrer" className="home__social-icon"><FontAwesomeIcon icon={faFacebook} /></a>
          </div>

          <div className="home__img">
            <img className="home__img" src={bannerImage} alt="whyy" />
          </div>
        </section>
      </ Router>
    )
  }
}
