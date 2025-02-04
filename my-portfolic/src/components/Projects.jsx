import React from 'react';
import '../style.css';
import proj1 from '../assets/Mitsport.png'
import proj2 from '../assets/Law.png'
import proj3 from '../assets/Maze.png'
import proj4 from '../assets/Forest.png'




const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="heading">Projects</h2>
      <div className="projects-container">

        <div className="projects-box">
          <img src={proj1} alt="Mitsport Project" />
          <div className="project-layers project-layers1">
            <h4>Mitworking</h4>
            <p>This website helps facilitate connections and networking among MITians about sports.</p>
            <a target="_blank" href="https://sportsmit.netlify.app/"><i className='bx bx-link-external'></i></a>
          </div>
        </div>

        <div className="projects-box">
          <img src={proj2} alt="law Project" />
          <div className="project-layers project-layers2">
            <h4>LegalKonnect</h4>
            <p>Connect with the top law professional, get help from them and also the problem!</p>
            <a target="_blank" href="https://legalkonnect.netlify.app/"><i className='bx bx-link-external'></i></a>
          </div>
        </div>

        <div className="projects-box">
          <img src={proj3} alt="Maze game Project" />
          <div className="project-layers project-layers3">
            <h4>Maze Game</h4>
            <p>Naviagte the twist,embrace the turn in the maze of life.</p>
            <a target="_blank" href="https://223vaishu.github.io/CA-MAZE-PLAY/"><i className='bx bx-link-external'></i></a>
          </div>
        </div>

        <div className="projects-box">
          <img src={proj4} alt="forest Poetry" />
          <div className="project-layers project-layers4">
            <h4>Forest Project</h4>
            <p>Plant a seed of happiness,hope,success and Love</p>
            <a target="_blank" href="https://223vaishu.github.io/Forest-Project/"><i className='bx bx-link-external'></i></a>
          </div>
        </div>


      </div>
    </section>
  );
};

export default Projects;