import React, { useState } from 'react';
import Select, { components } from "react-select";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";


function Home({RecipeList, selectedOptions, selectedRecipe, setSelectedOptions, setSelectedRecipe}){
        // Sample suggested and saved recipes
        
        const savedRecipes = ['Saved Recipe 1', 'Saved Recipe 2'];
        const options = [
          {value: "eggs", label:"Eggs"},
          {value: "milk", label:"Milk"},
          {value: "cereal", label:"Cereal"},
          {value: "water", label:"Water"},
          {value: "oil", label:"Oil"},
        ];
      
        
        const navigate = useNavigate();
      
        const handleChangeSearch = (selectedOptions) => {
          setSelectedOptions(selectedOptions);
        };
        const handleRecipeSelect = (recipeId) => {
          setSelectedRecipe(recipeId);
          console.log(selectedRecipe);
          console.log(recipeId);

          navigate(`/recipes/${recipeId}`);
        };
    
    
    return (
      <div className="App">
        {/* Header */}
        <header className="header">
          <div className="icon">Dashboard Icon</div>
          <div className="icon">User Icon</div>
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
                {RecipeList.map((recipe) => (
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
            <h2>Saved Recipes</h2>
            <div className="widget">
              <ul className="recipe-list">
                {savedRecipes.map((recipe) => (
                  <li
                    key={recipe}
                    className= "recipe-item"
                    onClick={() => handleRecipeSelect(recipe)}
                  >
                    {recipe}
                  </li>
                ))}
              </ul>
            </div>
          </div>
      </div>
    );
  }

  export default Home;
