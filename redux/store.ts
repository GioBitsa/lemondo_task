import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "./Slices/filtersSlice";
import cartReducer from "./Slices/cartSlice";

export const store = configureStore({
  reducer: { filtersReducer, cartReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
