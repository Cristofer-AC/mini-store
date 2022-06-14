const initialState = {
    "products": [
        {
            "name": "Hyper Potion",
            "price": 11,
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/hyper-potion.png"
        },
        {
            "name": "Revive",
            "price": 6,
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/revive.png"
        },
        {
            "name": "Fresh Water",
            "price": 8,
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/fresh-water.png"
        },
        {
            "name": "Soda-Pop",
            "price": 17,
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/soda-pop.png"
        },
        {
            "name": "Elixir",
            "price": 13,
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/elixir.png"
        }
    ]
}

export default function rootReducer (state = initialState, action) {
    switch (action.type) {
        default:
            return state
    }
}