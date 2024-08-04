import '../styles/TechStack.css'
import react from '../images/react.png'
import javaScript from '../images/javascript.png'
import css from '../images/css-3.png'
import html from '../images/html-5.png'
import nodejs from '../images/nodejs.png'
import sql from '../images/sql-server.png'
import api from '../images/api.png'

const Skills = () => {
  return (
    <div className='skills-container'>
      <h2>My Skills</h2>
      <div className='skills'>
        <div className='skill'>
          <img src={react} alt="React" />
          <p>React</p>
        </div>
        <div className='skill'>
          <img src={javaScript} alt="JavaScript" />
          <p>JavaScript</p>
        </div>
        <div className='skill'>
          <img src={css} alt="CSS" />
          <p>CSS</p>
        </div>
        <div className='skill'>
          <img src={html} alt="HTML" />
          <p>HTML</p>
        </div>
        <div className='skill'>
          <img src={nodejs} alt="Node.js" />
          <p>Node.js</p>
        </div>
        <div className='skill'>
          <img src={sql} alt="SQL" />
          <p>SQL</p>
        </div>
        <div className='skill'>
          <img src={api} alt="API" />
          <p>API</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;