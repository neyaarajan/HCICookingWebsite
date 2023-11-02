import './App.css';
import { useState, useEffect } from "react";
import Axios from "axios";

function App() {
  const [listOfRecipes, setListOfRecipes] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/getRecipes").then((response) => {
      setListOfRecipes(response.data);
    })
  }, []);

  return (
    <div className="App"> 
      <div className='recipesDisplay'>
        {listOfRecipes.map((recipe) => {
          return (
            <div>
              <hl>Name: {recipe.name}</hl>
              <hl>Time: {recipe.time}</hl>
              <hl>Ingredients: {recipe.ingredients}</hl>
              <hl>Instructions: {recipe.instructions}</hl>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
