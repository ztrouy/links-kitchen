const database = {
    materials: ['Hylian Rice', 'Big Hearty Truffle', 'Tabantha Wheat', 'Raw Prime Meat', 'Hateno Cheese', 'Bird Egg', 'Goat Butter', 'Fresh Milk', 'Cane Sugar', 'Raw Bird Thigh'],
    recipes: [
        {
            id: 1,
            name: "Cheesy Hylian Pizza",
            ingredients: ["Tabantha Wheat", "Hateno Cheese"]
        },
        {
            id: 2,
            name: "Cheesy Omelette",
            ingredients: ["Hateno Cheese", "Bird Egg"]
        },
        {
            id: 3,
            name: "Chicken Egg Fried Rice",
            ingredients: ["Hylian Rice", "Raw Prime Meat", "Bird Egg"]
        },
        {
            id: 4,
            name: "Prime Meat and Rice Bowl",
            ingredients: ["Hylian Rice", "Raw Prime Meat"]
        },
        {
            id: 5,
            name: "Egg Pudding",
            ingredients: ["Fresh Milk", "Cane Sugar", "Bird Egg"]
        },
        {
            id: 6,
            name: "Egg Tart",
            ingredients: ["Tabantha Wheat", "Cane Sugar", "Goat Butter", "Bird Egg"]
        },
        {
            id: 7,
            name: "Poultry Pilaf",
            ingredients: ["Hylian Rice", "Goat Butter", "Bird Egg", "Raw Bird Thigh"]
        }
    ]
}

const getRecipes = () => {
    return database.recipes
}

const getMaterials = () => {
    return database.materials
}

const addRecipe = (recipe) => {
    database.recipes.push(recipe)
}

module.exports = { getRecipes, getMaterials, addRecipe }