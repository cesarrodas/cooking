import './Recipe.css';

const MY_RECIPES = 'MY_RECIPES';

const Recipe = ({recipe, setSelectedRecipe, page, savedRecipes, setSavedRecipes}) => {

  const removeRecipe = (recipeToRemove) => {
    const reps = savedRecipes.filter((recipe) => recipe.id != recipeToRemove);
    setSavedRecipes(reps);
  }

  return (
    <div className="recipe">
      <img className="recipe-image" src={recipe.image}/>
      <h4 className="recipe-title">{recipe.title}</h4>
      <div className="buttons-container">
      { page && page == MY_RECIPES ?
        <button onClick={() => { removeRecipe(recipe.id) }} className="remove-button">Remove</button> : null 
      }
      <button onClick={() => { setSelectedRecipe(recipe.id) }} className="detail-button">Details</button>
      </div>
    </div>
  )
}

export default Recipe;