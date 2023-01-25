import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart/cartSlice";
import wishlistSlice from "./wishlist/wishlistSlice";
import compareSlice from "./compare/compareSlice";

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        wishlist: wishlistSlice.reducer,
        compare: compareSlice.reducer,
    }
});

export default store;