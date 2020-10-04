import React from 'react';
import './less/Portfolio.less';
import Projects from '../../assets/projects.json';

function Portfolio() {
  return (
    <div className="portfolio-container">
      <div className="portfolio-title">
        <div className="header">Portfolio</div>
        <div className="content">A showcase of software written by Pete</div>
      </div>
      {Projects.portfolio.map(project => (
        <div className="portfolio-item" key={project.name}>
          <a className="header pointer" target="_blank" href={project.link || project.github} title={`Open ${project.name}`}>
            {project.name}
          </a>
          <div className="content" dangerouslySetInnerHTML={{ __html: project.content }}></div>
          <div className="links">
            {project.link && (
              <a target="_blank" href={project.link} title={`Open ${project.name}`}><i className="fas fa-external-link-alt"></i></a>
            )}
            {project.github && (
              <a target="_blank" href={project.github} title="Github">
                <i className="fab fa-github"></i>
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Portfolio;
