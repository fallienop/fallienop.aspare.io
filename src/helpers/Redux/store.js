import { configureStore } from "@reduxjs/toolkit";
import aspareSlicer from "./aspareSlicer";
// import favoritesReducer from "./favoritesSlice";

export const store = configureStore({
  reducer: {
    aspareSlice: aspareSlicer,
    // favorites: favoritesReducer,
  },
  // middleware:(getDefaultMiddleware) => getDefaultMiddleware()
});
export default store;
