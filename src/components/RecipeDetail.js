import './RecipeDetail.css';
import parse, { attributesToProps } from 'html-react-parser';

const RecipeDetail = ({ recipeData, savedRecipes, setSavedRecipes }) => {

  const recipe = () => {

    let steps = recipeData.analyzedInstructions[0]?.steps.map((val) => <div><b>Step {val.number}</b><p>{val.step}</p></div>)

    const options = {
      replace: domNode => {
        if (domNode.attribs && domNode.name === 'a') {
          const props = attributesToProps(domNode.attribs);
          return <b {...props} />;
        }
      }
    };

    const saveRecipe = () => {
      for ( let recipe of savedRecipes) {
        if(recipe.id === recipeData.id){
          return;
        }
      }
      let reps = [...savedRecipes, {
        title: recipeData.title,
        image: recipeData.image,
        id: recipeData.id
      }]
      setSavedRecipes(reps);
    }

    const saveText = () => {
      for ( let recipe of savedRecipes) {
        if(recipe.id === recipeData.id){
          return <button className='recipeDetail-saveButton'>Saved!</button>
        } else {
          return <button onClick={saveRecipe} className='recipeDetail-saveButton'>Save Recipe</button>
        }
      }
    }

    return (
      <div className="recipeDetail-page">
        <h1 className="recipeDetail-title">{recipeData.title}</h1>
        <img className="recipeDetail-img" src={recipeData.image} />
        <div className="recipeDetail-descript">
          <h2>Summary</h2>
          <div>{ parse(recipeData.summary, options)}</div>
          <h2>Instructions</h2>
          { console.log(steps) }
          {
            steps
          }
          <div className='recipeDetail-footer'>
            { saveText() }
          </div>
        </div>
        {/* <div className="recipeDetail-descript">  {parse(recipeData.instructions)}</div> */}
      </div>
    )
  }

  return (
    <div className="detail-container">
      {
        recipeData == null ? 
        <div className="selectRecipe"><div className="selectRecipeMessage">Find and select a recipe.</div></div> 
        : recipe()
      }
      {
        recipeData ? console.log(recipeData) : null
      }
    </div>
  )
}

export default RecipeDetail;