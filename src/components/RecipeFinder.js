import './RecipeFinder.css';

import Recipe from './Recipe';

const RecipeFinder = ({ recipes, setSelectedRecipe }) => {

  return (
    <div className="parent">
      {
        recipes == null ? <div className="searchPage"><div className='searchText'>Search for a recipe.</div></div> : null
      }
      {
        recipes != null && recipes.length == 0 ? <div className='noResultsPage'><div className='noResultsPageText'>No recipes found.</div></div> : null
      }
      <div className="container">
        {recipes ? recipes.map((recipe) => {
          return <Recipe key={recipe.id} setSelectedRecipe={setSelectedRecipe} recipe={recipe}/> 
        }) : <></>}
      </div>
    </div>
  )
}

export default RecipeFinder;