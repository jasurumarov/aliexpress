import { create } from 'zustand'
import { wishlist } from './wishlistSlice'
import { cart } from './cartSlice'

const useStore = create((set) => ({
    ...wishlist(set),
    ...cart(set)
}))

export default useStore