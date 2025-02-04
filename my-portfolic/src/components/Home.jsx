import React from 'react';
import '../style.css';
import myphoto from '../assets/My Photo.jpeg'
import resume from '../assets/Vaishnavi_Resume.pdf';


const Home = () => {
  return (
    <div className="home" id="home">
      <div className="home-content">
        <h3>Hello, It's Me</h3>
        <h1>Vaishnavi Salunkhe</h1>
        <h3>And I'm a <span className="multiple-text"></span></h3>
        <p>Are you seeking to enhance your online presence and drive more leads through captivating websites and optimized landing pages? 
           Allow me to assist you in crafting a visually appealing website that resonates with your target audience and delivers results. 
           <br />
           Greetings! My name is Vaishnavi Salunkhe, Rookie web developer with strong web development skills, along with designing to boast your website in the market. 
           I am confident in my ability to deliver high-quality work that aligns with my clients' unique needs and surpasses their expectations.
        </p>
        <div className="social-media">
          <a target="_blank" href="https://github.com/223vaishu"><i className='bx bxl-github'></i></a>
          <a target="_blank" href="https://www.instagram.com/vaish____19/?hl=en"><i className='bx bxl-instagram'></i></a>
          <a target="_blank" href="https://www.linkedin.com/in/vaishnavi-salunkhe-63a870287/"><i className='bx bxl-linkedin-square'></i></a>
          {/* <a target="_blank" href="#"><i className='bx bxl-twitter'></i></a> */}
        </div>
        <a href={resume} download className="btn">Download CV</a>
      </div>
        
      <div className="home-img">
        <img src={myphoto} alt="Vaishnavi" />
      </div>
    </div>
  );
};

export default Home;