import { useState } from 'react';
import Search from '../assets/search_icon.svg';
import './SearchBar.css';

const SearchBar = ({ setSearchQuery }) => {

  const [search, setSearch] = useState('');
  // I need something that handles the keys pressed. 
  const handleChange = (event) => {
    setSearch(event.target.value);
  }

  const handleKeyDown = function(e) {
    if (e.key === 'Enter') {
      setSearchQuery(search);
    }
  }

  const handleClick = () => {
    setSearchQuery(search);
  }

  return (
    <div className="searchBarContainer">
      <div className="centerer">
        <input value={search} onKeyDown={handleKeyDown} onChange={handleChange} className="searchBar"/>
        <button onClick={handleClick} className="searchButton"><img className="search-icon" src={Search} /></button>
      </div>
    </div>
  )
}

export default SearchBar;