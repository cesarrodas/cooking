import { useEffect, useState } from 'react';
import './App.css';

import Header from './components/Header';
// import Loader from './components/Loader';
import Selector from './components/Selector';
import RecipeFinder from './components/RecipeFinder';

function App() {

  const PAGES = {
    RECIPE_SEARCHER: 'RECIPE_SEARCHER',
    MY_RECIPES: 'MY_RECIPES'
  }

  const [page, setPage] = useState(PAGES.RECIPE_SEARCHER);
  const [searchQuery, setSearchQuery] = useState('');
  const [recipes, setRecipes] = useState(null);
  // const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      if(!searchQuery) return;
      try {
        await fetch(`https://cesarrodas.net/cloud/recipes?food=${searchQuery}`).then((response) => {
          return response.json();
        }).then((data) => {
          console.log("fetched", data.results);
          setRecipes(data.results);
        });

      } catch (error) {
        console.log(error);
      }
    }
    fetchRecipes();
  }, [searchQuery]);

  return (
    <div className="parent-container">
      <Header setSearchQuery={setSearchQuery} />
      <Selector />
      <hr />
      {/* <Loader /> */}
      {
        page == PAGES.RECIPE_SEARCHER ?
        <RecipeFinder recipes={recipes} /> :
        <></>
      }
    </div>
  );
}

export default App;
