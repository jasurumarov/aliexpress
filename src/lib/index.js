import { legacy_createStore, combineReducers } from 'redux'
import { cart } from './reducer/cart'
import { wishlist } from './reducer/wishlist'

const reducer = combineReducers({
    cart,
    wishlist
})

export const store = legacy_createStore(reducer)