import React, { useState, useRef, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Recipe from './components/Recipe.js'
import Home from './components/Home'
import Saved from './components/Saved.js'
import Error from './components/Error.js'



export const MyRoutes = ({data}) => {
    const [RecipeList, SetRecipeList] = useState(data);
    const [selectedOptions, setSelectedOptions] = useState([]); //Stores the selected ingredients in a list
    const [selectedRecipe, setSelectedRecipe] = useState(null);
    const [savedRecipes, setSavedRecipes] = useState([]);
    const [optionList, setOptionList] = useState([]);
    const [suggestedRecipes, setSuggestedRecipes] = useState([]);


    useEffect(() => {
        const extractUniqueIngredients = (RecipeList) => {
            const ingredientsSet = new Set();
            RecipeList.forEach((recipe) => {
                recipe.ingredients.forEach((ingredient) => {
                    ingredientsSet.add(ingredient);
                });
            });

            const uniqueIngredients = Array.from(ingredientsSet);

            const options = uniqueIngredients.map((ingredient) => ({
                value: ingredient.toLowerCase(),
                label: ingredient,
            }));
            return options;
        };
        const options = extractUniqueIngredients(RecipeList)
        setOptionList(options);
    }, [RecipeList]);


    return (
        <Router>
            <Routes>
                <Route path = "/recipes/:recipeID" element =
                 {<Recipe
                    RecipeList={RecipeList}
                    savedRecipes = {savedRecipes}
                    setSavedRecipes={setSavedRecipes}
                 />} />
                <Route path = "/" element = 
                {<Home
                    RecipeList={RecipeList}
                    selectedOptions={selectedOptions}
                    selectedRecipe={selectedRecipe}
                    suggestedRecipes = {suggestedRecipes}
                    savedRecipes = {savedRecipes}
                    setSelectedOptions={setSelectedOptions}
                    setSelectedRecipe={setSelectedRecipe}
                    setSuggestedRecipes = {setSuggestedRecipes}
                    options = {optionList}

                 />} />
                <Route path = "/saved" element = 
                {<Saved 
                    RecipeList={RecipeList}
                    setSelectedRecipe={setSelectedRecipe}
                    savedRecipes = {savedRecipes}
                
                />} />
                <Route path = "*" element = {<Error />} />
            </Routes>
        </Router>
    )
}

export default MyRoutes;