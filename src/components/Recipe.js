import './Recipe.css';

const Recipe = ({recipe, setSelectedRecipe, page}) => {
  return (
    <div className="recipe">
      <img className="recipe-image" src={recipe.image}/>
      <h4 className="recipe-title">{recipe.title}</h4>
      { page && page == 'MY_RECIPES' ? 
      <button>Remove</button> : null }
      <button onClick={() => { setSelectedRecipe(recipe.id) }} className="detail-button">Details</button>
    </div>
  )
}

export default Recipe;