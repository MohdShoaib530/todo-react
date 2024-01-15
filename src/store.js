import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./Slices/todoSlice";

const store = configureStore({ 
    reducer: {
        todo: todoReducer
    },
    devTools: process.env.NODE_ENV !== 'production'
 });

export default store;
