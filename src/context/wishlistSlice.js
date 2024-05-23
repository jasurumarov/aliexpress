export const wishlist = (set) => {
    return {
        wish: JSON.parse(localStorage.getItem("wishlist")) || [],
        toggleHeart: (payload) => set((state) => {
            const index = state.wish.findIndex(el => el.id === payload.id)
            if (index < 0) {
                state.wish = [...state.wish, payload];
            } else {
                state.wish = state.wish.filter((el) => el.id !== payload.id);
            }
            localStorage.setItem("wishlist", JSON.stringify(state.wish));
            return state.wish
        })
    }
}