const { getRecipes, getMaterials, addRecipe } = require("./database.js")

const meals = []

let recipes = getRecipes()
const materials = getMaterials()

const createNewRecipe = ( materialsIndices, name ) => {

    const newRecipeObj = {    
        id: recipes.length + 1,
        name: name,
        ingredients: materialsIndices.map((materialIndex) => materials[materialIndex])
    }

    addRecipe(newRecipeObj)
    recipes = getRecipes()
}

const cook = (materialsIndices) => {

    const ingredientsList = materialsIndices.map((materialIndex) => materials[materialIndex])
    
    for (const recipe of recipes) {
        let recipeHasIngredients = true
        
        for (const ingredient of recipe.ingredients) {
            if(ingredientsList.includes(ingredient) === false) {
                recipeHasIngredients = false
                break
            }
        }

        if (recipeHasIngredients === true && recipe.ingredients.length === ingredientsList.length) {
            meals.push(recipe.name)
            return
        }
    }

    if (ingredientsList.length > 0) {
        meals.push("Dubious Food")
    }
}

const getMeals = () =>
{
    return meals
}

module.exports = { createNewRecipe, cook, getMeals }