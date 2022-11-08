import { createSlice } from "@reduxjs/toolkit";
import dataJson from "../data.json";

const initialState = {
  cartItems: dataJson,
  buyItem: [],
  openClose: true,
  total: 0
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.buyItem.push(action.payload);
    },
    openCloseCart: (state) => {
      state.openClose = !state.openClose;
    },
    increase: (state, action) => {
      const cartItem = state.buyItem.find((item) => {
        return item.id === action.payload;
      });
      cartItem.quantity += 1;
    },
    decrease: (state, action) => {
      const cartItem = state.buyItem.find((item) => {
        return item.id === action.payload;
      });
      cartItem.quantity -= 1;
    },
    removeItem: (state, action) => {
      state.buyItem = state.buyItem.filter(
        (item) => item.id !== action.payload
      );
    },
    removeAll: (state) => {
      state.buyItem = [];
    },
    totalCounter: (state) => {
      let total = 0;
      state.buyItem.forEach(item => {
        total += Number(item.quantity) * Number(item.price)
      })
      state.total = total
    }
  },
});

export const {
  addItem,
  openCloseCart,
  increase,
  decrease,
  removeItem,
  removeAll,
  totalCounter
} = cartSlice.actions;

export default cartSlice.reducer;
