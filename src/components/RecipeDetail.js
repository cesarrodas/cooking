import './RecipeDetail.css';
import parse, { attributesToProps } from 'html-react-parser';

const RecipeDetail = ({ recipeData }) => {

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
            <button className='recipeDetail-saveButton'>Save Recipe</button>
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