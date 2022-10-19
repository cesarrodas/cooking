import { useEffect, useState } from 'react';
import './App.css';

import Header from './components/Header';
import Loader from './components/Loader';
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
  const [loading, setLoading] = useState(false);
  // const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      if(!searchQuery) return;
      try {
        setLoading(true);
        await fetch(`https://cesarrodas.net/cloud/recipes?food=${searchQuery}`).then((response) => {
          return response.json();
        }).then((data) => {
          console.log("fetched", data.results);
          setLoading(false);
          setRecipes(data.results);
        });

      } catch (error) {
        setLoading(false);
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
        loading ? <Loader></Loader> : null
      }
      {
        page == PAGES.RECIPE_SEARCHER && !loading ?
        <RecipeFinder recipes={recipes} /> :
        <></>
      }
    </div>
  );
}

export default App;
