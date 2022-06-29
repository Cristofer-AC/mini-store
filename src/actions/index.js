import { SET_INITIAL_STATE } from "./types"

export const setInitialState = (payload) => ({
    type: SET_INITIAL_STATE,
    payload
})