const {createNewRecipe, cook, getMeals} = require("./functions.js")


createNewRecipe([0,1], "Mushroom Rice Balls")

cook([1, 0])

//`Hateno Cheese` and a `Bird Egg` will make a `Cheesy Omelette` - lincoln
cook([5, 4])

//- `Fresh Milk`, `Cane Sugar`, and a `Bird Egg` will make `Egg Pudding` - lincoln
cook([7, 8, 5])

//- `Tabantha Wheat`, `Cane Sugar`, `Goat Butter`, and a `Bird Egg` will make an `Egg Tart` - lincoln
cook([2, 8, 6, 5])

// Cooks 'Prime Meat and Rice Bowl' - Zachary
cook([0, 3])

// Cooks 'Cheesy Hylian Pizza' - Clare 
cook([2, 4])

// Cooks 'Poultry Pilaf' using 'Hylian Rice', 'Goat Butter', 'Bird Egg', and 'Raw Bird Thigh' - Zachary
cook([0, 6, 9, 5])

//Cooks 'Chicken Egg Fried Rice' - Clare
cook([0, 3, 5])

//should be dubious food
cook([3, 4, 2])

//should log nothing
cook([])

console.log('MEALS:')
console.log('---------------')
for (const meal of getMeals()) {
    console.log(meal)
}

