import React from 'react';
import '../style.css';
import myphoto from '../assets/My Photo.jpeg'

const About = () => {
  return (
    <section className="about" id="about">
      <div className="imgM">
        <img src={myphoto} alt="Vaishnavi Salunkhe" className="img2" />
      </div>

      <div className="about-content">
        <h2 className="heading">About <span>Me</span></h2>
        <h3>Frontend Developer!</h3>
        <p>I am a SY B.Tech student at MIT-ADT, Pune, Maharashtra. I am deeply passionate about coding. My goal is to become a full-stack software developer, 
           and I am always eager to seize opportunities for self-improvement, expanding my expertise in diverse programming languages and frameworks. 
           In the future, I aspire to learn AI/ML and Data Science, and also want to work in the Interior designing field.
        </p>
        <a href="#" className="btn">Read More</a>
      </div>
    </section>
  );
};

export default About;