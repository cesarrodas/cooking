import './Header.css';
import Fork from '../assets/fork2.png';
import SearchBar from './SearchBar';

const Header = ({ setSearchQuery }) => {
  return (
    <div className='header'>
      <div>
        <img className="icon" src={Fork}/>
      </div>
      <h1>Recipe Finder</h1>
      <SearchBar setSearchQuery={setSearchQuery} />
    </div>
  )
}

export default Header;