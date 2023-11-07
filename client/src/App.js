import React, { useState } from 'react';
import './App.css';
import Select from "react-select";

function App() {
  // State for managing entered and locked ingredients
  const [enteredIngredients, setEnteredIngredients] = useState([]);
  const [lockedIngredients, setLockedIngredients] = useState([]);
  const [selectedOption, setSelectedOption] = useState(0);

  // Sample suggested and saved recipes
  const suggestedRecipes = ['Recipe 1', 'Recipe 2', 'Recipe 3', 'Joe mama'];
  const savedRecipes = ['Saved Recipe 1', 'Saved Recipe 2'];
  const options = [
    {value: "eggs", label:"Eggs"},
    {value: "milk", label:"Milk"},
    {value: "cereal", label:"Cereal"},
    {value: "water", label:"Water"},
    {value: "oil", label:"Oil"},
  ];


  const handleChangeSearch = (selectedOption) => {
    setSelectedOption(selectedOption);
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
        <div className="search-bar-container">
          <h2>Enter Ingredients to Start!</h2>
            {/* <input
              className="search-bar"
              type="text"
              placeholder="Enter ingredients"
            /> */}
            <Select
              options = {options}
              value = {selectedOption}
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
                  key={recipe}
                  className="recipe-item"
                >
                  {recipe}
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
                  className={`recipe-item ${lockedIngredients.includes(recipe) && 'locked'}`}
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

export default App;
