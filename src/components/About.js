import React from 'react'
import myImage from '../img/nabout.jpg';

function About() {
  return (
    <section className="about section " id="about" style={{backgroundColor: "#f8f8ff"}}>
      <h2 className="section-title">About Me</h2>

      <div className="about__container bd-grid">
        <div className="about__img">
          <img src={myImage} alt="about-img" />
        </div>

        <div>
          <p className="about__text">A student who loves to make <span className="blue__it">complex, real-world, and stand-out products</span> by <span className="blue__it">breaking, analyzing, and fixing logic</span> to provide users with the utmost <span className="blue__it">satisfaction</span>. Currently pursuing a <span className="blue__it">Master's degree in Computer Science</span>.</p>
          <a href="#about" className="button">Get Started &nbsp;<i className='bx bx-download' ></i></a>
        </div>
      </div>

    </section>
  )
}

export default About
