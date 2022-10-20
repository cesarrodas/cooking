import './Recipe.css';

const Recipe = ({recipe, setSelectedRecipe}) => {
  return (
    <div className="recipe">
      <img className="recipe-image" src={recipe.image}/>
      <h4 className="recipe-title">{recipe.title}</h4>
      <button onClick={() => { setSelectedRecipe(recipe.id) }} className="detail-button">Details</button>
    </div>
  )
}

export default Recipe;