import { useEffect, useState } from 'react';
import './App.css';

import Header from './components/Header';
import Loader from './components/Loader';
import Selector from './components/Selector';
import RecipeFinder from './components/RecipeFinder';
import RecipeDetail from './components/RecipeDetail';
import useLocalStorage from './hooks/useLocalStorage';
import MyRecipes from './components/MyRecipes';

function App() {

  const PAGES = {
    RECIPE_SEARCHER: 'RECIPE_SEARCHER',
    MY_RECIPES: 'MY_RECIPES',
    RECIPE_DETAILS: 'RECIPE_DETAILS'
  }

  const [page, setPage] = useState(PAGES.RECIPE_SEARCHER);
  const [searchQuery, setSearchQuery] = useState('');
  const [recipes, setRecipes] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [recipeData, setRecipeData] = useState(null);
  const [savedRecipes, setSavedRecipes] = useLocalStorage("savedRecipes", []);
  // const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      if(!searchQuery) return;
      try {
        setLoading(true);
        await fetch(`https://cesarrodas.net/cloud/recipes?food=${searchQuery}`).then((response) => {
          return response.json();
        }).then((data) => {
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

  useEffect(() => {
    const fetchRecipeData = async () => {
      if(!selectedRecipe) return;
      try {
        setLoading(true);
        await fetch(`https://cesarrodas.net/cloud/recipeData?recipe=${selectedRecipe}`).then((response) => {
          return response.json();
        }).then((data) => {
          setLoading(false);
          setRecipeData(data);
          setPage(PAGES.RECIPE_DETAILS);
        })
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    }
    fetchRecipeData();
  }, [selectedRecipe])

  return (
    <div className="parent-container">
      <Header setSearchQuery={setSearchQuery} />
      <Selector currentPage={page} setPage={setPage}/>
      <hr />
      {
        loading ? <Loader></Loader> : null
      }
      {
        page == PAGES.RECIPE_SEARCHER && !loading ?
        <RecipeFinder recipes={recipes} setSelectedRecipe={setSelectedRecipe} /> : null
      }
      {
        page == PAGES.MY_RECIPES && !loading ?
        <MyRecipes savedRecipes={savedRecipes} setSavedRecipes={setSavedRecipes} setSelectedRecipe={setSelectedRecipe} page={page} /> : null
      }
      {
        page == PAGES.RECIPE_DETAILS && !loading ?
        <RecipeDetail recipeData={recipeData} setSavedRecipes={setSavedRecipes} savedRecipes={savedRecipes} /> : null
      }

    </div>
  );
}

export default App;
