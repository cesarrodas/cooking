import './Selector.css';

const Selector = ({setPage, currentPage}) => {

  const PAGES = {
    RECIPE_SEARCHER: 'RECIPE_SEARCHER',
    MY_RECIPES: 'MY_RECIPES',
    RECIPE_DETAILS: 'RECIPE_DETAILS'
  }

  const pageHandler = (page) => {
    if(currentPage != page){
      setPage(page);
    }
  }

  return (
    <div className="page-selector">
      <button className={`${currentPage == PAGES.RECIPE_SEARCHER ? "selected" : ""}`} onClick={() => pageHandler(PAGES.RECIPE_SEARCHER)}>Recipes</button>
      <button className={`${currentPage == PAGES.MY_RECIPES ? "selected" : ""}`} onClick={() => pageHandler(PAGES.MY_RECIPES)}>My Recipes</button>
      <button className={`${currentPage == PAGES.RECIPE_DETAILS ? "selected" : ""}`} onClick={() => pageHandler(PAGES.RECIPE_DETAILS)}>Recipe Details</button>
    </div>
  )
}

export default Selector;