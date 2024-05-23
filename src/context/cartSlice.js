export const cart = (set) => ({
    cartList: JSON.parse(localStorage.getItem("cart")) || [],
    addToCart: (payload) => set((state) => {
        const index = state.cartList.findIndex(el => el.id === payload.id);
        if (index < 0) {
            state.cartList = [...state.cartList, { ...payload, quantity: 1 }];
        } else {
            state.cartList = state.cartList.map((item, inx) =>
                inx === index ? { ...item, quantity: item.quantity + 1 } : item
            );
        }
        localStorage.setItem("cart", JSON.stringify(state.cartList));
        return { cartList: state.cartList };
    })
});
