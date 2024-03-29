import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../../cartItems";

const initialState = {
    cartItems: cartItems,
    amount: 2,
    total: 0,
    isLoading: true
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = []
        }
    }

})

export const cartReducer = cartSlice.reducer