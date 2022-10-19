import './Recipe.css';

const Recipe = ({recipe}) => {
  return (
    <div className="recipe" key={recipe.id}>
      <img className="recipe-image" src={recipe.image}/>
      <h4 className="recipe-title">{recipe.title}</h4>
    </div>
  )
}

export default Recipe;