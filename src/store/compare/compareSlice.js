import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    compareItems: [],
};

const compareSlice = createSlice({
    name: 'compare',
    initialState,
    reducers: {
        addItem (state, action) {
            const newItem = action.payload;
            const existingItem = state.compareItems.find(item => item.id === newItem.id);

            if (existingItem) {
                state.compareItems = state.compareItems.filter(item => item.id !== newItem.id);
            } else {
                state.compareItems.push(newItem);
            }
        },
    }
});

export const compareActions = compareSlice.actions;

export default compareSlice;