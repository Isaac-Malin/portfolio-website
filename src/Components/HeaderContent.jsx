import '../styles/HeaderContent.css'

const HeaderContent = () => {
  return (
    <div className='header-container'>
      <h1 className='name'>Isaac Malin</h1>
      <div className='list'>
        <button className='list-item'>Work</button>
        <button className='list-item'>About</button>
        <button className='list-item'>Contact</button>
      </div>
    </div>
  )
}

export default HeaderContent;