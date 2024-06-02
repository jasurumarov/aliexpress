import { REMOVE_FROM_CART, ADD_TO_CART, CLEAR_CART, INC_CART_QTY, DEC_CART_QTY } from "../action/action";

const initialState = JSON.parse(localStorage.getItem('cart')) || []

export const cart = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART: {
            let index = state.findIndex(el => el.id === action.payload.id);
            if (index < 0) {
                state = [...state, { ...action.payload, quantity: 1 }];
            } else {
                state = state.map((el, inx) =>
                    inx === index ? { ...el, quantity: el.quantity + 1 } : item
                );
            }
            localStorage.setItem("cart", JSON.stringify(state))
            return state
        }
        case INC_CART_QTY: {
            let index = state.findIndex(el => el.id === action.payload.id);
            state = state.map((el, inx) =>
                inx === index ? { ...el, quantity: el.quantity + 1 } : item
            );
            localStorage.setItem("cart", JSON.stringify(state))
            return state
        }
        case DEC_CART_QTY: {
            let index = state.findIndex(el => el.id === action.payload.id);
            state = state.map((el, inx) =>
                inx === index ? { ...el, quantity: el.quantity - 1 } : item
            );
            localStorage.setItem("cart", JSON.stringify(state))
            return state
        }
        case REMOVE_FROM_CART: {
            state = state.filter(el => el.id !== action.payload.id);
            localStorage.setItem("cart", JSON.stringify(state))
            return state
        }
        case CLEAR_CART: {
            state = []
            localStorage.setItem("cart", JSON.stringify(state))
            return state
        }
        default:
            return state
    }
}