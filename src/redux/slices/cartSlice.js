// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addItem: (state, action) => {
            state.push(action.payload);
        },
        removeItem: (state, action) => {
            return state.filter((item) => item.id !== action.payload.id);
        },
        calculateTotal: (state, action) => {
            const total = state.reduce((total, item) => total + item.id, 0);
            return total;
        },
        increaseCartQuan: (state, action) => {
            state.forEach((item) => {
                if (item.id === action.payload.id) {
                    ++item.quantity;
                }
            });
        },
        decreaseCartQuan: (state, action) => {
            state.forEach((item) => {
                if (item.id === action.payload.id) {
                    --item.quantity;
                }
            });
        },
    },
});

export const { addItem, removeItem, calculateTotal } = cartSlice.actions;
export default cartSlice.reducer;
