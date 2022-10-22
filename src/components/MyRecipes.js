import './MyRecipes.css';

const MyRecipes = ({ savedRecipes }) => {
  return (
    <div className='parent'>
      <div className='container'>{JSON.stringify(savedRecipes)}</div>
    </div>
  )
}

export default MyRecipes;