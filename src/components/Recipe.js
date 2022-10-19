import './Recipe.css';

const Recipe = ({recipe}) => {
  return (
    <div className="recipe" key={recipe.id}>
      <img className="recipe-image" src={recipe.image}/>
      <h4 className="recipe-title">{recipe.title}</h4>
      <button className="detail-button">Details</button>
    </div>
  )
}

export default Recipe;