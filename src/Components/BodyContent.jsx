import "../styles/BodyContent.css";
import SidePic from "../images/Side-Pic.png";

const BodyContent = () => {
  return (
    <div className="body-container">
      <div className="intro-container">
        <h1 className="intro">Hello, I'm Isaac</h1>
        <p className="title">A Software Developer</p>
        <p className="about-me">I create stunning websites that make our daily lives easy.</p>
      </div>
      <div className="pic-container">
        <img className="pic" src={SidePic} alt="" />
      </div>
    </div>
  );
};

export default BodyContent;

// <img className="picture" src={SidePic} alt="sidePic" />
