// WISHLIST
export const TOGGLE_WISHLIST = "TOGGLE_WISHLIST"

// CART
export const ADD_TO_CART = "ADD_TO_CART"
export const INC_CART_QTY = "INC_CART_QTY"
export const DEC_CART_QTY = "DEC__CART_QTY"
export const REMOVE_FROM_CART = "REMOVE_FROM_CART"
export const CLEAR_CART = "CLEAR_CART"

// Wishlist
export const toggleWishlist = (payload) => {
    return {
        type: TOGGLE_WISHLIST,
        payload
    }
}

// Cart
export const addToCart = (payload) => {
    return {
        type: ADD_TO_CART,
        payload
    }
}

export const incCartQty = (payload) => {
    return {
        type: INC_CART_QTY,
        payload
    }
}

export const decCartQty = (payload) => {
    return {
        type: DEC_CART_QTY,
        payload
    }
}

export const removeFromCart = (payload) => {
    return {
        type: REMOVE_FROM_CART,
        payload
    }
}

export const clearCart = (payload) => {
    return {
        type: CLEAR_CART,
        payload
    }
}