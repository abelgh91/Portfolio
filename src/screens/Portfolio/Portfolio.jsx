import React, { useState } from 'react'
import "./Portfolio.css";
import { projects } from "./projects";
import githubImg from "./svg/github-142.svg"
import linkedinImg from "./svg/linkedin-161.svg"
import Modal from '../components/Modal/Modal';

const Portfolio = () => {
    const [currentIndex, setCurrentIndex] = useState(null);

    const handleClick = (index) => setCurrentIndex(index);
    const clearCurrent = () => setCurrentIndex(null)

    const imagenGithub = githubImg;
    const imagenLinkedin = linkedinImg;

    const projectList = projects.map((project, index) => {
        return (
            <div onClick={() => handleClick(index)} key={index} className='portfolio-projects-frame' >
                <img src={project.image} alt={project.title} />
            </div>
        );
    });

    let currentProject = currentIndex >= 0 && projects[currentIndex];

    return ( 
        <div id="portfolio" className='portfolio-container' >
            <h1>Proyectos</h1>
            <div id="portfolioImgRRSS" className='portfolio-containerRRSS' >
                <div id="imagenGitHub" className='portfolio-rrss' >
                    <p>GitHub</p>
                    <a href="https://github.com/abelgh91" target="_blank" rel="noreferrer" ><img src={imagenGithub} alt="imagen github" /></a>
                </div>
                <div id="imagenLinkedin" className='portfolio-rrss' >
                    <p>Linkedin</p>
                    <a href="https://www.linkedin.com/in/abelgarciaheredia/" target="_blank" rel="noreferrer" ><img src={imagenLinkedin} alt="imagen linkedin" /></a>
                </div>
            </div>
                <div className='portfolio-grid'>
                    {currentProject && (
                        <Modal onClick={clearCurrent} title={currentProject.title} description={currentProject.description} image={currentProject.image} url={currentProject.url} repoUrl={currentProject.repoUrl} />
                    )}
                    {projectList}
                </div>
        </div>
     );
}
 
export default Portfolio;