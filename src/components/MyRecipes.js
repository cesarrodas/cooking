import './MyRecipes.css';

const MyRecipes = ({ savedRecipes }) => {
  return (
    <div>{JSON.stringify(savedRecipes)}</div>
  )
}

export default MyRecipes;