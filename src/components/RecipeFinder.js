import './RecipeFinder.css';

const RecipeFinder = ({ recipes }) => {

  return (
    <div className="parent">
      <div className="container">
        {recipes ? recipes.map((recipe) => {
          return <div className="recipe" key={recipe.id}>
            <img src={recipe.image}/>
            {recipe.title}
          </div>
        }) : <></>}
      </div>
    </div>
  )
}

export default RecipeFinder;