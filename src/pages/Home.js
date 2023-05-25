import React from 'react';
import "../styles/Home.css";


function Home() {
  return (
    <div className="home">
      <div className="about">
      <h2>Hi, My Name is Mayuresh</h2>
      <div className="prompt">
        <p>Software developer with a passion for learning and creating </p>
        <p>Linkedin icon</p>
        <p>Email icon</p>
        <p>Github icon</p>
      </div>
      </div>
      <div className="skills"></div>
      <h1>Skills</h1>
      <ol className="list">
        <li className="item">
          <h2>Front-End</h2>
          <span>
            ReactJs, HTML, CSS, NPM, BootStrap, MaterialUi
          </span>
        </li>
        <li className="item">
          <h2>Back-End</h2>
          <span>
            NodeJS, ExpressJS, MySQL, MongoDB
          </span>
        </li>
        <li className="item">
          <h2>Languages</h2>
          <span>JavaScript, Java, Python, C, C++</span>
        </li>
      </ol>
    </div>
    
  );
}

export default Home;