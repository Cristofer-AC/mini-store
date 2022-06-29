import { SET_INITIAL_STATE } from "./actions/types"

const initialState = {
	"products": [],
}

export default function rootReducer (state = initialState, action) {
    switch (action.type) {
        case SET_INITIAL_STATE:
            return {
                ...state, 
                products: action.payload
            }

        default:
            return state
    }
}