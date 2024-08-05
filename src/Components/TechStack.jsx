import "../styles/TechStack.css";
import react from "../images/react.png";
import javaScript from "../images/javascript.png";
import css from "../images/css-3.png";
import html from "../images/html-5.png";
import nodejs from "../images/nodejs.png";
import sql from "../images/sql-server.png";
import api from "../images/api.png";
import git from "../images/social.png";
import deployment from "../images/deployment.png";

const Skills = () => {
  const skills = [
    { src: react, alt: "react" },
    { src: javaScript, alt: "javascript" },
    { src: css, alt: "css" },
    { src: html, alt: "html" },
    { src: nodejs, alt: "nodejs" },
    { src: sql, alt: "sql" },
    { src: git, alt: "git" },
    { src: deployment, alt: "deployment" },
    { src: api, alt: "api" },
  ];

  return (
    <div className="skills-container">
      <h2>Tech Stack</h2>
      <div className="skills">
        {skills.map((skill, index) => (
          <div key={index} className="skill">
            <img src={skill.src} alt={skill.alt} />
            <p>{skill.alt}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
