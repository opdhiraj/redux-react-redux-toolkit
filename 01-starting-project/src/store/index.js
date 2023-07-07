// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from "./auth";

//with redux toolkit
const store = configureStore({
  //storing all reducers in key value pair and accessing with key name

  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;

////for redux core

//reducer
// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return { counter: state.counter + 1, showCounter: state.showCounter };
//   }
//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "decrement") {
//     return { counter: state.counter - 1, showCounter: state.showCounter };
//   }
//   if (action.type === "toogle") {
//     return { showCounter: !state.showCounter, counter: state.counter };
//   }
//   return state;
// };

//redux core
//store
// const store = createStore(counterReducer);
