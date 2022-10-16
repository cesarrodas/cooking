import Search from '../assets/search_icon.svg';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="searchBarContainer">
      <div className="centerer">
        <input className="searchBar"/><button className="searchButton"><img className="search-icon" src={Search} /></button>
      </div>
    </div>
  )
}

export default SearchBar;