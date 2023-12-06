import React, { useEffect } from 'react';
import Select, { components } from "react-select";
import { Link, useNavigate } from "react-router-dom";
import menuIcon from '../images/menuIcon.png'
import userIcon from '../images/userIcon.png'

function Home({RecipeList, selectedOptions, selectedRecipe, savedRecipes, suggestedRecipes, setSelectedOptions, setSelectedRecipe, setSuggestedRecipes, options}){

      
        
        const navigate = useNavigate();
      
        const handleChangeSearch = (selectedOptions) => {
          setSelectedOptions(selectedOptions);
          console.log(selectedOptions);
        };
        const handleRecipeSelect = (recipeId) => {
          setSelectedRecipe(recipeId);
          navigate(`/recipes/${recipeId}`);
        };
        
        /*
        When selectedOptions or RecipeList is changed
        this function iterates over each recipe and checks
        if the recipe's ingredients contains at least
        one selected ingredient (using .some() function).
        If ingredient and option.label are the same, true is return
        */
        useEffect(() => {
          const filterRecipes = RecipeList.filter((recipe) => {
            return recipe.ingredients.some((ingredient) =>
            selectedOptions.some((option) =>
              ingredient === option.label
            )
          );
          });
          setSuggestedRecipes(filterRecipes);
          console.log(selectedOptions);


        }, [selectedOptions, RecipeList]);
    
    return (
      <div className="App">
        {/* Header */}
        <header className="header">
          <div className="icon">
            <img src={menuIcon} alt="menuIcon" />
          </div>
          <div className="icon">
            <img src={userIcon} alt="userIcon" />
          </div>
        </header>
  
        {/* Main Content */}
          <div className="search-bar-container">
          <h1 className="title">Collegiate Cooks</h1>
            <h2>Enter Ingredients to Start!</h2>
              <Select
                options = {options}
                value = {selectedOptions}
                onChange={handleChangeSearch}
                isMulti = {true}
              />
          </div>
  
          {/* Suggested Recipes Widget */}
          <div className='suggested'>
            <h2>Suggested Recipes</h2>
            <div className="widget">
              <ul className="recipe-list">
                {suggestedRecipes.map((recipe) => (
                  <li
                    key={recipe._id}
                    className="recipe-item"
                    onClick={() => handleRecipeSelect(recipe._id)}
                  >
                    {recipe.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
  
          {/* Saved Recipes Widget */}
          <div className = 'saved'>
          <Link to="/saved" className="title-link">
            <h2>Saved Recipes</h2>
          </Link>
            <div className="widget">
              <ul className="recipe-list">
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

  export default Home;
