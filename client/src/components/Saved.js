import { Link, useNavigate } from "react-router-dom";
import menuIcon from '../images/menuIcon.png'

function Saved({RecipeList, setSelectedRecipe, savedRecipes}) {
  const navigate = useNavigate();

  const handleRecipeSelect = (recipeId) => {
    setSelectedRecipe(recipeId);
    navigate(`/recipes/${recipeId}`);
  };

  return (
    <div className="page-container">
      <header className="dashboard">
        <div className="menu-icon">
          <img src={menuIcon} alt="menuIcon" />
        </div>
        <Link to="/" className="title-link">
          <h2>Collegiate Cooks</h2>
        </Link>
      </header>
      <div className="main-content">
        <h1 className="page-title">Saved Recipes!</h1>
        <div className="widget-savedPage">
          <ul className ="recipe-list">
            {savedRecipes.map((recipe) => (
              <li
                key={recipe}
                className= "recipe-item"
                onClick={() => handleRecipeSelect(recipe._id)}
              >
                {recipe.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Saved;