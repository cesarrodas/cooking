import './Header.css';
import Fork from '../assets/fork2.png';

const Header = () => {
  return (
    <div className='header'>
      <div>
        <img className="icon" src={Fork}/>
      </div>
      <h1>Recipe Finder</h1>
      {/* <input /> */}
    </div>
  )
}

export default Header;