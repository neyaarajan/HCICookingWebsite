import React, { useEffect } from 'react';
import Select, { components } from "react-select";
import { Link, useNavigate } from "react-router-dom";
import menuIcon from '../images/menuIcon.png'
import userIcon from '../images/userIcon.png'
import DashboardIcon from './dashboard';

function Landing({RecipeList, selectedOptions, selectedRecipe, savedRecipes, suggestedRecipes, setSelectedOptions, setSelectedRecipe, setSuggestedRecipes, options}) {
    const navigate = useNavigate();
      
    const handleHomeClick = () => {
        navigate('/home');
    }
   
   
    return (
        <div className="App">
          {/* Header */}
          <header className="header">
          <div className="icon">
            <DashboardIcon />
          </div>
        </header>
          
    
            {/* Main Content */}
            {/* Title */}
            <div className='main-content'>
                <h1 className="title">Welcome to Collegiate Cooks!</h1>
                <button onClick ={handleHomeClick} class="start-button"> Click here to start Cooking!</button>
            </div>

        </div>
      );
  }
  
  export default Landing;
