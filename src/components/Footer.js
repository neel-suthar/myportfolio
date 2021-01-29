import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCopyright } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn, faTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer__social">
        <a href="https://github.com/neel-suthar" target="_blank" rel="noreferrer" className="footer__icon"><FontAwesomeIcon icon={faGithub} /></a>
        <a href="https://www.linkedin.com/in/neel-suthar/" target="_blank" rel="noreferrer" className="footer__icon"><FontAwesomeIcon icon={faLinkedinIn} /></a>
        <a href="https://twitter.com/neelSuthar_" target="_blank" rel="noreferrer" className="footer__icon"><FontAwesomeIcon icon={faTwitter} /></a>
        <a href="https://www.instagram.com/neel.suthar_/" target="_blank" rel="noreferrer" className="footer__icon"><FontAwesomeIcon icon={faInstagram} /></a>
        <a href="https://www.facebook.com/NEel.SuThAr.0607/" target="_blank" rel="noreferrer" className="footer__icon"><FontAwesomeIcon icon={faFacebook} /></a>
        <a href="mailto:neel.suthar@mavs.uta.edu" className="footer__icon"><FontAwesomeIcon icon={faEnvelope} /></a>
      </div>
      <p>All Rights Reserved by Neel. &nbsp; <FontAwesomeIcon icon={faCopyright} /> &nbsp; 2021 - Present</p>
    </footer>
  )
}

export default Footer
