// import { applyMiddleware, createStore } from "redux";
// import { thunk } from "redux-thunk";
// import todosReducer from "./todo/todoReducer";

// const store = createStore(todosReducer, applyMiddleware(thunk));

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "../redux/features/crud/crudSlice";


export const store = configureStore({
  reducer: {
    posts: postsSlice,
  },
});