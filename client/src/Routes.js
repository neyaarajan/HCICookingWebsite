import React, { useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Recipe from './components/Recipe.js'
import Home from './components/Home'
import Saved from './components/Saved.js'
import Error from './components/Error.js'


export const MyRoutes = ({data}) => {
    const [RecipeList, SetRecipeList] = useState(data);
    const [selectedOptions, setSelectedOptions] = useState([]); //Stores the selected ingredients in a list
    const [selectedRecipe, setSelectedRecipe] = useState(null);
    const [SavedRecipeList, setSavedRecipes] = useState([]);


    return (
        <Router>
            <Routes>
                <Route path = "/recipes/:recipeID" element =
                 {<Recipe
                    RecipeList={RecipeList}
                 
                 />} />
                <Route path = "/" element = 
                {<Home
                    RecipeList={RecipeList}
                    selectedOptions={selectedOptions}
                    selectedRecipe={selectedRecipe}
                    setSelectedOptions={setSelectedOptions}
                    setSelectedRecipe={setSelectedRecipe}

                 />} />
                <Route path = "/saved" element = {<Saved />} />
                <Route path = "*" element = {<Error />} />
            </Routes>
        </Router>
    )
}

export default MyRoutes;