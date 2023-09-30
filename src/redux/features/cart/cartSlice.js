import { createSlice } from "@reduxjs/toolkit";
import { productsData } from "../../../assets/data/productData";

const initialState = {
  cartItems: [],
  quantity: 0,
  total: 0,
  isLoading: true,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const newId = parseInt(payload.id);
      // local product
      if (newId > 100) {
        const product = productsData.find((item) => item.id === newId);
        state.cartItems.push(product);
        // products from api
      } else {
        state.cartItems.push(payload);
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.quantity = 0;
      state.total = 0;
    },
    removeItem: (state, action) => {
      const productId = action.payload;
      state.cartItems = state.cartItems.filter(
        (item) => item.product_id !== productId
      );
    },
    increaseQuantity: (state, action) => {
      const productId = action.payload;
      const cartItem = state.cartItems.find(
        (item) => item.product_id === productId
      );
      cartItem.quantity += 1;
    },
    decreaseQuantity: (state, { payload }) => {
      const cartItem = state.cartItems.find(
        (item) => item.product_id === payload
      );
      cartItem.quantity -= 1;
    },
    calculateTotals: (state) => {
      let qty = 0;
      let amount = 0;
      state.cartItems.forEach((item) => {
        qty += item.quantity;
        amount += item.price * item.quantity;
      });
      state.quantity = qty;
      state.total = amount;
    },
  },
});

export const {
  addToCart,
  clearCart,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  calculateTotals,
} = cartSlice.actions;

export default cartSlice.reducer;
