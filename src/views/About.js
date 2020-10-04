import React from 'react';
import './less/About.less';
import Projects from '../../assets/projects.json';

function About() {
  return (
    <>
      <div className="image-bar">
        <div className="image-ribbon"></div>
        <img className="image" src="/assets/pete.PNG" />
        <div className="image-ribbon"></div>
      </div>

      <div className="content-bar">
        <div className="content" dangerouslySetInnerHTML={{ __html: Projects.about }}></div>
      </div>
    </>
  )
}

export default About;