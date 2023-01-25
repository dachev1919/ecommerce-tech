import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    totalQuantity: 0,
    totalAmount: 0,
};

function totalAmountCalculate (items) {
    return items.reduce((total, item) => total + Number(item.price) * Number(item.quantity), 0);
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
            const newItem = action.payload;
            const existingItem = state.cartItems.find(item => item.id === newItem.id);
            state.totalQuantity++;

            const { id, image, title, brand, description, price, rating, link, secondImage, thirdImage, category } = newItem;
            if (!existingItem) {
                state.cartItems.push({
                    id,
                    image,
                    title,
                    brand,
                    description,
                    price,
                    rating,
                    link,
                    secondImage,
                    thirdImage,
                    category,
                    quantity: 1,
                    totalPrice: price,
                });
            } else {
                existingItem.quantity++;
                existingItem.totalPrice = Number(existingItem.totalPrice) + Number(price);
            }

            state.totalAmount = totalAmountCalculate(state.cartItems);
        },
        removeItem (state, action) {
            const id = action.payload;
            const productInCart = state.cartItems.find(item => item.id === id);
            state.totalQuantity--;

            if (productInCart.quantity === 1) {
                state.cartItems = state.cartItems.filter(item => item.id !== id);
            } else {
                productInCart.quantity--;
                productInCart.totalPrice = Number(productInCart.totalPrice) - Number(productInCart.price);
            }

            state.totalAmount = totalAmountCalculate(state.cartItems);
        },
        deleteItem (state, action) {
            const id = action.payload;
            const existingItem = state.cartItems.find(item => item.id === id);

            if (existingItem) {
                state.cartItems = state.cartItems.filter(item => item !== id);
                state.totalQuantity = state.totalQuantity - existingItem.quantity;
            }

            state.totalAmount = totalAmountCalculate(state.cartItems);
        }
    }
});

export const cartAction = cartSlice.actions;
export default cartSlice;