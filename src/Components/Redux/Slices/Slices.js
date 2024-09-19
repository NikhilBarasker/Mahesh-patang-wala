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
        (product) => product.id === action.payload.id
      );
      if (productExists) {
        productExists.quantity += 1;
      } else {
        state.cartProducts.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.cartProducts = state.cartProducts.filter(
        (product) => product.id !== action.payload.id
      );
    },
    updateCartQuantity: (state, action) => {
      const product = state.cartProducts.find((product) => product.id === action.payload.id);
      if (product) {
        product.quantity = action.payload.quantity;
      }
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export const { addToCart, removeFromCart, updateCartQuantity } = cartSlice.actions;

export const wishlistSliceReducer = wishlistSlice.reducer;
export const cartSliceReducer = cartSlice.reducer;
