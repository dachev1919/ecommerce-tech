import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    wishlistItems: [],
};

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        addItem (state, action) {
            const newItem = action.payload;
            const existingItem = state.wishlistItems.find(item => item.id === newItem.id);

            if (existingItem) {
                state.wishlistItems = state.wishlistItems.filter(item => item.id !== newItem.id);
            } else {
                state.wishlistItems.push(newItem);
            }
        },
    }
});

export const wishlistActions = wishlistSlice.actions;

export default wishlistSlice;