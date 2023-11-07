import { useParams, Link } from "react-router-dom";
 


function Recipe({ RecipeList }) {

  let { recipeID } = useParams();
  console.log(recipeID);
  const recipe = RecipeList.find(recipe => recipe._id === recipeID);
  const arraySteps = recipe.instructions.map((instructions) => <li>{instructions}</li>);
  const arrayIngredients = recipe.ingredients.map((ingredients) => <li>{ingredients}</li>);

  return (
    <div className="recipes-container">
      <header className="dashboard">
        <div className="menu-icon">Placeholder Image</div>
        <Link to="/" className="title-link">
          <h2>Collegiate Cooks</h2>
        </Link>
      </header>

      <div className="main-content">
        <h1 className="recipe-title">{recipe.name}</h1>
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
