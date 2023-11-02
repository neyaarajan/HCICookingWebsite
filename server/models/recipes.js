const mongoose = require('mongoose')

const RecipeSchema = new mongoose.Schema({
    name: {
        type : String,
        required: true,
    },
    time : {
        type : Number,
        required: true,
    },
    ingredients : {
        type : String,
        required: true,
    },
    instructions : {
        type : String,
        required: true,
    },
});

const RecipeModel = mongoose.model("recipes", RecipeSchema)
module.exports = RecipeModel