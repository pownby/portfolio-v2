import React from 'react';
import './less/Professional.less';
import Projects from '../../assets/projects.json';

function Professional() {
  return (
    <div className="professional-container">
      <div className="professional-title">
        <div className="header">Professional Projects</div>
        <div className="content">Descriptions of some projects worked on in a professional setting</div>
      </div>
      {Projects.professional.map(project => (
        <div className="professional-item" key={project.name}>
          <div className="header">
            {project.name}
          </div>
          <div className="content" dangerouslySetInnerHTML={{ __html: project.content }}></div>
        </div>
      ))}
    </div>
  )
}

export default Professional;
