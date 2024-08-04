import '../styles/BodyContent.css'
import profilePic from '../images/ProfilePic.jpg'

const BodyContent = () => {
  return (
    <div className='body-container'>
      <div id='about-me' className='about-container'>
        <p className='text-container'>
          Hello my name is Isaac Malin. I am a React Developer.
          Although I specialize working on the front-end of web applications,
          I am comfortable working with the back-end. I enjoy creating application
          that solve real world problems and make life as we know it easier.
        </p>
        <p className='text-container'>
          What excites me about software development is the constant learning that is required
          to be a good developer. I can't wait to share my skills with the world and make life
          easier for those in need.
        </p>
      </div>
      <div className='about-container'>
        <img className='my-picture' src={profilePic} alt="Profile Pic" />
      </div>
    </div>
  )
}

export default BodyContent;