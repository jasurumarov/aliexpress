import { TOGGLE_WISHLIST } from "../action/action"

const initialState = JSON.parse(localStorage.getItem('wishlist')) || []

export const wishlist = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_WISHLIST: {
            let index = state.findIndex(el => el.id === action.payload.id);
            if (index < 0) {
                state = [...state, action.payload];
            } else {
                state = state.filter(el => el.id !== action.payload.id)
            }
            localStorage.setItem("wishlist", JSON.stringify(state))
            return state
        }
        default:
            return state
    }
}