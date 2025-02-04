import React from 'react';
import '../style.css';

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2 className="heading">Technical Skills</h2>

      <div className="skills-container">
        <div className="skills-box">
          <i className='bx bxl-html5'></i>
          <h3>HTML</h3>
          <p>HTML is the standard markup language for Web pages. With HTML you can create your own Website.</p>
          <a target="_blank" href="https://www.w3schools.com/html/" className="btn">Read More</a>
        </div>

        <div className="skills-box">
          <i className='bx bxl-css3'></i>
          <h3>CSS</h3>
          <p>CSS is the language we use to style an HTML document. CSS describes how HTML elements should be displayed.</p>
          <a target="_blank" href="https://www.w3schools.com/w3css/default.asp" className="btn">Read More</a>
        </div>

        <div className="skills-box">
          <i className='bx bxl-javascript'></i>
          <h3>JavaScript</h3>
          <p>JavaScript is the world's most popular programming language and the programming language of the Web.</p>
          <a target="_blank" href="https://www.w3schools.com/js/" className="btn">Read More</a>
        </div>

        <div className="skills-box">
          <i className='bx bxl-python'></i>
          <h3>Python</h3>
          <p>Python is a popular programming language. It can be used on a server to create web applications.</p>
          <a target="_blank" href="https://www.w3schools.com/python/" className="btn">Read More</a>
        </div>

        <div className="skills-box">
          <i className='bx bxl-c-plus-plus'></i>
          <h3>C++</h3>
          <p>C++ is a popular programming language. It is used to create computer programs and for game development.</p>
          <a target="_blank" href="https://www.w3schools.com/cpp/" className="btn">Read More</a>
        </div>

        <div className="skills-box">
          <i className='bx bxl-mongodb'></i>
          <h3>MongoDB</h3>
          <p>MongoDB is an open-source document-oriented database designed to store large-scale data efficiently.</p>
          <a target="_blank" href="https://www.mongodb.com/what-is-mongodb" className="btn">Read More</a>
        </div>

        <div className="skills-box">
          <h3>Express.js</h3>
          <p>Express is a lightweight and flexible routing framework meant to be augmented through middleware modules.</p>
          <a target="_blank" href="https://expressjs.com/" className="btn">Read More</a>
        </div>

        <div className="skills-box">
          <i className='bx bxl-react'></i>
          <h3>React.js</h3>
          <p>React is a development server that uses Webpack to compile React, JSX, and ES6, and auto-prefix CSS files.</p>
          <a target="_blank" href="https://www.w3schools.com/whatis/whatis_react.asp" className="btn">Read More</a>
        </div>

        <div className="skills-box">
          <i className='bx bxl-nodejs'></i>
          <h3>Node.js</h3>
          <p>Node.js is a free, open-source, cross-platform JavaScript runtime environment for creating servers, web apps, etc.</p>
          <a target="_blank" href="https://www.w3schools.com/nodejs/nodejs_intro.asp" className="btn">Read More</a>
        </div>

        <div className="skills-box">
          <i className='bx bxl-github'></i>
          <h3>GitHub</h3>
          <p>GitHub is an online software development platform used for storing, tracking, and collaborating on software projects.</p>
          <a target="_blank" href="https://www.w3schools.com/whatis/whatis_github.asp" className="btn">Read More</a>
        </div>
      </div>
    </section>
  );
};

export default Skills;