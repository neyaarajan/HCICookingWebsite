import { useParams, Link } from "react-router-dom";
import menuIcon from '../images/menuIcon.png'
 


function Recipe({ RecipeList, savedRecipes, setSavedRecipes }) {

  let { recipeID } = useParams();
  const recipe = RecipeList.find(recipe => recipe._id === recipeID);
  const arraySteps = recipe.instructions.map((instructions) => <li>{instructions}</li>);
  const arrayIngredients = recipe.ingredients.map((ingredients) => <li>{ingredients}</li>);

  const isSaved = savedRecipes.some((savedRecipe) => (savedRecipe._id === recipeID));

  const saveRecipe = () => {
    if (!isSaved) {
      setSavedRecipes([...savedRecipes, recipe]);
      console.log(savedRecipes);
    }
  };
  return (
    <div className="page-container">
      <header className="dashboard">
        <div className="menu-icon">
          <img src={menuIcon} alt="menuIcon" />
        </div>
        <Link to="/home" className="title-link">
          <h2>Collegiate Cooks</h2>
        </Link>
      </header>

      <div className="main-content">
        <h1 className="page-title">
          {recipe.name}
          {!isSaved && <button className="saveButton" onClick={saveRecipe}>Save Recipe</button>}
        </h1>
        <div className="recipe-table">
          <div className="column steps">
            <h3>Steps</h3>
            <p>Time: {recipe.time} minutes</p>
            <ul>{arraySteps}</ul>
          </div>
          <div className="column ingredients">
            <h3>Ingredients</h3>
            <ul>{arrayIngredients}</ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recipe;
