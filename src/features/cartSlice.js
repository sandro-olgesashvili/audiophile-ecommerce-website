import { createSlice } from "@reduxjs/toolkit";
import dataJson from "../data.json";

let prodL = JSON.parse(localStorage.getItem('buyitem'))

const initialState = {
  cartItems: dataJson,
  buyItem: prodL ?prodL  : [],
  openClose: false,
  openCloseCartMobile:false,
  total: 0,
  paymentOnOff : false
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
    },
    closeCart: (state) => {
      state.openClose = false
    },
    onOffMobile : (state) => {
      state.openCloseCartMobile = !state.openCloseCartMobile
    },
    closerMenu: (state) => {
      state.openCloseCartMobile = false
    },
    paymentToggle: (state) => {
      state.paymentOnOff = !state.paymentOnOff
    },
    paymentOff: (state) => {
      state.paymentOnOff = false
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
  totalCounter,
  closeCart,
  onOffMobile,
  closerMenu,
  paymentToggle,
  paymentOff
} = cartSlice.actions;

export default cartSlice.reducer;
