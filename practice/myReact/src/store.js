import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer
  }
});

export default store;

























// import { configureStore } from "@reduxjs/toolkit";

// const cartReducer = (state = [], action) => {
//   switch (action.type) {
//     case "ADD_TO_CART":
//       return [...state, action.payload];

//     default:
//       return state;
//   }
// };

// const store = configureStore({
//   reducer: {
//     cart: cartReducer,
//   },
// });

// export default store;