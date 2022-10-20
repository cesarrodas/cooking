import './RecipeDetail.css';
import { useEffect, useState } from 'react';

const RecipeDetail = ({ recipeData }) => {

  const recipe = () => (
    <div class="recipeDetail-page">
      <h1 class="recipeDetail-title">{recipeData.title}</h1>
    </div>
  )

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