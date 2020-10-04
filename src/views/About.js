import React from 'react';
import './less/About.less';

function About() {
  return (
    <>
      <div className="image-bar">
        <div className="image-ribbon"></div>
        <img className="image" src="/assets/pete.PNG" />
        <div className="image-ribbon"></div>
      </div>

      <div className="content-bar">
        <div className="content">
          <p>Pete is a software developer who specializes in Web Development, particularly in front end solutions. He has most of his experience in C# .NET systems, MS SQL, and a variety of front end technologies including Angular, AngularJS, Bootstrap, jQuery, HTML5, CSS3, Typescript, and plain old ES5. He enjoys learning new technologies and solving challenging issues.</p>
          <p>Pete has graduate and undergraduate degrees in Computer Science and finds it delightful when he can apply concepts and algorithms learned from those programs into applications. He is passionate about writing efficient and performant solutions. He takes pride in his work and expects his releases to have minimal bugs.</p>
          <p>Outside of work, Pete enjoys relaxing with quiet time, although hiking and traveling are also welcome activities. He has traveled across a number of states and continents, but has many more to visit.</p>
        </div>
      </div>
    </>
  )
}

export default About;