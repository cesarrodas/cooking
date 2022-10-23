import './MyRecipes.css';
import Recipe from './Recipe';

const MyRecipes = ({ savedRecipes, setSelectedRecipe, page, setSavedRecipes }) => {

  return (
    <div className='myRecipes-parent'>
      <div className='myRecipes-container'>
        { savedRecipes ? savedRecipes.map((recipe) => {
            return <Recipe key={recipe.id} page={page} savedRecipes={savedRecipes} setSavedRecipes={setSavedRecipes} setSelectedRecipe={setSelectedRecipe} recipe={recipe}/> 
          }) : <></>
        }
      </div>
    </div>
  )
}

export default MyRecipes;