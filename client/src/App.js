import React, { useState } from 'react';
import './App.css';

function App() {
  // State for managing entered and locked ingredients
  const [enteredIngredients, setEnteredIngredients] = useState([]);
  const [lockedIngredients, setLockedIngredients] = useState([]);

  // Sample suggested and saved recipes
  const suggestedRecipes = ['Recipe 1', 'Recipe 2', 'Recipe 3'];
  const savedRecipes = ['Saved Recipe 1', 'Saved Recipe 2'];

  // Function to handle ingredient selection
  const handleIngredientSelect = (ingredient) => {
    // Check if the ingredient is already in the locked list
    if (!lockedIngredients.includes(ingredient)) {
      setLockedIngredients([...lockedIngredients, ingredient]);
    }
  };

  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="icon">Dashboard Icon</div>
        <h1 className="title">Collegiate Cooks</h1>
        <div className="icon">User Icon</div>
      </header>

      {/* Main Content */}
      <main>
        <div className="enter-ingredients">Enter Ingredients to Start!</div>
        <div className="search-bar-container">
          <input
            className="search-bar"
            type="text"
            placeholder="Enter ingredients"
          />
        </div>

        {/* Suggested Recipes Widget */}
        <div className="widget left">
          <h2>Suggested Recipes</h2>
          <ul className="recipe-list">
            {suggestedRecipes.map((recipe) => (
              <li
                key={recipe}
                className="recipe-item"
                onClick={() => handleIngredientSelect(recipe)}
              >
                {recipe}
              </li>
            ))}
          </ul>
        </div>

        {/* Saved Recipes Widget */}
        <div className="widget right">
          <h2>Saved Recipes</h2>
          <ul className="recipe-list">
            {savedRecipes.map((recipe) => (
              <li
                key={recipe}
                className={`recipe-item ${lockedIngredients.includes(recipe) && 'locked'}`}
                onClick={() => handleIngredientSelect(recipe)}
              >
                {recipe}
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;
