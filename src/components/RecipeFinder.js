import './RecipeFinder.css';

const RecipeFinder = ({ recipes }) => {

  return (
    <div className="container">
      {recipes.map((recipe) => {
        return <div className="recipe" key={recipe.id}>
          <img src={recipe.image}/>
          {recipe.title}
        </div>
      })}
    </div>
  )
}

export default RecipeFinder;