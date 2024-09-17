import { configureStore } from "@reduxjs/toolkit";
import { wishlistSliceReducer, cartSliceReducer } from "./Slices/Slices";

export const store = configureStore({
  reducer: {
    wishlist: wishlistSliceReducer,
    cart: cartSliceReducer,
  },
});
