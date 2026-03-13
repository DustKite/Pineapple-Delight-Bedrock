const cookingPotRecipes = [
    {
        "identifer": "pineapple_delight:pineapple_juice",
        "tags": ["cooking_pot"],
        "container": {
            "item": "minecraft:glass_bottle"
        },
        "priority": 1.0,
        "time": 400,
        "ingredients": [
            { "item": "pineapple_delight:pineapple_side" },
            { "item": "pineapple_delight:pineapple_side" },
            { "item": "minecraft:sugar" }
        ],
        "result": {
            "item": "pineapple_delight:pineapple_juice"
        }
    },
    {
        "identifer": "pineapple_delight:pineapple_milkshake",
        "tags": ["cooking_pot"],
        "priority": 1.0,
        "time": 400,
        "ingredients": [
            { "item": "pineapple_delight:pineapple_side" },
            { "item": "pineapple_delight:pineapple_side" },
            { "item": "farmersdelight:milk_bottle" },
            { "item": "minecraft:sugar" },
            { "item": "minecraft:sugar" }
        ],
        "result": {
            "item": "pineapple_delight:pineapple_milkshake"
        }
    },
    {
        "identifer": "pineapple_delight:pineapple_fried_rice",
        "tags": ["cooking_pot"],
        "container": {
            "item": "pineapple_delight:pineapple"
        },
        "priority": 1.0,
        "time": 400,
        "ingredients": [
            { "item": "pineapple_delight:pineapple_side" },
            { "item": "farmersdelight:rice" },
            { "tag": "minecraft:egg" },
            { "item": "minecraft:carrot" }
        ],
        "result": {
            "item": "pineapple_delight:pineapple_fried_rice"
        }
    },
    {
        "identifer": "pineapple_delight:pineapple_ice_cream",
        "tags": ["cooking_pot"],
        "priority": 1.0,
        "time": 400,
        "ingredients": [
            { "item": "pineapple_delight:pineapple_side" },
            { "item": "pineapple_delight:pineapple_side" },
            { "item": "farmersdelight:milk_bottle" },
            { "item": "minecraft:sugar" },
            { "item": "minecraft:snowball" }
        ],
        "result": {
            "item": "pineapple_delight:pineapple_ice_cream"
        }
    }
];

export { cookingPotRecipes };