import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlistProducts: [],
  cartProducts: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const productExists = state.wishlistProducts.find(
        (product) => product.id === action.payload.id
      );
      if (!productExists) {
        state.wishlistProducts.push(action.payload);
      }
    },
    removeFromWishlist: (state, action) => {
      state.wishlistProducts = state.wishlistProducts.filter(
        (product) => product.id !== action.payload.id
      );
    },
  },
});

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const productExists = state.cartProducts.find(
        (product) => product.id === action.payload.id // Corrected to '==='
      );
      if (productExists) {
        // If product exists, increase quantity
        productExists.quantity += 1;
      } else {
        // If product doesn't exist, add it with initial quantity of 1
        state.cartProducts.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.cartProducts = state.cartProducts.filter(
        (product) => product.id !== action.payload.id
      );
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export const { addToCart, removeFromCart } = cartSlice.actions;

export const wishlistSliceReducer = wishlistSlice.reducer;
export const cartSliceReducer = cartSlice.reducer;
