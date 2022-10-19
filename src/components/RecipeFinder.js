import './RecipeFinder.css';

import Recipe from './Recipe';

const RecipeFinder = ({ recipes }) => {

  return (
    <div className="parent">
      <div className="container">
        {recipes ? recipes.map((recipe) => {
          return <Recipe recipe={recipe}/> 
        }) : <></>}
      </div>
    </div>
  )
}

export default RecipeFinder;