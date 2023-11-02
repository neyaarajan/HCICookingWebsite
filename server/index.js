const express = require("express");
const app = express();
const mongoose = require('mongoose')
const RecipeModel = require('./models/recipes')

const cors = require("cors");
app.use(cors());

mongoose.connect(
    "mongodb+srv://hcichef:gatorcook@cluster0.ty6uegl.mongodb.net/cookingweb?retryWrites=true&w=majority")

app.get("/getRecipes", (req, res) => {
    RecipeModel.find({})
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      res.json(err);
    });  
});

//app.post()

app.listen(3001, () => {
    console.log("SERVER RUNNING")
});