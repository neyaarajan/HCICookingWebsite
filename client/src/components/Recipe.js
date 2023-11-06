import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for routing
//import './Recipe.css'; // You can create a separate CSS file for styling

function Recipe() {
  return (
    <div className="recipe-page">
      {/* Header */}
      <header className="recipe-header">
        <Link to="/" className="icon">Dashboard Icon</Link>
        <h1 className="title">Collegiate Cooks</h1>
        <h2 className="recipe-title">Sample Recipe</h2>
      </header>

      {/* Table Layout */}
      <div className="recipe-table">
        {/* Left Box - Steps */}
        <div className="steps-box">
          <h3>Steps</h3>
          <ul className="steps-list">
            <li>Step 1: ...</li>
            <li>Step 2: ...</li>
            {/* Add more steps as needed */}
          </ul>
        </div>

        {/* Right Box - Ingredients */}
        <div className="ingredients-box">
          <h3>Ingredients</h3>
          <ul className="ingredients-list">
            <li>Ingredient 1: ...</li>
            <li>Ingredient 2: ...</li>
            {/* Add more ingredients as needed */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Recipe;
